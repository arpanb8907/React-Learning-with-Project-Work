import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import RouteLayout from './RouteLayout.jsx' 
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'
import { githubinfoloader } from './Components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path :'/',
//     element : <RouteLayout/>,

//     children : [
//       {
//         path : '',
//         element : <Home/>
//       },

//       {
//         path :'About',
//         element : <About/>
//       },

//       {
//         path : 'contact',
//         element : <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<RouteLayout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:id' element={<User/>}/>
      <Route 
      loader = {githubinfoloader}
      path='github' element={<Github/>}/>
    </Route>
  )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

