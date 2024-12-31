import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";

export default function App() {
  const { isSignedIn, user, isLoaded } = useUser()

  return (
    <main>
      <nav className="border-b border-gray-200 bg-transparent shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
          <span className="text-2xl font-semibold bg-gradient-to-b from-blue-300 to-purple-600 bg-clip-text text-transparent">
            Home
          </span>
          <div className="hidden w-full md:block md:w-auto">
            {isLoaded && isSignedIn ? (
              <div className="flex">
                <div>
                  <UserButton />
                </div>
              </div>
            ) : (
              <SignInButton />
            )}
          </div>
        </div>
      </nav>
      {isSignedIn ? (<div>Your Email address is "{user?.emailAddresses[0].emailAddress}"</div>) :
        (<div>Please sign in to see your email address here.</div>)
      }
    </main>
  );
} 