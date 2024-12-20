import { Button, FlexBox, Image, Text } from '@/libs/ui/atom'
import { THeroSection } from './herosection.type'
import { ButtonGroup, LinkGroup } from '@/libs/ui/molecule'
import { Socials } from '../socials'

const HeroSection = ({
  description,
  imageUrl,
  title,
  imageAlt,
  links,
}: THeroSection) => {
  return (
    <FlexBox margin="5rem auto" padding={40}>
      <FlexBox
        width="100%"
        height="70vh"
        padding={80}
        gap={50}
        flexDirection="row"
        justifyContent="space-between"
        boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.1)"
        as="section"
      >
        <FlexBox width="60%" gap={80}>
          <Text as="h1" fontSize={60} color="var(--color-text)">
            {title}
          </Text>
          <Text as="p" color="var(--color-text)" fontSize={40}>
            {description}
          </Text>
          <FlexBox flexDirection="row" gap={30} width="500px">
            <LinkGroup links={links || []} />
          </FlexBox>
          <Socials />
        </FlexBox>
        <FlexBox justifyContent="center" width="40%" flexDirection="row">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width="400px"
            aspect="1 / 1"
            height="auto"
            borderRadius="50%"
          />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  )
}

export default HeroSection
