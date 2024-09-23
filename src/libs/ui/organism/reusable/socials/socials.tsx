import './socials.css';
import { FlexBox, Icon } from '../../../atom';
import { IconLink } from '@/libs/ui/molecule';

const Socials = () => {
  return (
    <FlexBox flexDirection='row'>
      <IconLink
        altText='github'
        icon='github'
        label='Github'
        url='https://github.com/Alez05'
      />
      <IconLink
        altText='email'
        icon='envelope'
        label='email'
        url='mailto:cercel.alexandru436@gmail.com'
      />
      <IconLink
        altText='message'
        icon='messagec'
        label='message'
        url='https://github.com/Alez05'
      />
      <IconLink
        altText='linkedin'
        icon='linkedin'
        label='linkedin'
        url='https://github.com/Alez05'
      />
    </FlexBox>
  );
};

export default Socials;
