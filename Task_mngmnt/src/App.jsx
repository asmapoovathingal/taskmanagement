import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Authentication from './pages/Authentication'
import DashBoard from './pages/DashBoard'
import Tasks from './components/Tasks'
function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route  path='/register' element={<Authentication insideRegister={true}/>}/>
      <Route path='/login' element={<Authentication/>}/>
      <Route path='/dashboard' element={<DashBoard/>} />
      <Route path='/tasks' element={<Tasks/>} />
     </Routes>
     
    </>
  )
}

export default App
