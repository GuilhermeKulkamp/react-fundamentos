import { useState } from 'react';

export function ContadorVisualizacoes({ nome }) {
  // useState: [valor inicial, setter para atualizar o valor]
  const [cliques, setCliques] = useState(0); // começa em 0

  const handleClique = () => {
    setCliques(cliques + 1); // Incrementa o contador Atualiza state -> re-renderiza
  };

  return (
    <div className="contador">
      <p>
        Visualizações de {nome}: {cliques}{' '}
      </p>
      <button onClick={handleClique}>+1 Visualização</button>
    </div>
  );
}
