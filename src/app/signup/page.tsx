import { SignUp } from "@clerk/nextjs"

const page = () => {
  return (
    <div style={{margin: 'auto', width: '50%', marginTop: '100px'}}>
    <SignUp/>
    </div>
  )
}

export default page