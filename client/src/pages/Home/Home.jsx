import React from 'react'
import "./Home.scss"
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import Categories from '../Categories/Categories'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      {/* same component usuing two times for different use case */}
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  )
}

export default Home