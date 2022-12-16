import React, { useState } from "react";

const initialState = {
  tipoPessoa:'RESPONSAVEL',

  dadosPaciente: {
    nomeCompleto: null,
    dataNascimento: null,
    cns: null,
    prontuario:null,
    sexo: null,
    generoSocial:null,
    cpf: null,
    rg: null,
    digitoRg: null,
    ufRg: null,
    orgaoEmissor:null,
    dataEmissao:null,
    nacionalidade:null,
    naturalidade:null,
    ufNascimento:null,
    nomeSocial: null,
    nomeResponsalve:null,
    menorAntecipado:false,
    RMN:null,
    etnia:null,
    emancipado:null,
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
    enderecoRepresentante:{
      cep:null,
      endereco:null,
      numero:null,
      complemento:null,
      bairro:null,
      cidade:null,
      uf:null,
    }
  },

  dadosResponsavel:{
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


  controlForm:{
    step:1
  }
};

export const AppContext = React.createContext(initialState);

export const Store = ({ children }) => {
  const [state, setState] = useState(initialState);


  function updateState(key,value){
    setState({
      ...state,
      [key]:state.controlForm.step=value
    })
  }
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

  function updateDadosPacienteFichaMedica(key,value){
    setState({
        ...state,
       [key]: state.dadosPaciente.fichaMedica[key]=value
    })
  }

  function updateDadosPacienteTransplante(key,value){
    const  transplante=state.dadosPaciente.fichaMedica.transplante.push(value)
    setState({
      ...state,
      [key]:state.dadosPaciente.fichaMedica.transplante=transplante
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

  function updateResponsavel(key,value){
    setState({
      ...state,
      [key]:state.dadosResponsavel[key]=value
    })
  }

  function updateRepresentante(key,value){
    setState({
      ...state,
      [key]:state.dadosRepresentante[key]=value
    })
  }


  return (
    <AppContext.Provider
      value={{
        tipoPessoa:state.tipoPessoa,
        dadosPaciente:state.dadosPaciente,
        setDadosPaciente:(key,value)=>updateDadosPaciente(key,value),
        documentosPessoais:state.dadosPaciente.documentosPessoais,
        setDocumentosPessoais:(value)=>updateDocumentosPessoais(value),
        fichaMedica:state.dadosPaciente.fichaMedica,
        setFichaMedica:(key,value)=>updateDadosPacienteFichaMedica(key,value),
        transplante:state.dadosPaciente.fichaMedica.transplante,
        setTransplante:value=>updateDadosPacienteTransplante(value),
        contato:state.Contato,
        setContato:(key,value)=>updateContato(key,value),
        endereco:state.enderecoComplementar,
        setEndereco:(key,value)=>updateEndereco(key,value),
        dadosResponsavel:state.dadosResponsavel,
        setDadosResponsavel:(key,value)=>updateResponsavel(key,value),
        dadosRepresentante:state.dadosRepresentante,
        setDadosRepresentante:(key,value)=>updateRepresentante(key,value),
        controlForm:state.controlForm,
        setControlForm:(key,value)=>updateState(key,value)


      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Store;
