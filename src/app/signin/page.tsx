import { SignIn } from '@clerk/nextjs'

const page = () => {
  return (
    <div className="login" style={{margin: 'auto', width: '50%', marginTop: '100px'}}>
    <SignIn/>
    </div>
  )
}

export default page