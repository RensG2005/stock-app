import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import DashboardLayout from '../../../components/layouts/DashboardLayout';

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
  }
  return { props: { session, ticker } };
}

interface Props {
  session: Session;
  ticker: string;
}

function Stock({ session, ticker }: Props) {
  const user = session?.user;

  return (
    <DashboardLayout title={`${ticker}`} user={user}>
      <h1>{ticker}</h1>
    </DashboardLayout>
  );
}

export default Stock;
