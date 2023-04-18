import useCurrentUser from '@/hooks/userCurrentUser'
import { NextPageContext } from 'next'
import { getSession, signOut } from 'next-auth/react'
import Navbar from '@/components/Navbar'
import Billboard from '@/components/Billboard'

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
        <Navbar/>
        <Billboard />
    </>
 )
}
