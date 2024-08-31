import { useState } from 'react'
import ReposList from './componentes/ReposList';
import Perfil from './componentes/Perfil';

function App() {
const [nomeUsuario,setNomeUsuario] = useState('')
  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 3 &&(
        <>
          <Perfil nomeUsuario = {nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
    </>
  )
}

export default App;