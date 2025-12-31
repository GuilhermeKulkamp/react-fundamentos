import { CartaoProfissional } from './components/CartaoProfissional'; // Importaremos depois
import './App.css';
import { ContadorVisualizacoes } from './components/ContadorVisualizacoes'; // Importa o componente de contador

function App() {
  // Dados de exemplo (props para os cartões)
  const profissionais = [
    {
      nome: 'Guilherme',
      cargo: 'Product Manager',
      email: 'guilherme@empresa.com',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPI6SzQJwt46CFXDt_dKgBHMeG1IfnLznKig&s',
    },
    {
      nome: 'Ana Silva',
      cargo: 'Desenvolvedora Fullstack',
      email: 'ana@empresa.com',
      telefone: '(11) 88545-5544',
    },
    {
      nome: 'Carlos Mendes',
      cargo: 'Designer UI/UX',
      email: 'carlos@empresa.com',
      foto: '/public/fotos/user.png',
    },
  ];
  // Exemplo sem foto e telefone para utilizar children
  const prof2 = {
    nome: 'Mariana Souza',
    cargo: 'Analista de Marketing',
    email: 'mariana@teste.com',
  };

  // Renderização dos cartões usando o componente CartaoProfissional
  return (
    <div className="App">
      <h1>Equipe da Empresa</h1>
      <div className="grid-cartoes">
        {/* Uso normal do componente com props */}
        {profissionais.map((prof, index) => (
          <CartaoProfissional
            key={index} // Chave única para React otimizar
            nome={prof.nome}
            cargo={prof.cargo}
            email={prof.email}
            foto={prof.foto}
            telefone={prof.telefone}
          />
        ))}

        {/* Uso do componente com children */}
        <CartaoProfissional {...prof2}>
          <p>Especialista em Next.js e integrações API</p>
          <div className="contador-section">
            <ContadorVisualizacoes nome={prof2.nome} />
          </div>
        </CartaoProfissional>
      </div>
    </div>
  );
}

export default App;
