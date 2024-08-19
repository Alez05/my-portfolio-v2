import { Button, FlexBox, GridBox } from '@/libs/ui';

const Home = () => {
  return (
    <main>
      <h1>Hello world</h1>
      <FlexBox>
        <Button
          type='button'
          color='var(--color-danger)'
          backgroundColor='var(--color-sunburst)'
        >
          Click me
        </Button>
      </FlexBox>
    </main>
  );
};

export default Home;
