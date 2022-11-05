import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListFuncionarioComponent from './components/ListFuncionarioComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateFuncionarioComponent from './components/CreateFuncionarioComponent';
import ViewFuncionarioComponent from './components/ViewFuncionarioComponent';
function App() {
 return (
 <div>
 <Router>
 <HeaderComponent />
 <div className="container">
 <Switch>
 <Route path = "/" exact component = {ListFuncionarioComponent}></Route>
 <Route path = "/funcionarios" component = {ListFuncionarioComponent}></Route>
 <Route path = "/add-funcionario/:id" component = {CreateFuncionarioComponent}></Route>
 <Route path = "/view-funcionario/:id" component = {ViewFuncionarioComponent}></Route>
 </Switch>

 </div>
 <FooterComponent />
 </Router>
 </div>

 );
}
export default App;