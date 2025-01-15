import { FlexBox, Image, Text } from '@/libs/ui/atom'
import ClientCarousel from './[client-carousel]/client-carousel'
import './carousel.css'

const Carousel = () => {
  return (
    <FlexBox as="div" margin="auto" position="relative" width="500px">
      <FlexBox className="mySlides fade">
        <Image className="imageC" src="/images/silly.png" alt="alex boss" />
        <Text className="text1">Image 1</Text>
      </FlexBox>
      <FlexBox className="mySlides fade">
        <Image className="imageC" src="/images/main.png" alt="alex boss" />
        <Text className="text1">Image 2</Text>
      </FlexBox>
      <FlexBox className="mySlides fade">
        <Image
          className="imageC"
          src="/images/profile.png"
          alt="alex boss"
          width="500px"
        />
        <Text className="text1">Image 3</Text>
      </FlexBox>
      <ClientCarousel />
    </FlexBox>
  )
}

export default Carousel
