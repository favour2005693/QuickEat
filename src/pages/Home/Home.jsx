import React from 'react'
import HeroSection from '../../components/HeroSection'
import CategoriesSlider from '../../components/CategoriesSlider'
import PopularDishes from '../../components/PopularDishes'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategoriesSlider />
      <PopularDishes />
    </div>
  )
}
