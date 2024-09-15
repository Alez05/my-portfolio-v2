import { Button, FlexBox, Text } from '../../atom';
import herobox from '../../../data/herobox.json';
import './herobox.css';

const HeroBox = () => {
  return (
    <div className='hero-image'>
      <FlexBox
        width='100%'
        padding={40}
        gap={30}
        alignContent='center'
        justifyContent='center'
        boxShadow='0 0 10px 0 rgba(0, 0, 0, 0.1)'
      >
        <Text
          as='h1'
          fontSize={40}
          color='var(--color-sunburst)'
        >
          {herobox.title}
        </Text>
        <Text
          color='var(--color-sunburst)'
          fontSize={20}
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
      </FlexBox>
    </div>
  );
};

export default HeroBox;
