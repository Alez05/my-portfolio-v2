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
      <FlexBox gap={10}>
        <Button
          type='submit'
          backgroundColor='var(--color-primary)'
          border='2px solid var(--color-rose)'
          borderRadius='10px'
        >
          Submit
        </Button>
        <Button
          type='button'
          backgroundColor='var(--color-secondary)'
          border='2px solid var(--color-rose)'
          borderRadius='10px'
        >
          Button
        </Button>
        <Button
          type='reset'
          backgroundColor='var(--color-rose)'
        >
          Reset
        </Button>
      </FlexBox>
    </main>
  );
};

export default Home;
