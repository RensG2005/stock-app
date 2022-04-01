import { getSession } from "next-auth/react"
import DashboardLayout from "../../components/layouts/DashboardLayout"

export async function getServerSideProps(context) {
        const ticker = context.query.ticker
        const session = await getSession(context)
        if(!session) {
            return {
                redirect: {
                    destination: '/auth/signin',
                    permanent: false
            }
        }
    } return { props: { session, ticker } } 
    }
  

const Stock = ({ session, ticker }) => {
    const user = session?.user;

    return (
        <DashboardLayout title={`${ticker}`} user={user}>

        </DashboardLayout>
    )
}

export default Stock