import React from 'react'
import {Choose, Destinations, Header, Hero} from "./components"
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
         <Destinations></Destinations>
         <Choose></Choose>
      </Router>
       
        

    </>
  )
}

export default App