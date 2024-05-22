import React, { useState } from 'react';
import './App.css';

// Datos de los jugadores
const jugadores = [
  { nombre: "Lionel Messi", posicion: "Delantero", goles: 700, edad: 36 },
  { nombre: "Cristiano Ronaldo", posicion: "Delantero", goles: 750, edad: 39 },
  { nombre: "Neymar Jr.", posicion: "Delantero", goles: 350, edad: 32 },
  { nombre: "Kylian Mbappé", posicion: "Delantero", goles: 200, edad: 25 },
  { nombre: "Robert Lewandowski", posicion: "Delantero", goles: 450, edad: 35 },
  { nombre: "Kevin De Bruyne", posicion: "Centrocampista", goles: 100, edad: 32 },
  { nombre: "Luka Modrić", posicion: "Centrocampista", goles: 70, edad: 38 },
  { nombre: "Sergio Ramos", posicion: "Defensa", goles: 100, edad: 37 },
  { nombre: "Virgil van Dijk", posicion: "Defensa", goles: 30, edad: 32 },
  { nombre: "Manuel Neuer", posicion: "Portero", goles: 0, edad: 38 },
  { nombre: "Karim Benzema", posicion: "Delantero", goles: 400, edad: 36 },
  { nombre: "Harry Kane", posicion: "Delantero", goles: 250, edad: 30 },
  { nombre: "Eden Hazard", posicion: "Delantero", goles: 150, edad: 33 },
  { nombre: "Paul Pogba", posicion: "Centrocampista", goles: 80, edad: 31 },
  { nombre: "Joshua Kimmich", posicion: "Centrocampista", goles: 40, edad: 29 },
  { nombre: "Gerard Piqué", posicion: "Defensa", goles: 50, edad: 37 },
  { nombre: "Alisson Becker", posicion: "Portero", goles: 0, edad: 31 },
  { nombre: "Antoine Griezmann", posicion: "Delantero", goles: 200, edad: 33 },
  { nombre: "Raheem Sterling", posicion: "Delantero", goles: 150, edad: 29 },
  { nombre: "Jan Oblak", posicion: "Portero", goles: 0, edad: 31 }
];

// Componente para listar los jugadores
const ListaJugadores = ({ jugadores }) => (
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Posición</th>
        <th>Goles</th>
        <th>Edad</th>
      </tr>
    </thead>
    <tbody>
      {jugadores.map((jugador, index) => (
        <tr key={index}>
          <td>{jugador.nombre}</td>
          <td>{jugador.posicion}</td>
          <td>{jugador.goles}</td>
          <td>{jugador.edad}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

// Componente principal de la aplicación
const App = () => {
  const [vista, setVista] = useState('primeros10');
  const [busqueda, setBusqueda] = useState('');

  const obtenerJugadores = () => {
    let jugadoresFiltrados = [];
    switch (vista) {
      case 'primeros10':
        jugadoresFiltrados = jugadores.slice(0, 10);
        break;
      case 'ultimos10':
        jugadoresFiltrados = jugadores.slice(-10);
        break;
      case 'pares':
        jugadoresFiltrados = jugadores.filter((_, index) => index % 2 === 0);
        break;
      case 'impares':
        jugadoresFiltrados = jugadores.filter((_, index) => index % 2 !== 0);
        break;
      default:
        jugadoresFiltrados = [];
    }

    if (busqueda) {
      jugadoresFiltrados = jugadoresFiltrados.filter(jugador =>
        jugador.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    return jugadoresFiltrados;
  };

  return (
    <div className="App">
      <h1>Lista de Jugadores de Fútbol</h1>
      <div>
        <button onClick={() => setVista('primeros10')}>Mostrar Primeros 10</button>
        <button onClick={() => setVista('ultimos10')}>Mostrar Últimos 10</button>
        <button onClick={() => setVista('pares')}>Mostrar Pares</button>
        <button onClick={() => setVista('impares')}>Mostrar Impares</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Buscar jugador..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
      </div>
      <ListaJugadores jugadores={obtenerJugadores()} />
    </div>
  );
};

export default App;
