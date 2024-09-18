import './network.css';
import { FlexBox, Icon } from '../../atom';

const SocialNetwork = () => {
  return (
    <FlexBox as='div'>
      <li className='social-item'>
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
      </li>
      <li className='social-item'>
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
      </li>
      <li className='social-item'>
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
      </li>
      <li className='social-item'>
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
      </li>
    </FlexBox>
  );
};

export default SocialNetwork;
