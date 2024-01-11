import React, { useContext, useEffect } from 'react'
import Header from './Components/Header'
import Content from './Components/Content'
import Pagination from './Components/Pagination'
import { AppContext } from './context/AppContext'

const App = () => {

  const {fetchPosts} = useContext(AppContext);

  useEffect(()=>{
    fetchPosts();
  } , [])

  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      
        <Header />
        <Content />
        <Pagination />
    
    </div>
  )
}

export default App