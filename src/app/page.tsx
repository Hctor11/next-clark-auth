import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'

const page = () => {
  return (
    <div>
        <h1 className=''>Hola bienvenido</h1>
        <div className="user-profile">
          <UserButton></UserButton>
        </div>
        <Link href="/userprofile">Ir al perfil</Link>
    </div>
  )
}

export default page