import React, { useState } from "react";

const data = [
  { name: "John", age: 25, gender: "Male" },
  { name: "Jane", age: 32, gender: "Female" },
  { name: "Bob", age: 41, gender: "Male" },
  { name: "Alice", age: 19, gender: "Female" },
];

export const SearchFilter22 = () =>{
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const filters = [
    { label: "Name", value: name, onChange: setName },
    { label: "Age", value: age, onChange: setAge },
    { label: "Gender", value: gender, onChange: setGender },
  ];

  const filteredData = data.filter((item) => {
    return filters.every((filter) => {
      const { value } = filter;
      return (
        item[filter.label.toLowerCase()].toString().includes(value) ||
        value === ""
      );
    });
  });

  return (
    <div>
      {filters.map((filter) => (
        <div key={filter.label}>
          <input
            type="text"
            placeholder={filter.label}
            value={filter.value}
            onChange={filter.onChange}
          />
        </div>
      ))}
      <div>
        {filteredData.map((item) => (
          <div key={item.name}>
            <p>{item.name}</p>
            <p>{item.age}</p>
            <p>{item.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
;

/*

En este ejemplo, se define un arreglo filters que contiene objetos con la información 
necesaria para crear los inputs de búsqueda: una etiqueta para el nombre, el valor del input 
y la función para actualizar el estado correspondiente.
 Luego, se utiliza la función every en el arreglo filters para determinar si cada filtro se
  cumple para cada elemento del arreglo data. 
  Además, se utiliza la etiqueta de cada filtro para acceder a la propiedad correspondiente 
  en cada elemento de data. 
  Finalmente, se muestra una lista de los elementos filtrados y se crea dinámicamente 
  cada input de búsqueda a partir de los objetos en el arreglo filters.
*/



