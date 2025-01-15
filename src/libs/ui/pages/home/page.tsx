import { Layout, Maintenance } from '@/libs/ui'
import { Carousel, HeroSection, HomeHeader, Section1a } from '../../organism'
import herobox from '../../../../content/herobox.json'

const HomePage = () => {
  const linksArray = [
    {
      text: 'contact me',
      variant: 'primary',
      backgroundColor: 'var(--color-danger)',
      href: '/contact',
      title: 'link to contact page',
    },
    {
      text: 'read more',
      variant: 'primary',
      backgroundColor: 'var(--color-dark-gray)',
      href: '/services',
      title: 'link to services',
    },
  ]

  return (
    <Layout>
      <HeroSection
        title={herobox.title}
        links={linksArray}
        description={herobox.description}
        imageAlt="alex profile"
        imageUrl="/images/profile.png"
      />
      <Section1a
        title="Alex e boss title"
        description="alex este boss description"
        subtitle="alex este boss subtitle"
        linkUnu="/contact"
        linkDoi="/services"
        linkTextUnu="Alex e boss link 1"
        linkTextDoi="Alex e boss link 2"
        linkTitleUnu="Alex e boss link title 1"
        linkTitleDoi="Alex e boss link title 2"
      />
      <Carousel />
    </Layout>
  )
}

export default HomePage
