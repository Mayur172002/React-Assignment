import React from 'react'
import Header from './Header'
import Link_navbar from './Link_navbar'
import Section from './Section'
import Sliders from './Sliders'
import Carts from './Cards'

function Template() {
  return (
    <div>
     <Header/>
     <Link_navbar/>
     <Section/>
     <Sliders/>
     <Carts/>
    </div>
  )
}

export default Template