import { getSession, useSession } from "next-auth/react"
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
     }  
    }
  

const Stock = () => {
    const {status, data: session } = useSession();
    if(status ===  "loading") return null
    const user = session?.user;

    return (
        <DashboardLayout user={user}>

        </DashboardLayout>
    )
}

export default Stock