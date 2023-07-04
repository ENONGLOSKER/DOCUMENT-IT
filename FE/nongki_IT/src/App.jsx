import './App.css'
import Navbar from './components/Navbar'
import Rekomdasi from './components/Rekomdasi'
import Card from './components/Card'
import Sidebar from './components/Sidebar'
import Explore from './components/Explore'



function App() {

  return (
    <div className='bg-[#011630] mb-20 h-full'>
      <Navbar />
      <Rekomdasi />
      <Card />
      <Sidebar />
      <Explore />
    </div>
  )
}

export default App
