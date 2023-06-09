import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Employee from './Employee';
import Manager from './Manager';
import Customize from './Customize';
import CreateOrder from './CreateOrder';
import Home from './Home';
import Test from './test';
import UpdatePrice from './UpdatePrice';
import Restock from './Restock';
import Reports from './Reports';
import Customer from './Customer';
import Checkout from './Checkout';
import MenuBoard from './MenuBoard';
import './styles/Background.css';

function App() {

  return (
    <>

      <Routes>
          <Route exact path = "/" element={<Home/>} />
          <Route path='/Employee' element={<Employee/>} />
          <Route path='/login' element={<login/>} />
          <Route path='/Manager' element={<Manager/>} />
          <Route path='/Manager/UpdatePrice' element={<UpdatePrice/>} />
          <Route path='/Manager/Restock' element={<Restock/>} />
          <Route path='/Manager/Reports' element={<Reports/>} />
          <Route path='/Customer' element={<Customer/>} />
          <Route path='/CreateOrder' element={<CreateOrder/>} />
          <Route path='/Checkout' element={<Checkout/>} />
          <Route path='/Customize/:smoothieName' element={<Customize/>} />
          <Route path='/Test' element={<Test/>} />
          <Route path='/MenuBoard/GetFit' element={<MenuBoard/>} />
          <Route path='/MenuBoard/BeWell' element={<MenuBoard/>} />
          <Route path='/MenuBoard/KidsMenu' element={<MenuBoard/>} />
          <Route path='/MenuBoard/EnjoyTreat' element={<MenuBoard/>} />
          <Route path='/MenuBoard/FeelEnergized' element={<MenuBoard/>} />
          <Route path='/MenuBoard/ManageWeight' element={<MenuBoard/>} />
      </Routes>
    
    </>
  );
}

export default App;
