import { Button, FlexBox, GridBox, Text } from '@/libs/ui';

const Home = () => {
  return (
    <main>
      <h1>Hello world</h1>
      <FlexBox>
        <Text
          textAlign='center'
          as='a'
          href='https://www.crunchyroll.com/watchlist'
          textDecoration='underline'
          color='var(--color-info)'
          letterSpacing='3px'
        >
          alex
        </Text>
        <Text letterSpacing='3px'>oumaima</Text>
        <Text letterSpacing='3px'>elif</Text>
      </FlexBox>
    </main>
  );
};

export default Home;
