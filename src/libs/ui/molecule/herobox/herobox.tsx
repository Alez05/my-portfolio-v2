import { Button, FlexBox, Text } from '../../atom';
import herobox from '../../../data/herobox.json';
import './herobox.css';

const HeroBox = () => {
  return (
    <FlexBox
      width='auto'
      height='600px'
      padding={40}
      gap={20}
      justifyContent='center'
      backgroundColor='var(--color-black)'
      border='1px solid var(--color-success)'
    >
      <Text
        as='h1'
        fontSize={40}
        color='var(--color-white)'
      >
        {herobox.title}
      </Text>
      <Text
        color='var(--color-white)'
        fontSize={15}
        as='p'
      >
        {herobox.description}
      </Text>
      <Button
        type='button'
        width='150px'
        height='50px'
        backgroundColor='var(--color-dark-gray)'
        border='1px solid var(--color-warning)'
        color='var(--color-white)'
        borderRadius='10px'
      >
        {herobox.buttonText}
      </Button>
      <img
        src={herobox.image}
        alt=''
        className='hero-image'
      />
    </FlexBox>
  );
};

export default HeroBox;
