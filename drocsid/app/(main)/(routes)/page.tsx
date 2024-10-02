'use client'

import { SignInButton, SignOutButton, useAuth } from '@clerk/nextjs'
import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  const { sessionId } = useAuth()

  const buttonClass =
    'inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition text-center'

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="absolute top-4 right-4 flex items-center space-x-4">
        {sessionId && (
          <>
            <ModeToggle />
            <div className={buttonClass}>
              <SignOutButton signOutOptions={{ sessionId }} />
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col items-center justify-center flex-1">
        {!sessionId ? (
          <div className={buttonClass}>
            <SignInButton />
          </div>
        ) : (
          <p className="text-lg">You're signed in.</p>
        )}
      </div>
    </div>
  )
}





// import { ModeToggle } from "@/components/mode-toggle";
// import { UserButton } from "@clerk/nextjs";

// export default function Home() {
//   return (
//     <div>
//       <UserButton afterSignOutUrl="/" />
//       <ModeToggle />
//     </div>
//   );
// }
