import { Button, FlexBox } from '@/libs/ui';

export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      <Button
        padding={3}
        fontSize={40}
      />
      <Button
        padding={[4, 8, 12, 16]}
        fontSize={20}
      />
      <Button
        disabled
        padding={8}
        fontSize={50}
      />
      <Button />

      <FlexBox
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        alignContent='center'
        position='absolute'
      >
        <h1>alex</h1>
        <h1>oumaima</h1>
        <h1>oumaimabouchiba</h1>
      </FlexBox>
    </main>
  );
}
