import axios from 'axios';
const FUNCIONARIO_API_BASE_URL = "http://localhost:8080/api/v1/funcionarios";
class FuncionarioService {
 getFuncionarios(){
 return axios.get(FUNCIONARIO_API_BASE_URL);
 }
 createFuncionario(funcionario){
 return axios.post(FUNCIONARIO_API_BASE_URL, funcionario);
 }
 getFuncionarioById(funcionarioId){
 return axios.get(FUNCIONARIO_API_BASE_URL + '/' + funcionarioId);
 }
 updateFuncionario(funcionario, funcionarioId){
 return axios.put(FUNCIONARIO_API_BASE_URL + '/' + funcionarioId, funcionario);
 }
 deleteFuncionario(funcionarioId){
 return axios.delete(FUNCIONARIO_API_BASE_URL + '/' + funcionarioId);
 }
}
export default new FuncionarioService()