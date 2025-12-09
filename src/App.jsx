import { CartaoProfissional } from './components/CartaoProfissional'; // Importaremos depois
import './App.css';

function App() {
  // Dados de exemplo (props para os cartões)
  const profissionais = [
    { nome: 'Guilherme', cargo: 'Product Manager', email: 'guilherme@empresa.com' },
    { nome: 'Ana Silva', cargo: 'Desenvolvedora Fullstack', email: 'ana@empresa.com' },
    { nome: 'Carlos Mendes', cargo: 'Designer UI/UX', email: 'carlos@empresa.com' },
  ];

  return (
    <div className="App">
      <h1>Equipe da Empresa</h1>
      <div className="grid-cartoes">
        {profissionais.map((prof, index) => (
          <CartaoProfissional
            key={index} // Chave única para React otimizar
            nome={prof.nome}
            cargo={prof.cargo}
            email={prof.email}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
