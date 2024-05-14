import {BrowserRouter , Routes,Route} from 'react-router-dom'
import Time from './components/Time'
import Counter from './components/Counter'

const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Time />} />
          <Route path='/counter' element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App