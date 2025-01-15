'use client'
import React, { useState, useEffect } from 'react'
import './client-carousel.css'
import '../carousel.css'

import { FlexBox, Link } from '@/libs/ui/atom'

export default function ClientCarousel() {
  // Instead of a global variable, store slideIndex in React state
  const [slideIndex, setSlideIndex] = useState(1)

  function plusSlides(n: number) {
    setSlideIndex((prev) => prev + n)
  }

  function showSlides(n: number) {
    // Get all elements with the class "mySlides"
    const slides = document.getElementsByClassName(
      'mySlides'
    ) as HTMLCollectionOf<HTMLElement>

    if (slides.length === 0) return

    let currentIndex = n

    if (currentIndex > slides.length) {
      currentIndex = 1
    }
    if (currentIndex < 1) {
      currentIndex = slides.length
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
    }

    // Show the "currentIndex"th slide
    slides[currentIndex - 1].style.display = 'block'

    // Update state to reflect the current index
    setSlideIndex(currentIndex)
  }

  // Run showSlides every time slideIndex changes,
  // and once on mount (because of the empty dependency array below).
  useEffect(() => {
    if (typeof window !== 'undefined') {
      showSlides(slideIndex)
    }
  }, [slideIndex])

  return (
    <FlexBox>
      <Link
        className="prev"
        href="#"
        onClick={(e) => {
          e.preventDefault()
          plusSlides(-1)
        }}
      >
        ←
      </Link>

      <Link
        className="next"
        href="#"
        onClick={(e) => {
          e.preventDefault()
          plusSlides(1)
        }}
      >
        →
      </Link>
    </FlexBox>
  )
}
