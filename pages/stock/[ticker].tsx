import { getSession } from 'next-auth/react';
import DashboardLayout from '../../components/layouts/DashboardLayout';

export async function getServerSideProps(context) {
  const { ticker } = context.query;
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  } return { props: { session, ticker } };
}

function Stock({ session, ticker }) {
  const user = session?.user;

  return (
    <DashboardLayout title={`${ticker}`} user={user} />
  );
}

export default Stock;
