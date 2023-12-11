/* Bonus:
Crea una React APP in cui l'utente inserisce i dati di un form, attraverso un componente CustomFormElement, che in base al props 'mode' 
("input", "select", "checkbox", "radio") ritorna il form element corrispondente (potete usare uno switch, come visto oggi a lezione).
Oltre al props 'mode', CustomFormElement deve avere anche i seguenti props: 
- label: un testo che rappresenta il valore dell'input (es. Your Name)
- value: il valore del form element
- onChange: la funzione che viene eseguita all'onChange dell'element, deve venire eseguita passando solo il value non l'intero evento
- id: un identificatore univoco per l'elemento (potete usarlo come key nel rendering di react, oppure per trovare l'elemento)
- options (usato solo nel caso di 'select' e 'radio'), rappresenta la lista di opzioni possibili
Quindi, crea uno state formData che contiene un array di oggetti, di cui ciascun oggetto rappresenta le caratteristiche uniche di un form element.
Esempio:
Infine, esegui un rendering di lista in cui per ogni oggetto di formData, rappresenti un CustomFormElement. */

import { useState } from "react";
import "./App.css";
import CustomFormElement from "./components/CustomFormElement";

function App() {
  const [formData, setFormData] = useState([
    {
      id: "user-name",
      label: "User Name",
      value: "",
      mode: "input",
    },
    {
      id: "password",
      label: "Password",
      value: "",
      mode: "input",
    },
    {
      id: "sex",
      label: "Seleziona il tuo sesso",
      value: "",
      mode: "select",
      options: ["Uomo", "Donna", "Bambino"],
    },
  ]);

  return (
    <>
      {formData.map((elem) => (
        <CustomFormElement
          label={elem.label}
          key={elem.id}
          options={elem.options}
          mode={elem.mode}
        />
      ))}
    </>
  );
}

export default App;
