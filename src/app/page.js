'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

// useRouter -> next/navigate

// index route
export default function Home() {

const router = useRouter()

function handleNavigate(){
  router.push('/products')
}

console.log(router)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Let's Start with Next JS</h1>
      <Link href={'/accounts'}>Navigate to Account Page</Link><br/>
      <Link href={'/products'}>Navigate to Product Page</Link>

      <h2 className="font-bold mt-3 text-lg">Alternative Way of navigating usomg useRouter</h2>
      <button onClick={handleNavigate}>Navigate to Product Page using use router</button>
    </main>
  );
}
