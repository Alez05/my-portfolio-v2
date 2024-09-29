import {
  ButtonGroup,
  FlexBox,
  HeroSection,
  IconLink,
  Image,
  InfoSection,
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
      <InfoSection description="alex" title="alex" icon="book" />
    </Layout>
  )
}

export default ServicePage
