import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Site from './pages/Site'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@mui/material'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: {
      main: '#388e3c'
    }
  }
})


function App() {


  return (
    <>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/site' exact element={<Site/>}></Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App
