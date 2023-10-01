import React from 'react'

import {BrowserRouter ,Routes , Route} from 'react-router-dom'
import Header from './components/Header'
import SignUp from './pages/SignUp'
function App() {
  return (
    <>
    <BrowserRouter>
    
    <Header/>
    <Routes>
      <Route path='/' element={<h1>Home Page</h1>}/>
      <Route path='/profile' element={<h1>Profile Page</h1>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<h1>Login Page</h1>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
