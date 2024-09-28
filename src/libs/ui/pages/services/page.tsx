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
      label: 'yoooooo',
      variant: 'primary',
      backgroundColor: 'var(--color-danger)',
    },
    {
      label: 'CJ',
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
        imageAlt="man at computer"
        buttons={buttonArray}
      />
    </Layout>
  )
}

export default ServicePage
