/**
 * Componente de cartão profissional reutilizável
 * @module CartaoProfissional
 * @param {Object} props - { nome, cargo, email }
 * @returns {JSX.Element} Cartão formatado
 */
export function CartaoProfissional({ nome, cargo, email }) {
  // Destructuring das props (prático!)
  const { nome: nomeProfissional, cargo: titulo, email: emailContato } = { nome, cargo, email }; // Exemplo de uso

  return (
    <div className="cartao">
      <h2>{nomeProfissional}</h2>
      <p className="cargo">{titulo}</p>
      <p className="email">📧 {emailContato}</p>
      <button onClick={() => alert(`Contato: ${emailContato}`)}>Enviar Mensagem</button>
    </div>
  );
}
