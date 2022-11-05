// Codigo para visualizar os funcionarios
import React, { Component } from 'react'
import FuncionarioService from '../services/FuncionarioService'
class ViewFuncionarioComponent extends Component {
 constructor(props) {
 super(props)
 this.state = {
 id: this.props.match.params.id,
 funcionario: {}
 }
 }
 componentDidMount(){
 FuncionarioService.getFuncionarioById(this.state.id).then( res => {
 this.setState({funcionario: res.data});
 })
 }
 render() {
 return (
 <div>
 <br></br>
 <div className = "card col-md-6 offset-md-3">
 <h3 className = "text-center"> Dados do Funcionario</h3>
 <div className = "card-body">
 <div className = "row">
 <label> Primeiro nome: </label>
<div> { this.state.funcionario.primeiroNome }</div>
 </div>
<div className = "row">
 <label> Ultimo nome: </label>
<div> { this.state.funcionario.ultimoNome }</div>
 </div>
<div className = "row">
 <label> Email: </label>
<div> { this.state.funcionario.emailId }</div>
 </div>
 </div>
 </div>
 </div>
 )
 }
}
export default ViewFuncionarioComponent