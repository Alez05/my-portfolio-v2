import React from 'react'
import { Button, FlexBox, Image, Text } from '../../../../atom'
import herobox from '../../../../../../content/herobox.json'
import './head.css'
import { Socials } from '../../../reusable/socials'

const HomeHeader = () => {
  return (
    <FlexBox margin="5rem auto" padding={40}>
      <FlexBox
        width="100%"
        height="70vh"
        padding={80}
        gap={50}
        flexDirection="row"
        justifyContent="space-between"
        boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.1)"
        as="section"
      >
        <FlexBox gap={80} width="60%">
          <Text as="h1" fontSize={60} color="var(--color-text)">
            {herobox.title}
          </Text>
          <Text color="var(--color-text)" fontSize={20} as="p">
            {herobox.description}
          </Text>
          <FlexBox flexDirection="row" gap={30} width="600px">
            <Button
              type="button"
              width="190px"
              height="60px"
              backgroundColor="var(--color-danger)"
              border="1px solid var(--color-dark-gray)"
              color="var(--color-white)"
              boxShadow="7px 7px 0 rgb(0, 0, 0)"
            >
              {herobox.buttonText}
            </Button>
            <Button
              type="button"
              width="190px"
              height="60px"
              backgroundColor="var(--color-dark-gray)"
              border="1px solid var(--color-background)"
              color="var(--color-white)"
              boxShadow="7px 7px 0 rgb(0, 0, 0)"
            >
              {herobox.readMore}
            </Button>
          </FlexBox>
          <Socials />
        </FlexBox>
        <FlexBox justifyContent="center" width="40%" flexDirection="row">
          <Image
            alt="Example Image"
            src="/images/profile.png"
            width="400px"
            aspect="1 / 1"
            height="auto"
            borderRadius="50%"
          />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  )
}

export default HomeHeader
