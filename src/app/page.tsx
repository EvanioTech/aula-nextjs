
import { Suspense } from "react";
import GithubProfile from "@/components/github-profile";
import Teste from "@/components/teste";


export default async function Home() {

  return (
    <div>
      <h1>Home!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <GithubProfile />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Teste />
      </Suspense>
     
    </div>

  )
    
  
}
