import { FlexBox, Icon } from '../../atom';
import { TIconLink } from './iconlink.type';

const IconLink = ({ altText, icon, label, url }: TIconLink) => {
  return (
    <FlexBox
      width='auto'
      padding={10}
    >
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={label}
      >
        <Icon
          width='50px'
          height='50px'
          fontSize={30}
          icon={icon}
          altText={altText}
        />
      </a>
    </FlexBox>
  );
};

export default IconLink;
