import './App.css'
import HeaderBar from './components/header-bar/HeaderBar'
import HomePage from './pages/home-page/HomePage'

export default function App() {

  return (
    <div className='appContainer'>
      <HeaderBar></HeaderBar>
      <HomePage></HomePage>
    </div>
  )
}