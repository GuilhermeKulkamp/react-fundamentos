/**
 * Componente de cartão profissional reutilizável
 * @module CartaoProfissional
 * @param {Object} props - { nome, cargo, email }
 * @returns {JSX.Element} Cartão formatado
 */

// Validação das props com PropTypes
import PropTypes from 'prop-types'; // Importa PropTypes para validação
import { Children } from 'react';

// Definição do componente funcional
CartaoProfissional.propTypes = {
  nome: PropTypes.string.isRequired, // Nome é obrigatório e deve ser string
  cargo: PropTypes.string.isRequired, // Cargo é obrigatório e deve ser string
  email: PropTypes.string.isRequired, // Email é obrigatório e deve ser string
  foto: PropTypes.string, // Foto é opcional e deve ser string
  telefone: PropTypes.string, // Telefone é opcional e deve ser string
  children: PropTypes.node, // Children é opcional e pode ser qualquer nó React
};

// Defaults para props opcionais (se não passar, usa esses valores)
CartaoProfissional.defaultProps = {
  foto: null, // Foto padrão é null
  telefone: null, // Telefone padrão é null
  children: null, // Children padrão é null
};

// Componente funcional
export function CartaoProfissional({ nome, cargo, email, foto, telefone, children }) {
  // Destructuring com default inline e renomeação
  const {
    nome: nomeProfissional,
    cargo: titulo,
    email: emailContato,
    foto: fotoPerfil,
    telefone: telefoneContato,
  } = { nome, cargo, email, foto, telefone }; // Exemplo de uso

  // Retorno do JSX
  return (
    <div className="cartao">
      {/* Exibir foto somente se existir */}
      {fotoPerfil && <img src={foto} alt={nome} className="foto" />}

      {/* Exibir nome */}
      <h2>{nomeProfissional}</h2>
      <p className="cargo">{titulo}</p>
      {telefoneContato && <p>📞 {telefoneContato}</p>}
      <p className="email">📧 {emailContato}</p>

      {/* Renderizar children se houver */}
      {children && <div className="conteudo-custom">{children}</div>}

      <button onClick={() => alert(`Contato: ${emailContato}`)}>Enviar Mensagem</button>
    </div>
  );
}
