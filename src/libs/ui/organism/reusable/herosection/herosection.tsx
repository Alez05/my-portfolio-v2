import { Button, FlexBox, Text } from '@/libs/ui/atom';
import { THeroSection } from './herosection.type';

const HeroSection = ({
  buttonAction,
  buttonText,
  description,
  imageUrl,
  title,
  imageAlt,
}: THeroSection) => {
  return (
    <FlexBox
      margin='5rem auto'
      padding={40}
    >
      <FlexBox
        width='100%'
        height='70vh'
        padding={80}
        gap={50}
        flexDirection='row'
        justifyContent='space-between'
        boxShadow='0 0 10px 0 rgba(0, 0, 0, 0.1)'
        as='section'
      >
        <FlexBox
          width='60%'
          gap={80}
        >
          <Text
            as='h1'
            fontSize={60}
            color='var(--color-text)'
          >
            {title}
          </Text>
          <Text
            as='p'
            color='var(--color-text)'
            fontSize={40}
          >
            {description}
          </Text>
          <FlexBox
            flexDirection='row'
            gap={30}
            width='500px'
          >
            <Button
              type='button'
              width='200px'
              height='60px'
              backgroundColor='var(--color-danger)'
              border='1px solid var(--color-warning)'
              color='var(--color-white)'
              boxShadow='7px 7px 0 rgb(0, 0, 0)'
            >
              {buttonText}
            </Button>
          </FlexBox>
        </FlexBox>
        <FlexBox
          justifyContent='center'
          width='40%'
          flexDirection='row'
        >
          <img
            src={imageUrl}
            alt={imageAlt}
            className='hero-image'
          />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default HeroSection;
