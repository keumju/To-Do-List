import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import Header from './components/header/header'
import Main from './components/main/main'

function App() {

  return (
    <div className="App">
      <nav><Link to='/'></Link></nav>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
