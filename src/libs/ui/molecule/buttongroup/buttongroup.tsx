import { Button, FlexBox } from '../../atom'
import { TButtonGroup } from './buttongroup.type'

const ButtonGroup = ({ buttons, children }: TButtonGroup) => {
  const buttonArray = Array.isArray(buttons) ? buttons : [buttons]
  return (
    <FlexBox
      flexDirection="row"
      display="flex"
      width="auto"
      gap={20}
      padding={20}
    >
      {buttonArray.map((button, index) => {
        return (
          <Button
            key={index}
            variant="primary"
            backgroundColor={button.backgroundColor || 'var(--color-danger)'}
            width="200px"
            height="60px"
            boxShadow="7px 7px 0 rgb(0, 0, 0)"
            border={button.border || '1px solid var(--color-dark-grey)'}
            color={button.color || 'var(--color-white)'}
          >
            {button.label}
            {children}
          </Button>
        )
      })}
    </FlexBox>
  )
}

export default ButtonGroup
