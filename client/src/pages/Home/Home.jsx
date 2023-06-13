import React from 'react'
import "./Home.scss"
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      {/* same component usuing two times for different use case */}
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="trending" />
    </div>
  )
}

export default Home