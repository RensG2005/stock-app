import DashboardLayout from "../components/layouts/DashboardLayout"
import { getSession, useSession } from 'next-auth/react';
import Title from "../components/ui/Title";
import useFetch from "../hooks/useFetch";

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

const Dashboard = () => {
    const { data: session } = useSession();
    const user = session?.user;

    const { data }: any = useFetch('http://localhost:3000/api/overview')

    return (
        <DashboardLayout user={user} title="Overview">
            <Title h1>{data.Name} Overview:</Title>
            <div className="grid grid-cols-2">
                {data && Object.keys(data).map(key => {
                    return (
                        <div className="grid grid-cols-2" key={key}>
                            <Title h4>{key}</Title>
                            <p>{data[key]}</p>
                        </div>
                    )
                }
                )}
            </div>
        </DashboardLayout>
    )
}

export default Dashboard