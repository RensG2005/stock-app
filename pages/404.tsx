import Layout from '../components/layouts/Layout';
import Title from '../components/ui/Title';

export default function Custom404() {
  return (
    <Layout title="Something went wrong">
      <div className="min-h-[40vh] z-20 relative flex justify-center items-center">
        <Title type="h2" extraclass="text-center">
          404 - Page not found.
        </Title>
      </div>
    </Layout>
  );
}
