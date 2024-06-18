import React from 'react'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'
import NewsItem from './Components/NewsItem'
import { useState } from 'react'


const App = () => {
  const [category, setCategory] = useState('general');
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App