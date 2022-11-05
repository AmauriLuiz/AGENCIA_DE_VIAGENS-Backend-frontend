// Criar a pagina para adicionar e alterar um funcionario
import React, { Component } from 'react'
import FuncionarioService from '../services/FuncionarioService';
class CreateFuncionarioComponent extends Component {
 constructor(props) {
 super(props)
 this.state = {
 id: this.props.match.params.id,
 primeiroNome: '',
 ultimoNome: '',
 emailId: ''
 }
 this.changePrimeiroNomeHandler = this.changePrimeiroNomeHandler.bind(this);
 this.changeUltimoNomeHandler = this.changeUltimoNomeHandler.bind(this);
 this.saveOrUpdateFuncionario = this.saveOrUpdateFuncionario.bind(this);
 this.changeEmailHandler = this.changeEmailHandler.bind(this);
 }
 componentDidMount(){
 if(this.state.id === '_add'){
 return
 }else{
 FuncionarioService.getFuncionarioById(this.state.id).then( (res) =>{
 let funcionario = res.data;
 this.setState({primeiroNome: funcionario.primeiroNome,
 ultimoNome: funcionario.ultimoNome,
emailId : funcionario.emailId
 });
 });
 }
 }
 saveOrUpdateFuncionario = (e) => {
 e.preventDefault();
let funcionario = {primeiroNome: this.state.primeiroNome, ultimoNome: this.state.ultimoNome, emailId:
this.state.emailId};
 console.log('funcionario => ' + JSON.stringify(funcionario));
 if(this.state.id === '_add'){
 FuncionarioService.createFuncionario(funcionario).then(res =>{
 this.props.history.push('/funcionarios');
 });
 }else{
 FuncionarioService.updateFuncionario(funcionario, this.state.id).then( res => {
 this.props.history.push('/funcionarios');
 });
 }
 }

 changePrimeiroNomeHandler= (event) => {
 this.setState({primeiroNome: event.target.value});
 }
 changeUltimoNomeHandler= (event) => {
 this.setState({ultimoNome: event.target.value});
 }
 changeEmailHandler= (event) => {
 this.setState({emailId: event.target.value});
 }
 cancel(){
 this.props.history.push('/funcionarios');
 }
 getTitle(){
 if(this.state.id === '_add'){
 return <h3 className="text-center">Inserir Funcionario</h3>
 }else{
 return <h3 className="text-center">Alterar Dados Funcionario</h3>
 }
 }
 render() {
 return (
 <div>
 <br></br>
 <div className = "container">
 <div className = "row">
 <div className = "card col-md-6 offset-md-3 offset-md-3">
 {
 this.getTitle()
 }
<div className = "card-body">
 <form>
 <div className = "form-group">
 <label> Primeiro Nome: </label>
<input placeholder="Primeiro Nome" name="primeiroNome" className="formcontrol"
 value={this.state.primeiroNome}
onChange={this.changePrimeiroNomeHandler}/>
 </div>
 <div className = "form-group">
 <label> Ultimo Nome: </label>
<input placeholder="Ultimo Nome" name="ultimoNome" className="form-control"
 value={this.state.ultimoNome} onChange={this.changeUltimoNomeHandler}/>
 </div>
<div className = "form-group">
 <label> Email: </label>
 <input placeholder="Email" name="emailId" className="form-control"
 value={this.state.emailId} onChange={this.changeEmailHandler}/>
 </div>
<button className="btn btn-success"
onClick={this.saveOrUpdateFuncionario}>Salvar</button>
 <button className="btn btn-danger" onClick={this.cancel.bind(this)}
style={{marginLeft: "10px"}}>Cancelar</button>
 </form>
 </div>
 </div>
 </div>
 </div>
 </div>
 )
 }
}
export default CreateFuncionarioComponent