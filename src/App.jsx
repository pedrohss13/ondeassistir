
import { useState } from "react";
import "./App.css";

const jogosFicticios = [
  {
    timeA: "Flamengo",
    timeB: "Palmeiras",
    horario: "Domingo, 16h",
    campeonato: "Brasileirão",
    transmissao: "Globo / Premiere"
  },
  {
    timeA: "São Paulo",
    timeB: "Corinthians",
    horario: "Sábado, 18h",
    campeonato: "Copa do Brasil",
    transmissao: "Amazon Prime"
  },
  {
    timeA: "Cruzeiro",
    timeB: "Grêmio",
    horario: "Domingo, 19h",
    campeonato: "Brasileirão",
    transmissao: "SporTV"
  }
];

function App() {
  const [busca, setBusca] = useState("");

  const jogosFiltrados = jogosFicticios.filter((jogo) => {
    const termo = busca.toLowerCase();
    return (
      jogo.timeA.toLowerCase().includes(termo) ||
      jogo.timeB.toLowerCase().includes(termo)
    );
  });

  return (
    <div className="container">
      <h1>Onde Assistir</h1>
      <input
        type="text"
        placeholder="Digite o nome do time..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <div className="jogos">
        {jogosFiltrados.map((jogo, index) => (
          <div className="jogo" key={index}>
            <h2>{jogo.timeA} x {jogo.timeB}</h2>
            <p>🕒 {jogo.horario}</p>
            <p>🏆 {jogo.campeonato}</p>
            <p>📺 {jogo.transmissao}</p>
          </div>
        ))}
        {jogosFiltrados.length === 0 && (
          <p className="nenhum">Nenhum jogo encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default App;
