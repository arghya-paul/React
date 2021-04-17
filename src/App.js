import logo from './logo.svg';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import './App.css';
import Form from './Components/Registrationform';
import Basicform from './Components/Formvalidation';
import PropsEx from './Components/MyProps';
import FirstProps from './Components/Props1';
import LifeycleEx from './Components/LifieCycle';

import PalindromeNo from './Components/PalindromeNumber.js';
import SignUp from './Components/Signup';
import Edit from './Components/Edit';
import View from './Components/View';
import Welcome from './Components/Welcome';
import SignupNew from './Components/SignupNew';
import InputValuepickup from './Components/ValuePickup';
import OtherValuepick from './Components/OtherValuepick';
import LiveApicheck from './Components/LiveApicheck';
import LiveRegister from './Components/LiveRegister';
import OtherSignup from './Components/OtherSignup';
import Login from './Components/Login';
// import Hooks from './Components/Hooks';
// import AnotherEdit from './Components/AnotherEdit';
import PressButton from './Components/PressButton';
// import Rectangle from './Components/Rectangle';
// import RestApicheck from './Components/RestApiCheck';
import AnotherListing from './Components/AnotherListing';
// import ListingGet from './Components/ListingGet';
import Viewform from './Components/View'
// import ButtonClickedContent from './Components/ButtonClickedContent';
// import UniqueVlidation from './Components/UniqueValidation';
import ApiCall from './Components/ApiCall';
// import UniqueView from './Components/UniqueView';
import RestApiList from './Components/RestApiList';




import { BrowserRouter, BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <PalindromeNo/> */}
      {/* <LifeycleEx/> */}
      {/* <FirstProps/> */}
      {/* <Basicform/> */}
      {/* <PropsEx name="Hii Westbengal"/> */}
      {/* <Form/> */}
      {/* <InputValuepickup/> */}
      {/* <OtherValuepick/> */}
      {/* <LiveApicheck/> */}
      {/* <LiveRegister/> */}
      {/* <OtherSignup/> */}
      {/* <Hooks/> */}
      {/* <PressButton/> */}
      {/* <Rectangle/> */}
      {/* <RestApicheck/> */}
      {/* <AnotherListing/> */}
      {/* <ListingGet/> */}
      {/* <ButtonClickedContent/> */}
      {/* <UniqueVlidation/> */}
      {/* <ApiCall/> */}
      {/* <UniqueView/> */}
      <RestApiList/>


{/* 
   <BrowserRouter>
    <Switch>
      <Router>
        <Route path='/' exact render={()=>{return <Redirect to='/'/>}}></Route>
        <Route path='/' component={Welcome}></Route>
        <Route path='/signup' component={OtherSignup}></Route>
        <Route path='/edit' component={Edit}></Route>
        <Route path='/view' component={Viewform}></Route>
        <Route path='/login' component={RestApicheck}></Route>
      </Router>
    </Switch>
    </BrowserRouter> */}
  
    </div>
  );
}

export default App;
