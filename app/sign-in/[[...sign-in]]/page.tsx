import { SignIn } from "@clerk/nextjs";

export default function Page() {

  
  return (
    <>
      <p className="text-center">this is sign-in page</p>
      <SignIn afterSignInUrl={"/about"}/>
    </>
  )
}