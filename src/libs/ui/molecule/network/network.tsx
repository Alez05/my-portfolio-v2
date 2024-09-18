import './network.css';
import { FlexBox, Icon } from '../../atom';

const SocialNetwork = () => {
  return (
    <FlexBox
      flexDirection='row'
      gap={20}
      padding={20}
      width='300px'
    >
      <a
        target='_blank'
        rel='noopener noreferrer'
      >
        <Icon
          icon='github'
          width='50px'
          height='50px'
          fontSize={25}
        />
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
      >
        <Icon
          icon='linkedin'
          width='50px'
          height='50px'
          fontSize={25}
        />
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
      >
        <Icon
          icon='arond'
          width='50px'
          height='50px'
          fontSize={25}
        />
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
      >
        <Icon
          icon='envelope'
          width='50px'
          height='50px'
          fontSize={25}
        />
      </a>
    </FlexBox>
  );
};

export default SocialNetwork;
