import { Button, FlexBox, GridBox, Icon, Input, Text } from '@/libs/ui';

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
        <Text
          letterSpacing='3px'
          textAlign='center'
        >
          oumaima
        </Text>
        <Text
          letterSpacing='3px'
          textAlign='center'
        >
          elif
        </Text>
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

        <Input
          type='password'
          placeholder='Enter your name'
          border='1px solid var(--color-primary)'
          borderRadius='10px'
          padding={10}
          width='300px'
          height='50px'
          fontSize={20}
          color='var(--color-primary)'
        />
        <Icon
          backgroundColor='var(--color-rose)'
          icon='download'
          width='50px'
          height='50px'
          fontSize={30}
        />
        <Icon
          backgroundColor='var(--color-background)'
          icon='whatsapp'
          width='60px'
          height='60px'
          fontSize={40}
          color='var(--color-secondary)'
        />
      </FlexBox>
    </main>
  );
};

export default Home;
