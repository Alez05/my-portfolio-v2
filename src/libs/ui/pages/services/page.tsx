import {
  ButtonGroup,
  FlexBox,
  GridBox,
  HeroSection,
  IconLink,
  Image,
  InfoSection,
  Layout,
  Maintenance,
} from '@/libs/ui'

const ServicePage = () => {
  const linkArray = [
    {
      text: 'yoooooo',
      variant: 'primary',
      backgroundColor: 'var(--color-danger)',
      href: '/contact',
    },
    {
      text: 'CJ',
      variant: 'primary',
      backgroundColor: 'var(--color-dark-gray)',
      href: '/services',
    },
  ]
  return (
    <Layout>
      <HeroSection
        title="alex services"
        description="we offer you a diversity of services"
        imageUrl="/images/profile.png"
        imageAlt="man at computer"
        links={linkArray}
      />

      <GridBox gridTemplateColumns="repeat(2, 1fr)" gap={10}>
        <InfoSection
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam"
          title="title"
          icon="book"
          backgroundColor="var(--color-danger)"
        />
        <InfoSection
          title="babosnki"
          icon="cogs"
          description="lorebabosnki regele la bani"
          backgroundColor="blue"
        />
        <InfoSection
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam"
          title="title"
          icon="clipboardtext"
          backgroundColor="var(--color-primary)"
        />
        <InfoSection
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam"
          title="title"
          icon="facebook1"
          backgroundColor="var(--color-info)"
        />
      </GridBox>
    </Layout>
  )
}

export default ServicePage
