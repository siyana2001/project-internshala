import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import { Main } from './Components/Main/Main';
import Delhis from './Components/City/Delhi/Delhi';
import Delget from './Components/City/Delhi/Delget';
import { Cheid } from './Components/City/Chennai/Cheid';
import { Chennai } from './Components/City/Chennai/Chennai';
import { Wfhall } from './Components/City/Wfh/Wfhall';
import { Wfhid } from './Components/City/Wfh/Wfhid';
import { Bangall } from './Components/City/Bangalore/Bangall';
import { Bangid } from './Components/City/Bangalore/Bangid';
import { Hydraid } from './Components/City/Hydrabad/Hydraid';
import { Hydra } from './Components/City/Hydrabad/Hydra';
import { Kolka } from './Components/City/Kolkata/Kolka';
import { Kolkaid } from './Components/City/Kolkata/Kolkaid';
import { Inter } from './Components/City/International/Inter';
import { Interid } from './Components/City/International/Interid';




import { Updated } from './Sadmin/City/Delhi/Updated';
import { Updatec } from './Sadmin/City/Chennai/Updatec';
import { Updatew } from './Sadmin/City/Wfh/Updatew';
import { Updatedh } from './Sadmin//City/Hydrabad/Updatedh';
import { Updateb } from './Sadmin/City/Bangalore/Updateb';
import { Updatei } from './Sadmin/City/International/Updatei';
import { Updatek } from './Sadmin/City/Kolkata/Updatek';
import { Insertc } from './Sadmin/City/Chennai/Insertc';
import { Insertd } from './Sadmin/City/Delhi/Insertd';
import { Inserth } from './Sadmin/City/Hydrabad/Inserth';
import { Insertw } from './Sadmin/City/Wfh/Insertw';
import { Insertk } from './Sadmin/City/Kolkata/Insertk';
import { Insertb } from './Sadmin/City/Bangalore/Insertb';
import { Inserti } from './Sadmin/City/International/Inserti';
import { All } from './Components/Allcity/All';
import { Login } from './Login/Login';
import { Sign } from './Login/Sign';
import { Mains } from './Sadmin/Main/Mains';
import Delhiall from './Sadmin/City/Delhi/Delhiall';
import Delhid from './Sadmin/City/Delhi/Delhid';
import { Chennais } from './Sadmin/City/Chennai/Chennais';
import { Cheids } from './Sadmin/City/Chennai/Cheids';
import { Wfhalls } from './Sadmin/City/Wfh/Wfhalls';
import { Wfhids } from './Sadmin/City/Wfh/Wfhids';
import { Hydras } from './Sadmin/City/Hydrabad/Hydras';
import { Hydraids } from './Sadmin/City/Hydrabad/Hydraids';
import { Kolkas } from './Sadmin/City/Kolkata/Kolkas';
import { Kolkaids } from './Sadmin/City/Kolkata/Kolkaids';
import { Bangalls } from './Sadmin/City/Bangalore/Bangalls';
import { Bangids } from './Sadmin/City/Bangalore/Bangids';
import { Inters } from './Sadmin/City/International/Inters';
import { Interids } from './Sadmin/City/International/Interids';
import { Enroll } from './Components/Course/Enroll';
import { Coursefull } from './Components/Course/Coursefull';
import { Register } from './Components/Register/Register';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
    
        

        <Route path="/" element={<Main/>}></Route>
        <Route path="/student" element={<Main/>}></Route>


        <Route path="/del" element={<Delget/>}></Route>
        <Route path='/getone/:id' element={<Delhis/>}/>

       
        <Route path="/che" element={<Chennai/>}></Route>
        <Route path="/getchennai/:id" element={<Cheid/>}/>

        <Route path="/wfh" element={<Wfhall/>}></Route>
        <Route path="/getwfh/:id" element={<Wfhid/>}/>

        <Route path="/bang" element={<Bangall/>}></Route>
        <Route path="/getbang/:id" element={<Bangid/>}/>

        <Route path="/hydra" element={<Hydra/>}></Route>
        <Route path="/gethydra/:id" element={<Hydraid/>}/>

        <Route path="/kolka" element={<Kolka/>}></Route>
        <Route path="/getkolka/:id" element={<Kolkaid/>}/>

        <Route path="/inter" element={<Inter/>}></Route>
        <Route path="/getinter/:id" element={<Interid/>}/> 

        {/* ------------------------------------------------------------- */}
        
 <Route path="/admin" element={<Mains/>}></Route>

        <Route path="/dels" element={<Delhiall/>}></Route>
        <Route path='/getones/:id' element={<Delhid/>}/>
        <Route path='/updatedel/:id' element={<Updated/>}/>
        <Route path='/insertdel' element={<Insertd/>}/>
        

        <Route path="/ches" element={<Chennais/>}></Route>
        <Route path="/getchennais/:id" element={<Cheids/>}/>
        <Route path='/updateche/:id' element={<Updatec/>}/>
        <Route path='/insertche' element={<Insertc/>}/>

        <Route path="/wfhs" element={<Wfhalls/>}></Route>
        <Route path="/getwfhs/:id" element={<Wfhids/>}/>
        <Route path="/updatewfh/:id" element={<Updatew/>}/>
        <Route path='/insertwfh' element={<Insertw/>}/>

        <Route path="/hydras" element={<Hydras/>}></Route>
        <Route path="/gethydra/:id" element={<Hydraids/>}/>
        <Route path='/updatehydra/:id' element={<Updatedh/>}/>
        <Route path='/inserthydra' element={<Inserth/>}/>

        <Route  path="/kolkas" element={<Kolkas/>}/>
        <Route path="/getkolkas/:id" element={<Kolkaids/>}/>
        <Route path='/updatekolka/:id' element={<Updatek/>}/>
        <Route path='/insertkolka' element={<Insertk/>}/>

        <Route path="/bangs" element={<Bangalls/>}></Route>
        <Route path="/getbangs/:id" element={<Bangids/>}/>
        <Route path='/updatebang/:id' element={<Updateb/>}/>
        <Route path='/insertbang' element={<Insertb/>}/>

        <Route path="/inters" element={<Inters/>}></Route>
        <Route path="/getinter/:id" element={<Interids/>}/>
        <Route path='/updateinter/:id' element={<Updatei/>}/>
        <Route path='/insertinter' element={<Inserti/>}/>



       

        

        <Route  path="/loginstudent" element={<Login />}/> 
        <Route  path="/sign" element={<Sign />}/> 
  
        <Route path="/allcity" element={<All />}/>

        <Route  path="/register" element={<Register/>}/>
       


        <Route  path="/coursefull/:id" element={<Coursefull/>}/>
        <Route  path="/enrolling" element={<Enroll />}/>



        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
