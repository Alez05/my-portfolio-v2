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
        padding={[20, 40, 60, 80]}
        gap={10}
        fontSize={30}
        flexDirection='row'
        border='2px solid red'
        borderRadius='40px'
        height='40%'
        width='40%'
        color='var(--color-danger)'
        bgc='#03a9f4'
      >
        <h1>oumaima</h1>
        <h1>elif</h1>
        <h1>alex</h1>
      </FlexBox>
      <FlexBox
        padding={[20, 40, 60, 80]}
        gap={10}
        fontSize={30}
        flexDirection='row'
        border='2px solid red'
        borderRadius='30%'
        borderRadiusUnit='%'
        height='40px'
        width='40px'
        color='var(--color-lavender)'
        bgc='var(--color-positive)'
      >
        <h1>oumaima</h1>
        <h1>elif</h1>
        <h1>alex</h1>
      </FlexBox>
    </main>
  );
}
