import { Button, FlexBox, GridBox, Text } from '../../atom';
import herobox from '../../../data/herobox.json';
import './herobox.css';
import { Socials } from '../socials';

const HeroBox = () => {
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
          gap={80}
          width='60%'
        >
          <Text
            as='h1'
            fontSize={60}
            color='var(--color-text)'
          >
            {herobox.title}
          </Text>
          <Text
            color='var(--color-text)'
            fontSize={20}
            as='p'
          >
            {herobox.description}
          </Text>
          <FlexBox
            flexDirection='row'
            gap={30}
            width='600px'
          >
            <Button
              type='button'
              width='190px'
              height='60px'
              backgroundColor='var(--color-danger)'
              border='1px solid var(--color-warning)'
              color='var(--color-white)'
              boxShadow='7px 7px 0 rgb(0, 0, 0)'
            >
              {herobox.buttonText}
            </Button>
            <Button
              type='button'
              width='190px'
              height='60px'
              backgroundColor='var(--color-dark-gray)'
              border='1px solid var(--color-warning)'
              color='var(--color-white)'
              boxShadow='7px 7px 0 rgb(0, 0, 0)'
            >
              {herobox.readMore}
            </Button>
          </FlexBox>
          <Socials />
        </FlexBox>
        <FlexBox
          justifyContent='center'
          width='40%'
          flexDirection='row'
        >
          <img
            src='/images/profile.png'
            alt='profilepic'
            className='hero-image'
          />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default HeroBox;
