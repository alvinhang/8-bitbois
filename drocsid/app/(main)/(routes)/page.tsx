// 'use client'

// import { SignInButton, SignOutButton, useAuth } from '@clerk/nextjs'

// export default function Home() {
//   const { sessionId } = useAuth()

//   const buttonClass =
//     'inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition text-center'

//   return !sessionId ? (
//     <div className={buttonClass}>
//       <SignInButton />
//     </div>
//   ) : (
//     <div className={buttonClass}>
//       <SignOutButton signOutOptions={{ sessionId }} />
//     </div>
//   )
// }

import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
}
