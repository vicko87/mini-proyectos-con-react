import { useState } from "react";
import SearchBar from "./components/searchBar";

import styled from "styled-components"

const Button = styled.button`
padding: 10px;
border-radius: 5px;
border: none;
background-color: white;
border: solid 1px #ccc; 
cursor: pointer;

&:hover {
background-color: #efefef;
}
`
const people = [
  {
    id: "people -01",
    title: "Victoria Kolomytseva",
  },
  {
    id: "people-02",
    title: "Marcos Gerero",
  },
  {
    id: "pepole-03",
    title: "Sandra Gonzalez",
  },
  {
    id: "people-04",
    title: "Martin Jimerez"
  },
  {
    id: "people-05",
    title: "Maria Perez"
  },
];

const calendar = [
  {
    id: "calendar-01",
    title: "Sesión de seguimiento",
  },
  {
    id: "calendar-02",
    title: "Revisión de propuestas",
  },
  {
    id: "calendar-03",
    title: "Evento para donar juguetes",
  },
  {
    id: "calendar-04",
    title: "Junta semanal de equipo",
  },
  {
    id: "calendar-05",
    title: "Revisón de pendientes con cliente",
  },
];
const emails = [
  {
    id: "email-01",
    title: "Reporte de resultados",
  },
  {
    id: "email-02",
    title: "Requisitos para cambio",
  },
  {
    id: "email-03",
    title: "Estatus de funcionalidad",
  },
  {
    id: "email-04",
    title: "Próximos eventos",
  },
  {
    id: "email-05",
    title: "Participa en la encuesta",
  },
]
function App() {
  const [data, setData] = useState([...people, ...calendar, ...emails]);

  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState("all");
  const [count, setCount] = useState(0)

  function handleClick(e) {
    const op = e.target.name;

    switch (op) {
      case "all":
        setData([...people, ...calendar, ...emails]);
        setCurrentOption("all");
        break;

      case "people":
        setData([...people]);
        setCurrentOption("people");
        break;

      case "calendar":
        setData([...calendar]);
        setCurrentOption("calendar");
        break;

      case "emails":
        setData([...emails]);
        setCurrentOption("emails");
        break;


      default:
    }
  }

  return (
    <div>
      <Button onClick={handleClick} name="all">
        All
      </Button>
      <Button onClick={handleClick} name="people">
        People
      </Button>
      <Button onClick={handleClick} name="calendar">
        Calendar
      </Button>
      <Button onClick={handleClick} name="emails">
        Emails
      </Button>

      <Button onClick={() => setCount(count + 1)}>{count}</Button>

      <SearchBar items={data} onItemSelected={() => { }} />
    </div>
  )
}

export default App
