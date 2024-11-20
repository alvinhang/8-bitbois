import { ChatHeader } from "@/components/chat/chat-header";
import { ChatInput } from "@/components/chat/chat-input";
import { ChatMessages } from "@/components/chat/chat-messages";
import { MediaRoom } from "@/components/media-room";
import { getOrCreateConversation } from "@/lib/conversation";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface MemberIdPageProps {
    params: {
        memberId: string;
        serverId: string;
    },
    searchParams: {
        video?: boolean;
    }
}

const MemberIdPage = async ({
    params,
    searchParams,
}: MemberIdPageProps) => {
    const profile = await currentProfile();

    if (!profile) {
        return auth().redirectToSignIn();
    }

    const currentMember = await db.member.findFirst({
        where: {
            serverId: params.serverId,
            profileId: profile.id
        },
        include: {
            profile: true,
        },
    });

    if (!currentMember) {
        return redirect("/");
    }

    const conersation = await getOrCreateConversation(currentMember.id, params.memberId);

    if (!conersation) {
        return redirect(`/servers/${params.serverId}`);
    }

    const { memberOne, memberTwo } = conersation;

    const otherMember = memberOne.profileId === profile.id ? memberTwo : memberOne;

    return ( 
        <div className="bg-white dark:bg-[#313338] flex flex-col h-screen">
            <ChatHeader 
                imageUrl={otherMember.profile.imageUrl}
                name={otherMember.profile.name}
                serverId={params.serverId}
                type="conversation"
            />
            {searchParams.video && (
                <MediaRoom 
                    chatId={conersation.id}
                    video={true}
                    audio={true}
                />   
            )}
            {!searchParams.video && (
                <>
                    <ChatMessages 
                        member={currentMember}
                        name={otherMember.profile.name}
                        chatId={conersation.id}
                        type="conversation"
                        apiUrl="/api/direct-messages"
                        paramKey="conversationId"
                        paramValue={conersation.id}
                        socketUrl="/api/socket/direct-messages"
                        socketQuery={{
                            conversationId: conersation.id,
                        }}
                    />
                    <ChatInput 
                        name={otherMember.profile.name}
                        type="conversation"
                        apiUrl="/api/socket/direct-messages"
                        query={{
                            conversationId: conersation.id,
                        }}
                    />
                </>
            )}
        </div>
    );
}
 
export default MemberIdPage;