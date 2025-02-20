import React from 'react'

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import CommitteePage from '../components/CommitteePage/CommitteePage'

const page = () => {
  return (
    <div>
      <Navbar/>
      <CommitteePage/>
      <Footer/>
    </div>
  )
}
export default page