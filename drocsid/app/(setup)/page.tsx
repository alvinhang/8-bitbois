import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";

const SetupPage = async () => {
  // Get the current user profile or create one if it doesnt exist
  const profile = await initialProfile();

  // Find the first server where the current user is a member
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  // if hte server exists, redirect to the server page
  if (server) return redirect("/servers/${server.id");

  // If no server is found, show this !
  return <div>Create a Server</div>;
};

export default SetupPage;
