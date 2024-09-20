import './socials.css';
import { FlexBox, Icon } from '../../../atom';

const Socials = () => {
  return (
    <FlexBox
      flexDirection='row'
      gap={20}
      width='300px'
    >
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/Alez05'
      >
        <Icon
          icon='github'
          width='50px'
          height='50px'
          fontSize={30}
        />
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.linkedin.com/in/alexandru-cercel-6b977b220/'
      >
        <Icon
          icon='linkedin'
          width='50px'
          height='50px'
          fontSize={30}
        />
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='mailto:cercel.alexandru436@gmail.com'
      >
        <Icon
          icon='envelope'
          width='50px'
          height='50px'
          fontSize={30}
        />
      </a>
    </FlexBox>
  );
};

export default Socials;
