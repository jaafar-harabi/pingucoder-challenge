import {Nav,Foot} from './Components';
import {FormId,Home,View,Input} from './Pages';
import {Routes,Route} from 'react-router-dom';
function App() {


  return (
    <>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/input' element={<Input />} />
          <Route path='/view' element={<View   />}  />
          <Route path='/view/:id' element={<FormId />}  />
        </Routes>
      <Foot/>
    </>

    
  );
}

export default App;
