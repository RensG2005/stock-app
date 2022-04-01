import DashboardLayout from "../components/layouts/DashboardLayout"
import { getSession, useSession } from 'next-auth/react';
import Title from "../components/ui/Title";

export async function getServerSideProps(context) {
    const session = await getSession(context)
    if (session === null) {
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

const Profile = () => {
    const { data: session } = useSession();
    const user = session?.user;

    return (
        <>
            <DashboardLayout title="Profile" user={user}>
                <Title h1>Hello {user.name}</Title>
            </DashboardLayout>
        </>
    )
}

export default Profile