import React, { useContext, useEffect, useState } from "react";
import Accordions from "../Components/Accordions";
import { IMaskInput } from "react-imask";
import styles from "../styles/index.css";
import { AppContext } from "../Services/context";
import {dadosPacienteApi ,dadosRepresentanteApi,dadosResponsavelApi} from "../Services/api-fake"
const ComplementarCadastro = () => {
  const [emancipado, setEmancipado] = useState(false);
  const [deficiente, setDeficiente] = useState(false);
  const [isIndigena, setIsIndigena] = useState(false);
  const [nacionalidade, setNacionalidade] = useState("Brasil");
  const { setDadosPaciente, dadosPaciente, setFichaMedica,tipoPessoa,setContato,setDadosResponsavel,setDadosRepresentante,dadosRepresentante,dadosResponsavel} =
    useContext(AppContext);
  

  

  function changePeople(tipo){
    if(tipo==='PACIENTE'){
      return  dadosPacienteApi
    }
    if(tipo==='REPRESENTANTE'){
      return dadosRepresentanteApi
    }
    if(tipo==='RESPONSAVEL')
    return dadosResponsavelApi
  }


  useEffect(() => {}, emancipado, deficiente, isIndigena, nacionalidade,tipoPessoa,dadosPacienteApi);

  
  return (
    <div>
      <Accordions title="Dados Pessoais Do Paciente">
        <form>
          <div className="row">
            <div className="col-md-2">
              <label for="cpf">CPF</label>
              <IMaskInput
                className="form-control"
                mask="000.000.000-00"
                placeholder=""
                id="cpf"
                value={tipoPessoa==='PACIENTE'?changePeople(tipoPessoa).cpf:''}
                disabled={tipoPessoa==='PACIENTE'}
                onChange={(e) => {
                  if(tipoPessoa==='PACIENTE'){
                    setDadosPaciente(changePeople(tipoPessoa).cpf);
                  }
                  
                  
                }}
              />
            </div>
            <div className="col-md-2">
              <label for="cns">CNS </label>
              <IMaskInput
                id="cns"
                min={13}
                max={13}
                className="form-control"
                mask="000.000.000.0000"
                placeholder="Numero CSN"
                onChange={(e) => {
                  setDadosPaciente("cns", e.target.value);
                  console.log(dadosPaciente.cns);
                }}
              />
            </div>

            <div className="col-md-2">
              <label for="prontuario">Prontuário </label>
              <input
                id="prontuario"
                type="text"
                className="form-control"
                placeholder="Prontuario"
                onChange={(e) => {
                  setDadosPaciente("prontuario", e.target.value);
                  console.log(dadosPaciente.prontuario);
                }}
              />
            </div>

            <div className="col-md-2">
              <label for="rg">RG</label>
              <IMaskInput
                id="rg"
                min={10}
                className="form-control"
                placeholder="Número do RG"
                onChange={(e) => {
                  setDadosPaciente("rg", e.target.value);
                  console.log(dadosPaciente.rg);
                }}
              />
            </div>
            <div className="col-md-1">
              <label for="nomeSocial"> Emissor </label>
              <input
                className="form-control"
                type="text"
                placeholder="Orgão Emissor"
                id="nomeSocial"
                onChange={(e) => {
                  setDadosPaciente("orgaoEmissor", e.target.value);
                  console.log(dadosPaciente.orgaoEmissor);
                }}
              />
            </div>
            <div className="col-md-2">
              <label for="dataEmissaoRg">Data de Emissão</label>
              <input
                id="dataEmissaoRg"
                type="date"
                className="form-control"
                onChange={(e) => {
                  setDadosPaciente("dataEmissao", e.target.value);
                  console.log(dadosPaciente.dataEmissao);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <label for="dataNascimento">Data de Nascimento </label>
              <input
                id="dataNascimento"
                className="form-control"
                type="date"
                 
                 value={tipoPessoa==='PACIENTE'?dadosPacienteApi.dataNascimento:dadosPaciente.dataNascimento}
                 disabled={tipoPessoa==='PACIENTE'}
                onChange={(e) => {
                  if(tipoPessoa==='PACIENTE'){
                    setDadosPaciente("dataNascimento", e.target.value);
                  }
                  
                }}
              />
            </div>
            <div className="col-md-1">
              <label for="idade">Idade </label>
              <input
                id="idade"
                className="form-control"
                type="text"
                disabled={tipoPessoa==='PACIENTE'}
                value={tipoPessoa==='PACIENTE'?dadosPacienteApi.idade:dadosPaciente.idade}
                onChange={(e) => {
                  if(tipoPessoa==='PACIENTE'){
                    setDadosPaciente("idade", changePeople(tipoPessoa).idade);
                    console.log(dadosPaciente.idade);
                  }

                }}

                
              />
            </div>
            <div className="col-md-3">
              <label for="nomeCompleto">Nome Completo </label>
              <input
                id="nomeCompleto"
                className="form-control"
                type="text"
                placeholder="Almir Sater"
                onChange={(e) => {
                  setDadosPaciente("nomeCompleto", e.target.value);
                  console.log(dadosPaciente.nomeCompleto);

                }}
              />
            </div>
            <div className="col-md-3">
              <label for="nomeSocial">Nome Social </label>
              <input
                className="form-control"
                type="text"
                placeholder="Amanda Brazil"
                id="nomeSocial"
                onChange={(e) => {
                  setDadosPaciente("nomeSocial", e.target.value);
                  console.log(dadosPaciente.nomeSocial);
                }}
              />
            </div>

            <div className="col-md-2">
              <label for="generoSocial">Gênero Social </label>
              <select
                id="generoSocial"
                className="form-control"
                name="selecione"
                onChange={(e) => {
                  setDadosPaciente("generoSocial", e.target.value);
                  console.log(dadosPaciente.generoSocial);
                }}
              >
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Queer">Queer</option>
                <option value="intersexual">intersexual</option>
                <option value="pansexual">pansexual</option>
                <option value="Trangênero">Trangênero</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <label for="nomeMae">Nome da Mãe *</label>
              <IMaskInput
                id="nomeMae"
                min={3}
                className="form-control"
                placeholder="Nome da mãe"
                onChange={(e) => {
                  setDadosPaciente("nomeMae", e.target.value);
                  console.log(dadosPaciente.nomeMae);
                }}
              />
            </div>
            <div className="col-md-4">
              <label for="responsavel">Nome do Responsável *</label>
              <IMaskInput
                id="responsavel"
                min={3}
                className="form-control"
                placeholder="Nome do Responsável"
                onChange={(e) => {
                  setDadosPaciente("nomeResponsalve", e.target.value);
                  console.log(dadosPaciente.nomeResponsalve);
                }}
              />
            </div>

            {nacionalidade === "Brasil" ? (
              <div className="col-md-2 text-center mt-1 ">
                <label className="text-center">UF Nascimento</label>

                <select
                  className="form-control"
                  onChange={(e) => {
                    setDadosPaciente("ufNascimento", e.target.value);
                    console.log(dadosPaciente.ufNascimento);
                  }}
                >
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                  <option value="EX">Estrangeiro</option>
                </select>
              </div>
            ) : (
              ""
            )}
            <div className="col-md-2 text-center mt-1 ">
              <label className="text-center">Naturalidade</label>

              <select
                className="form-control"
                onChange={(e) => {
                  setDadosPaciente("naturalidade", e.target.value);
                  console.log(dadosPaciente.naturalidade);
                }}
              >
                <option value="AC">São Paulo</option>

                <option value="mu">Muzambinho</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 mt-1">
              <label className="mb-1">
                <strong>Raça/Cor/Etnia</strong> *
              </label>
              <div>
                <div className="d-flex justify-content-between">
                  <div>
                    <input
                      name="tipoDeRaca"
                      id="Branca"
                      type="radio"
                      value="Branca"
                      onChange={(e) => {
                        setIsIndigena(false);
                        setDadosPaciente("raca", e.target.value);
                        console.log(dadosPaciente.raca);
                      }}
                    />
                    <label for="Branca" className="mx-1">
                      Branca
                    </label>
                  </div>
                  <div className="mx-1">
                    <input
                      name="tipoDeRaca"
                      id="Amarela"
                      type="radio"
                      value="Amarela"
                      className="mx-1"
                      onChange={(e) => {
                        setIsIndigena(false);
                        setDadosPaciente("raca", e.target.value);
                        console.log(dadosPaciente.raca);
                      }}
                    />
                    <label for="Amarela">Amarela</label>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="mt-2">
                    <input
                      name="tipoDeRaca"
                      id="Preta"
                      type="radio"
                      value="Preta"
                      onChange={(e) => {
                        setIsIndigena(false);
                        setDadosPaciente("raca", e.target.value);
                        console.log(dadosPaciente.raca);
                      }}
                    />
                    <label for="Preta" className="mx-1">
                      Preta
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      name="tipoDeRaca"
                      id="Indígena"
                      type="radio"
                      value="Indígena"
                      className="mx-1"
                      onChange={(e) => {
                        setIsIndigena(true);
                        setDadosPaciente("raca", e.target.value);
                        console.log(dadosPaciente.raca);
                      }}
                    />
                    <label for="Indígena">Indígena</label>
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <div className="mt-2">
                    <input
                      name="tipoDeRaca"
                      id="Parda"
                      type="radio"
                      value="Parda"
                      onChange={(e) => {
                        setIsIndigena(false);
                        setDadosPaciente("raca", e.target.value);
                        console.log(dadosPaciente.raca);
                      }}
                    />
                    <label for="Parda" className="mx-1">
                      Parda
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {isIndigena ? (
              <div className="col-md-2 mt-1">
                <label for="informarEtinia"> Etinia Indígena</label>
                <input
                  id="informarEtinia"
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setDadosPaciente("etnia", e.target.value);
                    console.log(dadosPaciente.etnia);
                  }}
                />
              </div>
            ) : (
              ""
            )}
            <div className="col-md-2">
              <label>Nacionalidade*</label>
              <select
                name="paises"
                id="paises"
                className="form-control"
                onChange={(e) => {
                  setNacionalidade(e.target.value);
                  setDadosPaciente("nacionalidade", e.target.value);
                  console.log(dadosPaciente.nacionalidade);
                }}
              >
                <option value="Brasil" selected="selected">
                  Brasil
                </option>
                <option value="Afeganistão">Afeganistão</option>
                <option value="África do Sul">África do Sul</option>
                <option value="Albânia">Albânia</option>
                <option value="Alemanha">Alemanha</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antilhas Holandesas">Antilhas Holandesas</option>
                <option value="Antárctida">Antárctida</option>
                <option value="Antígua e Barbuda">Antígua e Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Argélia">Argélia</option>
                <option value="Armênia">Armênia</option>
                <option value="Aruba">Aruba</option>
                <option value="Arábia Saudita">Arábia Saudita</option>
                <option value="Austrália">Austrália</option>
                <option value="Áustria">Áustria</option>
                <option value="Azerbaijão">Azerbaijão</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrein">Bahrein</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belize">Belize</option>
                <option value="Benim">Benim</option>
                <option value="Bermudas">Bermudas</option>
                <option value="Bielorrússia">Bielorrússia</option>
                <option value="Bolívia">Bolívia</option>
                <option value="Botswana">Botswana</option>
                <option value="Brunei">Brunei</option>
                <option value="Bulgária">Bulgária</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Butão">Butão</option>
                <option value="Bélgica">Bélgica</option>
                <option value="Bósnia e Herzegovina">
                  Bósnia e Herzegovina
                </option>
                <option value="Cabo Verde">Cabo Verde</option>
                <option value="Camarões">Camarões</option>
                <option value="Camboja">Camboja</option>
                <option value="Canadá">Canadá</option>
                <option value="Catar">Catar</option>
                <option value="Cazaquistão">Cazaquistão</option>
                <option value="Chade">Chade</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Chipre">Chipre</option>
                <option value="Colômbia">Colômbia</option>
                <option value="Comores">Comores</option>
                <option value="Coreia do Norte">Coreia do Norte</option>
                <option value="Coreia do Sul">Coreia do Sul</option>
                <option value="Costa do Marfim">Costa do Marfim</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Croácia">Croácia</option>
                <option value="Cuba">Cuba</option>
                <option value="Dinamarca">Dinamarca</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Egito">Egito</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Emirados Árabes Unidos">
                  Emirados Árabes Unidos
                </option>
                <option value="Equador">Equador</option>
                <option value="Eritreia">Eritreia</option>
                <option value="Escócia">Escócia</option>
                <option value="Eslováquia">Eslováquia</option>
                <option value="Eslovênia">Eslovênia</option>
                <option value="Espanha">Espanha</option>
                <option value="Estados Federados da Micronésia">
                  Estados Federados da Micronésia
                </option>
                <option value="Estados Unidos">Estados Unidos</option>
                <option value="Estônia">Estônia</option>
                <option value="Etiópia">Etiópia</option>
                <option value="Fiji">Fiji</option>
                <option value="Filipinas">Filipinas</option>
                <option value="Finlândia">Finlândia</option>
                <option value="França">França</option>
                <option value="Gabão">Gabão</option>
                <option value="Gana">Gana</option>
                <option value="Geórgia">Geórgia</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Granada">Granada</option>
                <option value="Gronelândia">Gronelândia</option>
                <option value="Grécia">Grécia</option>
                <option value="Guadalupe">Guadalupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernesei">Guernesei</option>
                <option value="Guiana">Guiana</option>
                <option value="Guiana Francesa">Guiana Francesa</option>
                <option value="Guiné">Guiné</option>
                <option value="Guiné Equatorial">Guiné Equatorial</option>
                <option value="Guiné-Bissau">Guiné-Bissau</option>
                <option value="Gâmbia">Gâmbia</option>
                <option value="Haiti">Haiti</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungria">Hungria</option>
                <option value="Ilha Bouvet">Ilha Bouvet</option>
                <option value="Ilha de Man">Ilha de Man</option>
                <option value="Ilha do Natal">Ilha do Natal</option>
                <option value="Ilha Heard e Ilhas McDonald">
                  Ilha Heard e Ilhas McDonald
                </option>
                <option value="Ilha Norfolk">Ilha Norfolk</option>
                <option value="Ilhas Cayman">Ilhas Cayman</option>
                <option value="Ilhas Cocos (Keeling)">
                  Ilhas Cocos (Keeling)
                </option>
                <option value="Ilhas Cook">Ilhas Cook</option>
                <option value="Ilhas Feroé">Ilhas Feroé</option>
                <option value="Ilhas Geórgia do Sul e Sandwich do Sul">
                  Ilhas Geórgia do Sul e Sandwich do Sul
                </option>
                <option value="Ilhas Malvinas">Ilhas Malvinas</option>
                <option value="Ilhas Marshall">Ilhas Marshall</option>
                <option value="Ilhas Menores Distantes dos Estados Unidos">
                  Ilhas Menores Distantes dos Estados Unidos
                </option>
                <option value="Ilhas Salomão">Ilhas Salomão</option>
                <option value="Ilhas Virgens Americanas">
                  Ilhas Virgens Americanas
                </option>
                <option value="Ilhas Virgens Britânicas">
                  Ilhas Virgens Britânicas
                </option>
                <option value="Ilhas Åland">Ilhas Åland</option>
                <option value="Indonésia">Indonésia</option>
                <option value="Inglaterra">Inglaterra</option>
                <option value="Índia">Índia</option>
                <option value="Iraque">Iraque</option>
                <option value="Irlanda do Norte">Irlanda do Norte</option>
                <option value="Irlanda">Irlanda</option>
                <option value="Irã">Irã</option>
                <option value="Islândia">Islândia</option>
                <option value="Israel">Israel</option>
                <option value="Itália">Itália</option>
                <option value="Iêmen">Iêmen</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japão">Japão</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordânia">Jordânia</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Laos">Laos</option>
                <option value="Lesoto">Lesoto</option>
                <option value="Letônia">Letônia</option>
                <option value="Libéria">Libéria</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lituânia">Lituânia</option>
                <option value="Luxemburgo">Luxemburgo</option>
                <option value="Líbano">Líbano</option>
                <option value="Líbia">Líbia</option>
                <option value="Macau">Macau</option>
                <option value="Macedônia">Macedônia</option>
                <option value="Madagáscar">Madagáscar</option>
                <option value="Malawi">Malawi</option>
                <option value="Maldivas">Maldivas</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Malásia">Malásia</option>
                <option value="Marianas Setentrionais">
                  Marianas Setentrionais
                </option>
                <option value="Marrocos">Marrocos</option>
                <option value="Martinica">Martinica</option>
                <option value="Mauritânia">Mauritânia</option>
                <option value="Maurícia">Maurícia</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Moldávia">Moldávia</option>
                <option value="Mongólia">Mongólia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Moçambique">Moçambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="México">México</option>
                <option value="Mônaco">Mônaco</option>
                <option value="Namíbia">Namíbia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Nicarágua">Nicarágua</option>
                <option value="Nigéria">Nigéria</option>
                <option value="Niue">Niue</option>
                <option value="Noruega">Noruega</option>
                <option value="Nova Caledônia">Nova Caledônia</option>
                <option value="Nova Zelândia">Nova Zelândia</option>
                <option value="Níger">Níger</option>
                <option value="Omã">Omã</option>
                <option value="Palau">Palau</option>
                <option value="Palestina">Palestina</option>
                <option value="Panamá">Panamá</option>
                <option value="Papua-Nova Guiné">Papua-Nova Guiné</option>
                <option value="Paquistão">Paquistão</option>
                <option value="Paraguai">Paraguai</option>
                <option value="País de Gales">País de Gales</option>
                <option value="Países Baixos">Países Baixos</option>
                <option value="Peru">Peru</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Polinésia Francesa">Polinésia Francesa</option>
                <option value="Polônia">Polônia</option>
                <option value="Porto Rico">Porto Rico</option>
                <option value="Portugal">Portugal</option>
                <option value="Quirguistão">Quirguistão</option>
                <option value="Quênia">Quênia</option>
                <option value="Reino Unido">Reino Unido</option>
                <option value="República Centro-Africana">
                  República Centro-Africana
                </option>
                <option value="República Checa">República Checa</option>
                <option value="República Democrática do Congo">
                  República Democrática do Congo
                </option>
                <option value="República do Congo">República do Congo</option>
                <option value="República Dominicana">
                  República Dominicana
                </option>
                <option value="Reunião">Reunião</option>
                <option value="Romênia">Romênia</option>
                <option value="Ruanda">Ruanda</option>
                <option value="Rússia">Rússia</option>
                <option value="Saara Ocidental">Saara Ocidental</option>
                <option value="Saint Martin">Saint Martin</option>
                <option value="Saint-Barthélemy">Saint-Barthélemy</option>
                <option value="Saint-Pierre e Miquelon">
                  Saint-Pierre e Miquelon
                </option>
                <option value="Samoa Americana">Samoa Americana</option>
                <option value="Samoa">Samoa</option>
                <option value="Santa Helena, Ascensão e Tristão da Cunha">
                  Santa Helena, Ascensão e Tristão da Cunha
                </option>
                <option value="Santa Lúcia">Santa Lúcia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serra Leoa">Serra Leoa</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Singapura">Singapura</option>
                <option value="Somália">Somália</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Suazilândia">Suazilândia</option>
                <option value="Sudão">Sudão</option>
                <option value="Suriname">Suriname</option>
                <option value="Suécia">Suécia</option>
                <option value="Suíça">Suíça</option>
                <option value="Svalbard e Jan Mayen">
                  Svalbard e Jan Mayen
                </option>
                <option value="São Cristóvão e Nevis">
                  São Cristóvão e Nevis
                </option>
                <option value="São Marino">São Marino</option>
                <option value="São Tomé e Príncipe">São Tomé e Príncipe</option>
                <option value="São Vicente e Granadinas">
                  São Vicente e Granadinas
                </option>
                <option value="Sérvia">Sérvia</option>
                <option value="Síria">Síria</option>
                <option value="Tadjiquistão">Tadjiquistão</option>
                <option value="Tailândia">Tailândia</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tanzânia">Tanzânia</option>
                <option value="Terras Austrais e Antárticas Francesas">
                  Terras Austrais e Antárticas Francesas
                </option>
                <option value="Território Britânico do Oceano Índico">
                  Território Britânico do Oceano Índico
                </option>
                <option value="Timor-Leste">Timor-Leste</option>
                <option value="Togo">Togo</option>
                <option value="Tonga">Tonga</option>
                <option value="Toquelau">Toquelau</option>
                <option value="Trinidad e Tobago">Trinidad e Tobago</option>
                <option value="Tunísia">Tunísia</option>
                <option value="Turcas e Caicos">Turcas e Caicos</option>
                <option value="Turquemenistão">Turquemenistão</option>
                <option value="Turquia">Turquia</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Ucrânia">Ucrânia</option>
                <option value="Uganda">Uganda</option>
                <option value="Uruguai">Uruguai</option>
                <option value="Uzbequistão">Uzbequistão</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Vaticano">Vaticano</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietname">Vietname</option>
                <option value="Wallis e Futuna">Wallis e Futuna</option>
                <option value="Zimbabwe">Zimbabwe</option>
                <option value="Zâmbia">Zâmbia</option>
              </select>
            </div>
            <div className="col-md-2">
              <label for="sexo">Sexo* </label>
              <select
                id="sexo"
                className="form-control"
                disabled={tipoPessoa==='PACIENTE'}

                value={tipoPessoa==='PACIENTE'?changePeople(tipoPessoa).sexo:dadosPaciente.sexo}
                onChange={(e) => {
                  if(tipoPessoa!=='PACIENTE'){
                    setDadosPaciente("sexo", changePeople(tipoPessoa).sexo);
                    console.log(dadosPaciente.sexo);
                  }
                }}
              >
                <option value="Masculino">Masculino</option>
                <option value="Masculino">Feminino</option>
              </select>
            </div>

            <div className="col-md-1">
              <label for="peso">Peso *</label>
              <IMaskInput
                id="peso"
                max={3}
                min={3}
                className="form-control"
                mask="000"
                placeholder="000"
                onChange={(e) => {
                  setDadosPaciente("peso", e.target.value);
                }}
              />
            </div>
            <div className="col-md-2">
              <label for="altura">Altura *</label>
              <IMaskInput
                id="altura"
                max={3}
                min={3}
                className="form-control"
                placeholder="000"
                mask="000"
                onChange={(e) => {
                  setDadosPaciente("altura", e.target.value);
                  console.log(dadosPaciente.altura);
                }}
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-2 text-center mt-4 ">
              <label className="text-center">Menor Emancipado?</label>

              <div className="d-flex justify-content-between">
                <div>
                  <input
                    type="radio"
                    id="html"
                    name="emancipado"
                    value={true}
                    onChange={(e) => {
                      setEmancipado(true);
                      setDadosPaciente("emancipado", e.target.value);
                      console.log(dadosPaciente.emancipado);
                    }}
                  />
                  <label for="emancipado" className="mx-1">
                    Sim
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="naoEmancipado"
                    name="emancipado"
                    value={false}
                    className="mx-1"
                    onChange={(e) => {
                      setEmancipado(false);
                      setDadosPaciente("menorAntecipado", e.target.value);
                      console.log(dadosPaciente.menorAntecipado);
                    }}
                  />
                  <label for="naoEmancipado">Não</label>
                </div>
              </div>
            </div>
            {emancipado ? (
              <div className="col-md-2">
                <label>RMN*</label>
                <IMaskInput
                  className="form-control"
                  mask="000"
                  min={3}
                  disabled={tipoPessoa==='PACIENTE'}
                  value={tipoPessoa==='PACIENTE'?dadosPacienteApi.rmn:dadosPaciente.RMN}
                  onChange={(e) => {
                    if(tipoPessoa!=='PACIENTE'){
                      setDadosPaciente("rmn", e.target.value);
                    console.log(dadosPaciente.RMN);
                    }
                  }}
                />
              </div>
            ) : (
              ""
            )}
            <div className="col-md-2  mt-1 ">
              <label>
                <strong>Deficiente</strong>
              </label>

              <div className="d-flex justify-content-between">
                <div>
                  <input
                    type="radio"
                    id="html"
                    name="deficiente"
                    value={true}
                    onChange={(e) => {
                      setDeficiente(true);
                      setFichaMedica("deficiente", e.target.value);
                      console.log(dadosPaciente.fichaMedica.deficiente);
                    }}
                  />
                  <label for="comDeficiencia" className="mx-1">
                    Sim
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="semDeficiencia"
                    name="deficiente"
                    value={false}
                    className="mx-1"
                    onChange={(e) => {
                      setDeficiente(false);
                      setFichaMedica("deficiente", e.target.value);
                      console.log(dadosPaciente.fichaMedica.deficiente);
                    }}
                  />
                  <label for="semDeficiencia">Não</label>
                </div>
              </div>
            </div>

            {deficiente ? (
              <div className="col-md-3">
                <label for="tipoDeficiencia">Tipo de Deficiência?</label>
                <input
                  id="tipoDeficiencia"
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setFichaMedica("tipoDeficiente", e.target.value);
                    console.log(dadosPaciente.fichaMedica.tipoDeficiente);
                  }}
                />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="row">
            <div className="col-md-3 mt-3 ">
              <label className="mb-3">
                <strong>Situação *</strong>
              </label>
              <div>
                <div className="d-flex justify-content-between">
                  <div>
                    <input
                      name="situacao"
                      id="hemofilia"
                      type="radio"
                      value="hemofilia"
                      onChange={(e) => {
                        setFichaMedica("situacao", e.target.value);
                        console.log(dadosPaciente.fichaMedica.situacao);
                      }}
                    />
                    <label for="hemofilia" className="mx-1">
                      hemofilia
                    </label>
                  </div>
                  <div className="mx-1">
                    <input
                      name="situacao"
                      id="Infarto"
                      type="radio"
                      value="Infarto"
                      className="mx-1"
                      onChange={(e) => {
                        setFichaMedica("situacao", e.target.value);
                        console.log(dadosPaciente.fichaMedica.situacao);
                      }}
                    />
                    <label for="Infarto">Infarto</label>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="mt-2">
                    <input
                      name="situacao"
                      id="Transplante"
                      type="radio"
                      value="Transplante"
                      onChange={(e) => {
                        setFichaMedica("situacao", e.target.value);
                        console.log(dadosPaciente.fichaMedica.situacao);
                      }}
                    />
                    <label for="Transplante" className="mx-1">
                      Transplante
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      name="situacao"
                      id="Gestante"
                      type="radio"
                      value="Gestante"
                      className="ml-4"
                      onChange={(e) => {
                        setFichaMedica("situacao", e.target.value);
                        console.log(dadosPaciente.fichaMedica.situacao);
                      }}
                    />
                    <label for="Gestante" className="ml-1">
                      Gestante
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <label for="dataDeTransplante" className="mb-2">
                Data de Transplante
              </label>
              <input type="date" className="form-control" />
            </div>

            <div className="col-md-2">
              <label for="dataDeTransplante" className="mb-2">
                Orgão Transplantada
              </label>

              <input type="text" className="form-control" />
            </div>
            <div className="col-md-1">
              <button
                className="form-control btn btn-primary button-add"
                onClick={() => {}}
              >
                +
              </button>
            </div>
          </div>
        </form>
      </Accordions>
      <br />
      {tipoPessoa!=='Paciente'?<Accordions title={` Dados Pessoais ${tipoPessoa}`}>
        <div className="row">
          <div className="col-md-3">
            <label for="nomeRepresentanteOuPaciente">Nome do Responsável</label>
            <input id="nomeRepresentanteOuPaciente" className="form-control"
            value={changePeople(tipoPessoa).nomeCompleto}
            onChange={(e)=>{
              if(tipoPessoa==='Responsavel'){
                setDadosResponsavel('nomeCompleto',e.target.value)
                console.log(dadosResponsavel.nomeCompleto)
              }
              if(tipoPessoa==='Representante'){
                setDadosRepresentante('nomeCompleto',e.target.value)
                console.log(dadosResponsavel.nomeCompleto)
              }
                
            }}
            disabled
            />
          </div>
          <div className="col-md-2">
            <label for="nascimentoR">Data de nascimento</label>
            <input id="nascimentoR" type="date" className="form-control"
            value={changePeople(tipoPessoa).dataNascimento}
            disabled
            />
          </div>

          <div className="col-md-2">
            <label for="sexoR">sexo</label>
            <select id="sexoR"  className="form-control"
            value={changePeople(tipoPessoa).sexo}
            disabled
            >
                      <option value="Masculino">Masculino</option>
                      <option value="Feminino">Feminino</option>
            </select>
          </div>

          <div className="col-md-2">
            <label for="generoSocialR">GeneroSocial</label>
            <select id="generoSocialR"
            onChange={()=>{

            }}
            className="form-control" >
                      <option value="Masculino">Masculino</option>
                      <option value="Feminino">Feminino</option>
            </select>
          </div>
          

          <div className="col-md-3">
            <label for="nomeSocialR">Nome social</label>
            <input id="nomeSocialR" className="form-control" />
          </div>

          <div className="row">
          <div className="col-md-2">
              <label for="cpfR">CPF</label>
              <IMaskInput
                className="form-control"
                mask="000.000.000-00"
                placeholder="48838829901"
                id="cpfR"
                value={changePeople(tipoPessoa).cpf}
            disabled
                onChange={(e) => {
                  
                }}
              />
              </div>

              <div className="col-md-2">
              <label for="rgr">RG</label>
              <IMaskInput
                id="rgr"
                min={10}
                className="form-control"
                placeholder="Número do RG"
                onChange={(e) => {
                }}
              />
            </div>

            <div className="col-md-2">
              <label for="EmissorR"> Emissor </label>
              <input
                className="form-control"
                type="text"
                placeholder="Orgão Emissor"
                id="EmissorR"
                onChange={(e) => {
                  
                }}
              />
            </div>
          </div>
        </div>
      </Accordions>:''}
      <br></br>
      <Accordions title={`Contato ${tipoPessoa}`}>
        <div className="row">
          <div className="col-md-3   ">
            <label className="mx-1">Celular*</label>
            <div className="col-md-12 d-flex">
              <div className="col-md-3 ">
                <IMaskInput
                  placeholder=""
                 
                  className="form-control "
                  disabled
                  value={"14"}
                />
              </div>
              <div className="col-md-9">
                <IMaskInput
                  placeholder=""
                  mask="00000-00000"
                  className="form-control ms-3"
                  value={changePeople(tipoPessoa).Contato.celular}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="col-md-3  ">
            <label className="mx-4 ">Telefone 1*</label>
            <div className="col-md-12 d-flex">
              <div className="col-md-3 mx-4">
                <IMaskInput
                  placeholder=""
                  mask="(00)"
                  className="form-control"
                  value='11'
                  disabled
                />
              </div>
              <div className="col-md-9">
                <IMaskInput
                  placeholder=""
                  mask="00000-00000"
                  className="form-control"
                  disabled
                  value={changePeople(tipoPessoa).Contato.telefone1}
                />
              </div>
            </div>
          </div>

          <div className="col-md-3 mx-4  ">
            <label className="mx-4 ">Telefone 2</label>
            <div className="col-md-12 d-flex">
              <div className="col-md-3 mx-4">
                <IMaskInput
                  placeholder=""
                  mask="(00)"
                  className="form-control"
                  value="22"
                  disabled
                />
              </div>
              <div className="col-md-9">
                <IMaskInput
                  placeholder=""
                  mask="00000-00000"
                  className="form-control"
                  value={changePeople(tipoPessoa).Contato.telefone2}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Email</label>
            <IMaskInput className="form-control"
            
            value={changePeople(tipoPessoa).Contato.email}
              disabled
            />
          </div>
        </div>
      </Accordions>
    </div>
  );
};

export default ComplementarCadastro;
