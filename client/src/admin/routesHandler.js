import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import MySidebar from './components/sidebar/sidebar'
import Home from './pages/adminHome/adminHome'
import List from './pages/list/list'
import New from './pages/new/new'
import Single from './pages/single/single'

const RoutesHandler = () => {
  return (
    <div>
      <Navbar />
      <MySidebar />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New />} />
            </Route>
            <Route path='products'>
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New />} />
            </Route>
            </Route>
        </Routes>
    </div>
  )
}

export default RoutesHandler