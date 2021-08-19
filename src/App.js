import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Sell from './pages/Sell'
import Feature2 from './components/Features/Feature2'
import Feature3 from './components/Features/Feature3'

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Home}></Route>
      <Route path='/cart' component={Cart}></Route>
      <Route path='/sell' component={Sell}></Route>
      <Route path='/feature2' component={Feature2}></Route>
      <Route path='/feature3' component={Feature3}></Route>
    </BrowserRouter>
  )
}

export default App
