import useCurrentUser from '@/hooks/userCurrentUser'
import { NextPageContext } from 'next'
import { getSession, signOut } from 'next-auth/react'

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context)

    if(!session) {
        return { 
            redirect: {
                destination: '/auth',
                permanant: false
            }
        }
    }

    return {
        props: {}
    }
}

export default function Home() {
const { data: user } = useCurrentUser();


 return (
    <>
        <h1>Nexflix Clone</h1>
        <p className='text-white'>Logged in as {user?.email}</p>
        <button className='h-10 w-full bg-white' onClick = {() => signOut()}>Logout</button>
    </>
 )
}
