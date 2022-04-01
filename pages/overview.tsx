import DashboardLayout from "../components/layouts/DashboardLayout"
import { getSession } from 'next-auth/react';
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

const Dashboard = ({ session }) => {
    const user = session?.user;

    const { data, error }: any = useFetch('http://localhost:3000/api/overview')
    console.log(error)
    return (
        <DashboardLayout user={user} title="Overview">
            <Title type="h1">{data?.Name} Overview:</Title>
            <div className="grid grid-cols-2">
                {data && Object.keys(data).map(key => {
                    return (
                        <div className="grid grid-cols-2" key={key}>
                            <Title type="h4">{key}</Title>
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