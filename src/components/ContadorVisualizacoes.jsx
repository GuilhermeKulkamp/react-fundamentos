import { useState, useEffect } from 'react';

export function ContadorVisualizacoes({ nome }) {
  // useState: [valor inicial, setter para atualizar o valor]
  const [cliques, setCliques] = useState(0); // começa em 0
  // useEffect: executa efeito colateral quando o componente renderiza
  const [carregando, setCarregando] = useState(true);

  // useEffect: simula fetch de dados iniciais
  useEffect(() => {
    // Simula API call (2s delay)
    const timer = setTimeout(() => {
      setCarregando(false);
      setCliques(5); // "carrega" 5 visualizações iniciais
    }, 4000);

    // Cleanup: cancela timer se componente desmontar antes
    return () => clearTimeout(timer);
  }, []); // [] = executa só na montagem

  // Outro useEffect: loga quando cliques mudam
  useEffect(() => {
    if (cliques > 0) {
      console.log(`${nome} tem ${cliques} visualizações agora.`);
    }
  }, [cliques, nome]); // Roda quando cliques ou nome mudam

  // executa quando clicar no botão
  const handleClique = () => {
    setCliques(cliques + 1); // Incrementa o contador Atualiza state -> re-renderiza
  };

  // Renderização condicional
  if (carregando) {
    return <div>Carregando visualizações de {nome}...</div>;
  }

  return (
    <div className="contador">
      <p>
        Visualizações de {nome}: {cliques}{' '}
      </p>
      <button onClick={handleClique}>+1 Visualização</button>
    </div>
  );
}
