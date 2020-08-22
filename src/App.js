import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js'

import Test from './components/Welcome'
import Test1 from './components/Test'
import TestHello from './components/TestHello'
import JsxExample from './components/JsxExample'
import PropExampleUse from './components/PropsExample'
import ProbesClassExample from './components/ProbsClassExample'
import StateExample from './components/StateExample'

import CssExample from './components/CssTest'

import Counter from './components/Counter'

import FunctionClick from './components/FunctionClick'

import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'

import ConditionalRendering from './components/ConditionalRendering'

import ListRendering from './components/ListRendering'

import StyleSheet from './components/stylesheets/StyleSheet'

import Login from './components/login/Login'
import Menu from './components/menu/Menu'
import { Switch, Route, Router } from 'react-router';

import Home from './components/menu/Home'
import Contact from './components/menu/Contact'
import Registeruser from './components/login/SignUp'
function App() {
  return (
    <div className="App">
       
      <Switch>
         <Route path="/signup" component={Registeruser} />
         <Route  path='/' component={Home} exact />
         <Route path="/contact" component={Contact} />
        
         <Route path="/loginpage" component={Home} />
        
      </Switch>
      {/* <Menu/> */}
     
       {/* <Greet/>
       <Test/>
       <Test1/>
       <TestHello/>
       <JsxExample/>
       <PropExampleUse name='ram' address='banepa'/>
       <PropExampleUse name='ram' />
       <PropExampleUse name='ram' address='banepa'>
         <p>This is extra text</p>
         </PropExampleUse>
         <PropExampleUse name='ram' address='banepa'>
         <p><button>Action</button></p>
         </PropExampleUse>  

         <ProbesClassExample name='testName' address='ktm'>

         </ProbesClassExample>


         <StateExample></StateExample>

         <Counter/>

         <StateExample/>

         <CssExample/>

         <FunctionClick/>
         <EventBind/>

         <ParentComponent/>

         <ConditionalRendering/>

         <ListRendering/>

         <StyleSheet greenColor={true}/> */}

         <Login/>


    </div>
  );
}

export default App;
