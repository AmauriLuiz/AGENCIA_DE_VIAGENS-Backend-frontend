// Componente para listar os funcionarios
import React, { Component } from 'react'
import FuncionarioService from '../services/FuncionarioService'
class ListFuncionarioComponent extends Component {
 constructor(props) {
 super(props)
 this.state = {
 funcionarios: []
 }
 this.addFuncionario = this.addFuncionario.bind(this);
 this.editFuncionario = this.editFuncionario.bind(this);
 this.deleteFuncionario = this.deleteFuncionario.bind(this);
 }
 deleteFuncionario(id){
 FuncionarioService.deleteFuncionario(id).then( res => {
 this.setState({funcionarios: this.state.funcionarios.filter(funcionario => funcionario.id !== id)});
 });
 }
 viewFuncionario(id){
 this.props.history.push(`/view-funcionario/${id}`);
 }
 editFuncionario(id){
 this.props.history.push(`/add-funcionario/${id}`);
 }
 componentDidMount(){
 FuncionarioService.getFuncionarios().then((res) => {
 this.setState({ funcionarios: res.data});
 });
 }
 addFuncionario(){
 this.props.history.push('/add-funcionario/_add');
 }
 render() {
 return (
 <div>
 <h2 className="text-center">Lista de Empregados</h2>
 <div className = "row">
 <button className="btn btn-primary" onClick={this.addFuncionario}> Inserir Funcionario</button>
 </div>
<br></br>
<div className = "row">
 <table className = "table table-striped table-bordered">
 <thead>
 <tr>
 <th> Primeiro Nome Funcionario</th>
 <th> Ultimo nome funcionario</th>
<th> Email Funcionario</th>
<th> Acoes</th>
 </tr>
 </thead>
<tbody>
 {
 this.state.funcionarios.map(
 funcionario =>
<tr key = {funcionario.id}>
 <td> {funcionario.primeiroNome}</td>
<td> {funcionario.ultimoNome}</td>
<td> {funcionario.emailId}</td>
<td>
 <button onClick={ () => this.editFuncionario(funcionario.id)}
className="btn btn-info">Alterar </button>
 <button style={{marginLeft: "10px"}} onClick={ () =>
this.deleteFuncionario(funcionario.id)} className="btn btn-danger">Apagar </button>
 <button style={{marginLeft: "10px"}} onClick={ () =>
this.viewFuncionario(funcionario.id)} className="btn btn-info">Visualizar </button>
 </td>
 </tr>
 )
 }
 </tbody>
 </table>
 </div>
 </div>
 )
 }
}
export default ListFuncionarioComponent