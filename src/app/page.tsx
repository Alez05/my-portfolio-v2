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
        flexDirection='row-reverse'
        borderRadius={20}
      >
        <h1>fffff1</h1>
        <h1>ffffff2</h1>
        <h1>fffffff33</h1>
      </FlexBox>
      <FlexBox
        padding={[20, 40, 60, 80]}
        gap={10}
        fontSize={30}
        flexDirection='row-reverse'
        borderRadius={20}
        borderRadiusUnit='%'
      >
        <h1>fffff1</h1>
        <h1>ffffff2</h1>
        <h1>fffffff33</h1>
      </FlexBox>
    </main>
  );
}
