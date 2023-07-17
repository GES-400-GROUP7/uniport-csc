import React from 'react'
import Layout from '../../components/Layout/Layout'
import Explore from '../../components/Explore/Explore'
import Staff from '../../components/Staff/Staff'

function Home() {
  return (
     <Layout>
       <Explore/>
       <Staff/>
     </Layout>   
       
  )
}

export default Home