import { Layout, Maintenance } from '@/libs/ui'
import { HeroSection, HomeHeader } from '../../organism'
import herobox from '../../../../content/herobox.json'
import { link } from 'fs'

const HomePage = () => {
  const buttonArray = [
    {
      label: 'contact me',
      variant: 'primary',
      backgroundColor: 'var(--color-danger)',
      link: 'https://webdevamin.com/',
    },
    {
      label: 'read more',
      variant: 'primary',
      backgroundColor: 'var(--color-dark-gray)',
    },
  ]

  return (
    <Layout>
      <HeroSection
        title={herobox.title}
        buttons={buttonArray}
        description={herobox.description}
        imageAlt="alex profile"
        imageUrl="/images/profile.png"
      />
    </Layout>
  )
}

export default HomePage
