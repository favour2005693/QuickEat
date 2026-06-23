import React from 'react'
import HeroSection from '../../components/layout/HeroSection'
// import CategoriesSlider from '../../components/layout/CategoriesSlider'
import PopularDishes from '../../components/layout/PopularDishes'
import PromoBanner from '../../components/layout/PromoBanner'

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <CategoriesSlider /> */}
      <PopularDishes />
      <PromoBanner />
    </div>
  )
}
