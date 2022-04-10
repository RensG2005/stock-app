import Layout from '../components/layouts/Layout';
import Title from '../components/ui/Title';

export default function Custom500() {
  return (
    <Layout title="Something went wrong">
      <div className="min-h-[40vh]">
        <Title type="h2" extraclass="text-center">
          Error 500 - Something went wrong.
        </Title>
      </div>
    </Layout>
  );
}
