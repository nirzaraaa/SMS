import React from 'react';
import { SignOutButton, UserButton } from '@clerk/clerk-react';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/react-router';

export default function Dashboard() {
  return (
    <>
      <SignedIn>
      <div className="flex items-center gap-3">
         <UserButton afterSignOutUrl="/login" />
       <SignOutButton>
          <button className="text-black">Sign Out</button>
        </SignOutButton>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
