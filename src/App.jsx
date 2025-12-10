import { CartaoProfissional } from './components/CartaoProfissional'; // Importaremos depois
import './App.css';

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
            foto={prof.foto}
            telefone={prof.telefone}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
