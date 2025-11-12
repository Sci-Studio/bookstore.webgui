import './App.css'
import HeaderBar from './components/header-bar/HeaderBar'
import { Outlet } from 'react-router-dom'

export default function App() {

  return (
    <div className='appContainer'>
      <HeaderBar></HeaderBar>
      <Outlet />
    </div>
  )
}