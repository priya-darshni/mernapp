import React from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <div>
        <Header></Header>
        <Carousel></Carousel>
        <div className='m-3'>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          </div>
        <div><Footer></Footer></div>
      </div>
    </div>
  )
}
