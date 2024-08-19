import { Button, FlexBox, GridBox } from '@/libs/ui';

const Home = () => {
  return (
    <main>
      <h1>Hello world</h1>
      <FlexBox gap={10}>
        <Button
          type='button'
          color='var(--color-danger)'
          backgroundColor='var(--color-sunburst)'
          width='100px'
          height='50px'
          border='2px solid var(--color-primary)'
          borderRadius='10px'
          cursor='n-resize'
        >
          Click me
        </Button>
        <Button
          type='button'
          color='var(--color-danger)'
          backgroundColor='var(--color-info)'
          width='200px'
          height='100px'
          border='2px dotted var(--color-rose)'
          borderRadius='20px'
        >
          Click me
        </Button>
        <Button
          type='button'
          color='var(--color-secondary)'
          backgroundColor='var(--color-primary)'
          width='300px'
          height='150px'
          border='2px dashed var(--color-positive)'
          borderRadius='2rem'
        >
          Click me
        </Button>
      </FlexBox>
    </main>
  );
};

export default Home;
