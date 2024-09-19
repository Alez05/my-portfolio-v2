import { HeroSection, Layout, Maintenance } from '@/libs/ui';

const ServicePage = () => {
  return (
    <Layout>
      <HeroSection
        title='alex services'
        description='we offer you a diversity of services'
        buttonText='cta'
        imageUrl='/images/profile.png'
        imageAlt='Alex profile'
      />
    </Layout>
  );
};

export default ServicePage;
