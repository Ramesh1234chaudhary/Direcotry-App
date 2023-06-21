import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import Addnewperson from './Components/Addnewperson';
import RetriveInfo from './Components/RetriveInfo ';
 

function App() {
  return (
    <>
      <div className="container-fluid">

        <div className="row">
          <div className="col headpart">
            <h3>Directory App</h3>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <Navbar />
          </div>
        </div>

          </div>

            <Routes>
              <Route path='/' element={ <Addnewperson /> }></Route>
              <Route path='addnewperson' element={<Addnewperson/>}></Route>
              <Route path='retriveInfo' element={<RetriveInfo/>}></Route>
              
            </Routes>
       
    </>
  );
}

export default App;
