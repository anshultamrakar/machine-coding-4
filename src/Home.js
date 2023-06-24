import React from 'react'
import SideBar from './SideBar'
import Question from './Question'
import Sort from './Sort'


const Home = () => {
  return (
    <div className='Home'>
        <SideBar/>
        <Question/>
        <Sort/>
    </div>
  )
}

export default Home