import React from 'react'
import TrafficLight from './TrafficLight/TrafficLight'
import Snowfall from "react-snowfall"
import TodoRedux from './redux/TodoRedux'
import Page2 from './components/Page2'
import Page1 from './components/Page1'
import {Routes,Route,Link} from "react-router-dom"
import PropsParent from './props/PropsParent'

function App() {

  return (
    <div>
      <Snowfall color='red' />
      <Link to="/traffic"><button>Traffic</button></Link>
      <Link to="/fetch"><button>Fetch</button></Link>
      <Link to="/reduxTodo"><button>ReduxTodo</button></Link>
      <Link to="/props"><button>Props</button></Link>
      <Routes>
      <Route path='/' element={<Page1/>}/>
      <Route path='/traffic' element={<TrafficLight/>}/>
      <Route path='/fetch' element={<Page2/>}/>
      <Route path='/reduxTodo' element={<TodoRedux/>}/>
      <Route path='/props' element={<PropsParent/>}/>
      </Routes>
    </div>
  )
}

export default App