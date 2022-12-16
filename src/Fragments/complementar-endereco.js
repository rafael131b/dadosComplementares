import React, { useContext } from "react";
import {DescriptionSection} from "../Components/DescriptionSection"
import { AppContext } from "../Services/context";
import {enderecoComplementarApi} from "../Services/api-fake"
import Panel from "../Components/Panel";
import { IMaskInput } from "react-imask";
const ComplementarEndereco = () =>{
    const {enderecoComplementar,tipoPessoa}=useContext(AppContext)
    return <section>
       <div className="container">
       <DescriptionSection title="Endereço Residencial" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500swhen an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" ></DescriptionSection>
       </div>

        
        <Panel text="Endereço Residencial do Responsável Legal">
            <div className="row">
            <div className="col-md-2">
                    <label >CPF</label>
                <IMaskInput 
                mask="00000000"
                placeholder="CEP"
                className="form-control"
                value={enderecoComplementarApi.cep}
                />

                </div>
                <div className="col-md-3">
                    <label >Endereço</label>
                <input 
                
                placeholder="Endereço"
                className="form-control"
                value={enderecoComplementarApi.endereco}
                />

                </div>

                <div className="col-md-1">
                    <label >Número</label>
                <input 
                
                placeholder="Número"
                className="form-control"
                value={enderecoComplementarApi.numero}
                />

                </div>

                <div className="col-md-2">
                    <label >Complemento</label>
                <input 
                
                placeholder="Complemento"
                className="form-control"
                value={enderecoComplementarApi.complementar}
                />

                </div>

                <div className="col-md-1">
                    <label >UF</label>
                <input 
                
                placeholder="UF"
                className="form-control"
                value={enderecoComplementarApi.uf}
                />

                </div>

                <div className="col-md-2">
                    <label >Cidade</label>
                <input 
                
                placeholder="Cidade"
                className="form-control"
                value={enderecoComplementarApi.cidade}
                />

                </div>

            </div>
        </Panel>

        <Panel text="Endereço Residencial do Paciente">
            <div className="row">
            <div className="col-md-2">
                    <label >CPF</label>
                <IMaskInput 
                mask="00000000"
                placeholder="CEP"
                className="form-control"
                
                />

                </div>

                <div className="col-md-3">
                    <label >Endereço</label>
                <input 
                
                placeholder="Endereço"
                className="form-control"
                
                />

                </div>

                <div className="col-md-1">
                    <label >Número</label>
                <input 
                
                placeholder="Número"
                className="form-control"
               
                />

                </div>

                <div className="col-md-2">
                    <label >Complemento</label>
                <input 
                
                placeholder="Complemento"
                className="form-control"
                
                />

                </div>

                <div className="col-md-1">
                    <label >UF</label>
                <input 
                
                placeholder="UF"
                className="form-control"
                value={enderecoComplementarApi.uf}
                />

                </div>

                <div className="col-md-2">
                    <label >Cidade</label>
                <input 
                
                placeholder="Cidade"
                className="form-control"
                
                />

                </div>
            </div>
        </Panel>
        
    </section>
}

export default ComplementarEndereco;