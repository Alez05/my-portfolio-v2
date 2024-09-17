import { TNetwork } from './network.type';
import './network.css';
import network from '../../../data/network.json';
import { Icon } from '../../atom';

const SocialNetwork = () => {
  return (
    <ul className='social-list'>
      <li className='social-item'>
        <a
          target='_blank'
          rel='noopener noreferrer'
        >
          <Icon
            icon='github'
            width='50px'
            height='50px'
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
          />
        </a>
      </li>
      <li className='social-item'>
        <a
          target='_blank'
          rel='noopener noreferrer'
        >
          <Icon
            icon='whatsapp'
            width='50px'
            height='50px'
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
          />
        </a>
      </li>
    </ul>
  );
};

export default SocialNetwork;
