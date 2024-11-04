import { FlexBox, Text } from '../../atom'
import { TTextConfig } from './textgroup.type'

const TextGroup = ({ content, children }: TTextConfig) => {
  const textArray = Array.isArray(content) ? content : [content]
  return (
    <FlexBox
      as="div"
      display="flex"
      flexDirection="column"
      gap={20}
      padding={20}
      height="auto"
      width="auto"
      boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.1)"
    >
      {textArray.map((textItem, index) => (
        <FlexBox key={textItem.id || index} as="div" margin={10}>
          <Text
            fontSize={textItem.fontSize}
            fontWeight={textItem.fontWeight}
            color={textItem.color}
            textDecoration={textItem.textDecoration}
            textAlign={textItem.textAlign}
            lineHeight={textItem.lineHeight}
            as={textItem.as || 'p'}
          >
            {textItem.content}
            {children}
          </Text>
        </FlexBox>
      ))}
    </FlexBox>
  )
}

export default TextGroup
