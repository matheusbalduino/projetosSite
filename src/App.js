import React, {useState, useEffect} from 'react'; 
import api from './services/api';

//Components
import Header from './components/Header';
import Footer from './components/Footer';
import TextoInput from './components/Texto';

//Visual
import './App.css'
import imgBackground from './assets/shutterstock_490194529.jpg'


/**
 * Componente
 * Propriedade
 * Estado
 * @returns
 */

const estilo = {
  "width": "50vw",
}

export default function App(){
  
  const [ projects, setProjects ] = useState([]);

  useEffect(()=>{
    api.get('cliente').then(response=>{
      console.log(response)
      setProjects(response.data)
    }).catch(err => {console.log("Erro", err)});
  },[])

  //useState retorna um array com 2 posiçoes
  // 1. retorna a variavel com o seu valor inicial
  // 2. retorna para atualizarmos esse valor

  const handleAddProject = () => {
    //projects.push(`Novo projeto ${Date.now()}`)
    setProjects([...projects, `Novo projeto ${Date.now().toLocaleString()}`]);
  }
  //função para capturar os dados da tela e preencher um objeto array para envio
  //dos dados à API
  const handleAddInput = async () => {

    const response = await api.post('cliente', {
      nome : document.getElementById('iptNome').value,
      email : document.getElementById('iptEmail').value,
      telefone : document.getElementById('iptTelefone').value,
      ddd : document.getElementById('iptDdd').value,
      cidade : document.getElementById('iptCidade').value
    })
         
    const user = response.data
    setProjects([...projects, user])
  }

  return (
    <>
    <Header title="homepage"/>
    <TextoInput title="Nome" id="iptNome"/>
    <TextoInput title="Email"id="iptEmail"/>
    <TextoInput title="Telefone" id="iptTelefone"/>
    <TextoInput title="Ddd" id="iptDdd"/>
    <TextoInput title="Cidade" id="iptCidade"/>
    {/* <img src={imgBackground} style={estilo} alt="flores" /> */}
    <ul>
        { projects.map(project => <li key={project.id} > Nome: {project.nome},   Cidade: {project.cidade},   Telefone: ({project.ddd}) {project.telefone} </li> ) }
    </ul>
    <br/>
     <br/>
     <br/>
     <button type="button" onClick={handleAddInput} > Adicionar Projeto </button>
    <Footer props="Matheus Balduino"/>

    </>
  )
}
