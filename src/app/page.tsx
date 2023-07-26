import Link from 'next/link'

const page = () => {
  return (
    <div>
        <h1>Hola bienvenido</h1>
        <Link href="/userprofile">Ir al perfil</Link>
    </div>
  )
}

export default page