import React from 'react'
import {Header, Hero} from "./components"
import { BrowserRouter as Router , Routes , Route } from 'react-router'
const App = () => {
  return (
    <>
      <Router>
         <Header/>
         <Routes>
          <Route></Route>
         </Routes>
         <Hero></Hero>
      </Router>
       
        

    </>
  )
}

export default App