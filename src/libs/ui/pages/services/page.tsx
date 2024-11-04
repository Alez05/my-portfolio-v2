import {
  ButtonGroup,
  FlexBox,
  GridBox,
  HeroSection,
  IconLink,
  Image,
  InfoSection,
  Layout,
  LinkGroup,
  Maintenance,
  TextGroup,
} from '@/libs/ui'
import { TTextConfig } from '../../molecule/textgroup/textgroup.type'
import { TText } from '@/libs/type'

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

      <TextGroup
        content={[
          {
            content: 'This is a title',
            as: 'h1',
            fontSize: 40,
            fontWeight: 700,
          },
          {
            content: 'This is a subtitle',
            as: 'h2',
            fontSize: 24,
            fontWeight: 600,
          },
          {
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam, sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. ',
            fontSize: 18,
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '2px',
          },
        ]}
      ></TextGroup>

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
