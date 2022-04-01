import DashboardLayout from "../components/layouts/DashboardLayout"
import { getSession, useSession } from 'next-auth/react';
import Title from "../components/ui/Title";

export async function getServerSideProps(context) {
    const session = await getSession(context)
    if(session === null) {
        return {
            redirect: {
                destination: '/auth/signin',
                permanent: false
        }
    }
    }
    return {
        props: {
            session
        },
    }
}

const Settings = () => {
    const { data: session } = useSession();
    const user = session?.user;

    return (
        <>
            <DashboardLayout user={user}>
                <Title h1>Settings:</Title>
            </DashboardLayout>
        </>
    )
}

export default Settings