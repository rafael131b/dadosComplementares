import React, { useState } from "react";

const initialState = {
  number: 1234,
  text: "context API",

  dadosPaciente: {
    nomeCompleto: null,
    dataNascimento: null,
    sexo: null,
    generoSocial:null,
    cpf: null,
    rg: null,
    digitoRg: null,
    ufRg: null,
    orgaoEmissor:null,
    dataEmissao:null,
    nomeSocial: null,
    nomeResponsalve:null,
    menorAntecipado:false,
    RMN:null,
    nacionalidade:null,
    documentosPessoais: [
      {
        nome: null,
        url: null,
        descricao: null,
      },
    ],
    idade: null,
    menorAntecipado: false,
    altura: null,
    peso: null,
    cns: null,
    estrangeiro: false,
    rmn: null,
    fichaMedica:{
        deficiente: null,
        tipoDeficiente: null,
        situacao: null,
        transplante:[{
            dataTransplante: null,
            orgaoTransplantado: null,
        }],
    },
    raca: null,
    informarEtnia: null,
    nomeMae: null,
  },
  dadosRepresentante:{
    nomeCompleto: null,
    dataNascimento: null,
    sexo: null,
    generoSocial: null,
    cpf: null,
    rg: null,
    digitoRg: null,
    nomeSocial: null,
    ufRg: null,
  },

  Contato: {
    celular: null,
    telefone1: null,
    telefone2: null,
    email: null,
  },
  enderecoComplementar: {
    cep: null,
    endereco: null,
    numero: null,
    complementar: null,
    bairro: null,
    uf: null,
    cidade: null,
  },
};

const AppContext = React.createContext(initialState);

export const Store = ({ children }) => {
  const [state, setState] = useState(initialState);


  function updateDadosPaciente(key, value) {
    setState({
      ...state,
      [key]:state.dadosPaciente[key]=value
    });
  }
  function updateDocumentosPessoais(value){
    const documentosPessoais=state.dadosPaciente.documentosPessoais
    documentosPessoais.push(value)
    setState({
        ...state,
        documentosPessoais:state.dadosPaciente.documentosPessoais=documentosPessoais
    })
  }

  function updateDadosPacienteFichaMedica(value){
    setState({
        ...state,
        fichaMedica :state.dadosPaciente.fichaMedica=value
    })
  }

  function updateDadosPacienteTransplante(value){
    const  transplante=state.dadosPaciente.fichaMedica.transplante.push(value)
    setState({
      ...state,
      transplante:state.dadosPaciente.fichaMedica.transplante=transplante
    })
  }

  function updateContato (key,value){
    setState({
      ...state,
      [key]:state.Contato[key]=value
    })
  }

  function updateEndereco(key,value){
    setState({
      ...state,
      [key]:state.enderecoComplementar=value
    })
  }



  return (
    <AppContext.Provider
      value={{
        dadosPaciente:state.dadosPaciente,
        setDadosPaciente:(key,value)=>updateDadosPaciente(key,value),
        documentosPessoais:state.dadosPaciente.documentosPessoais,
        setDocumentosPessoais:(value)=>updateDocumentosPessoais(value),
        fichaMedica:state.dadosPaciente.fichaMedica,
        setFichaMedica:value=>updateDadosPacienteFichaMedica(value),
        transplante:state.dadosPaciente.fichaMedica.transplante,
        setTransplante:value=>updateDadosPacienteTransplante(value),
        contato:state.Contato,
        setContato:(key,value)=>updateContato(key,value),
        endereco:state.enderecoComplementar,
        setEndereco:(key,value)=>updateEndereco(key,value)
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Store;
