import { Layout, Maintenance } from '@/libs/ui'
import { HeroSection, HomeHeader } from '../../organism'
import herobox from '../../../../content/herobox.json'
import { link } from 'fs'

const HomePage = () => {
  const linksArray = [
    {
      text: 'contact me',
      variant: 'primary',
      backgroundColor: 'var(--color-danger)',
      href: '/contact',
    },
    {
      text: 'read more',
      variant: 'primary',
      backgroundColor: 'var(--color-dark-gray)',
      href: '/services',
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
    </Layout>
  )
}

export default HomePage
