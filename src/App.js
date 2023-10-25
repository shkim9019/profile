import './App.css';
import { Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  //todo. 커스텀 훅 사용
  // -> getter, setter 구현
  // 비즈니스 로직, ui 분리
  
  const [state, setState] = useState({
    name:"",
    age:0,
    bio:"",
    picture:""
  });

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home setState={setState}/>}/>
        <Route path='/profile' element={ <Profile {...state}/>}/>
      </Routes>
    </div>
  );
}

export default App;
