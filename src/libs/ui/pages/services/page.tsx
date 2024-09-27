import {
  ButtonGroup,
  FlexBox,
  HeroSection,
  IconLink,
  Image,
  Layout,
  Maintenance,
} from '@/libs/ui'

const ServicePage = () => {
  const buttonArray = [
    {
      label: 'Cta',
      variant: 'primary',
      backgroundColor: 'var(--color-danger)',
    },
    {
      label: 'alex',
      variant: 'primary',
      backgroundColor: 'var(--color-dark-gray)',
    },
  ]
  return (
    <Layout>
      <HeroSection
        title="alex services"
        description="we offer you a diversity of services"
        imageUrl="/images/profile.png"
        imageAlt="Alex profile"
        buttons={buttonArray}
      />
      <ButtonGroup buttons={buttonArray} />
      <Image
        src="/images/profile.png"
        alt="man at a desk"
        aspect="1 / 1"
        width="400px"
        height="auto"
        loading="lazy"
      />
    </Layout>
  )
}

export default ServicePage
