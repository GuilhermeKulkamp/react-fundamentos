/**
 * Componente de cartão profissional reutilizável
 * @module CartaoProfissional
 * @param {Object} props - { nome, cargo, email }
 * @returns {JSX.Element} Cartão formatado
 */
export function CartaoProfissional({ nome, cargo, email, foto, telefone }) {
  // Destructuring das props (prático!)
  const {
    nome: nomeProfissional,
    cargo: titulo,
    email: emailContato,
    foto: fotoPerfil,
    telefone: telefoneContato,
  } = { nome, cargo, email, foto, telefone }; // Exemplo de uso

  return (
    <div className="cartao">
      {/* Exibir foto somente se existir */}
      {fotoPerfil && <img src={foto} alt={nome} className="foto" />}
      <h2>{nomeProfissional}</h2>
      <p className="cargo">{titulo}</p>
      {telefoneContato && <p>📞 {telefoneContato}</p>}
      <p className="email">📧 {emailContato}</p>
      <button onClick={() => alert(`Contato: ${emailContato}`)}>Enviar Mensagem</button>
    </div>
  );
}
