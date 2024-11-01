import { FlexBox, Icon, Text } from '../../atom'
import { TInfoSection } from './infosection.type'

const InfoSection = ({
  backgroundColor,
  borderRadius,
  color,
  description,
  icon,
  title,
}: TInfoSection) => {
  return (
    <FlexBox padding={80} as="article">
      <FlexBox
        flexDirection="column"
        width="480px"
        height="290px"
        boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.1)"
        padding={20}
        borderRadius="20px"
        alignItems="center"
        alignContent="center"
      >
        <FlexBox position="relative" bottom="48px">
          <Icon
            icon={icon}
            borderRadius="50%"
            backgroundColor={backgroundColor}
            fontSize={30}
            width="60px"
            height="60px"
            boxShadow="5px 5px var(--color-dark-gray)"
          />
        </FlexBox>
        <FlexBox
          gap={40}
          alignItems="center"
          padding={30}
          position="relative"
          bottom="50px"
        >
          <Text as="h1">{title}</Text>
          <FlexBox alignItems="center">
            <Text as="p">{description}</Text>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  )
}

export default InfoSection
