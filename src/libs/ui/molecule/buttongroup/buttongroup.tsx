import { Button, FlexBox } from '../../atom';
import { TButtonGroup } from './buttongroup.type';

const ButtonGroup = ({ buttons }: TButtonGroup) => {
  const buttonArray = Array.isArray(buttons) ? buttons : [buttons];
  return (
    <FlexBox
      flexDirection='row'
      display='flex'
      width='auto'
      gap={20}
      padding={20}
    >
      {buttonArray.map((button, index) => {
        return (
          <Button
            key={index}
            variant='primary'
            backgroundColor='var(--color-danger)'
            width='200px'
            height='60px'
            boxShadow='7px 7px 0 rgb(0, 0, 0)'
          >
            {button.label}
          </Button>
        );
      })}
    </FlexBox>
  );
};

export default ButtonGroup;
