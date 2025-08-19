import React from 'react'
import {Choose, Destinations, Footer, Header, Hero, Vacation} from "./components"
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
         <Vacation></Vacation>
         <Footer></Footer>
      </Router>
       
        

    </>
  )
}

export default App