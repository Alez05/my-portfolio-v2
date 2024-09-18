import { Button, FlexBox, GridBox, Text } from '../../atom';
import herobox from '../../../data/herobox.json';
import './herobox.css';
import { SocialNetwork } from '../network';

const HeroBox = () => {
  return (
    <FlexBox
      margin='5rem auto'
      padding={40}
    >
      <FlexBox
        width='100%'
        height='100vh'
        padding={80}
        gap={30}
        alignContent='space-around'
        boxShadow='0 0 10px 0 rgba(0, 0, 0, 0.1)'
        as='section'
      >
        <FlexBox
          as='section'
          gap={70}
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
          <FlexBox
            flexDirection='row'
            gap={30}
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
          <FlexBox >
            <SocialNetwork />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default HeroBox;
