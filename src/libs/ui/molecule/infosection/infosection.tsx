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
    <FlexBox padding={80}>
      <FlexBox
        width="480px"
        height="30vh"
        boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.1)"
        padding={80}
        gap={20}
        borderRadius="20px"
        border="1px solid var(--color-dark-gray)"
        flexWrap="wrap"
        alignContent="center"
      >
        <FlexBox justifyContent="center">
          <Icon icon={icon} />
        </FlexBox>
        <Text as="h1">{title}</Text>
        <Text as="p">{description}</Text>
      </FlexBox>
    </FlexBox>
  )
}

export default InfoSection
