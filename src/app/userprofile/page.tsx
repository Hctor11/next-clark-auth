import { UserProfile } from "@clerk/nextjs"
import Link from "next/link"

const page = () => {
  return (
    <div>
        <UserProfile></UserProfile>
        <Link href='/'>go to home page</Link>
    </div>
  )
}

export default page