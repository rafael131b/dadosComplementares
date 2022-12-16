
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect } from 'react';
import ComplementarCadastro from './Fragments/complementar-cadastro';
import ComplementarEndereco from './Fragments/complementar-endereco';
import { AppContext } from './Services/context';
function App() {
  const {setControlForm,controlForm}=useContext(AppContext)

  useEffect(()=>{
    setControlForm('step',2)
  },[])
  return (
    <div className="App">
     
      
    <ComplementarEndereco />
    
     
    </div>
  );
}

export default App;
