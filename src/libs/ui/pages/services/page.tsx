import {
  ButtonGroup,
  FlexBox,
  HeroSection,
  IconLink,
  Layout,
  Maintenance,
} from '@/libs/ui'

const ServicePage = () => {
  const buttonArray = [
    {
      label: 'Cta',
      variant: 'primary',
      backgroundColor: 'var(--color-background)',
    },
    { label: 'alex', variant: 'primary', backgroundColor: 'var(--color-text)' },
    {
      label: 'alex',
      variant: 'primary',
      backgroundColor: 'var(--color-sunburst)',
    },
    { label: 'alex', variant: 'primary', backgroundColor: 'var(--color-primary)' },
    { label: 'alex', variant: 'primary' },
    { label: 'alex', variant: 'primary' },
  ]
  return (
    <Layout>
      <HeroSection
        title="alex services"
        description="we offer you a diversity of services"
        buttonText="cta"
        imageUrl="/images/profile.png"
        imageAlt="Alex profile"
      />
      <ButtonGroup buttons={buttonArray} />
    </Layout>
  )
}

export default ServicePage
