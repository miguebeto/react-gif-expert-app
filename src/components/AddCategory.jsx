import React, { useState } from "react";

export const AddCategory = ({ setCategories, onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputCahnge = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() <= 1) return; //evita que se inserten elementos vacios o de una letra al arreglo
    // setCategories((cat) => [...cat, inputValue]); //llama a la funcion que setea el estado en el componente padre
    onNewCategory( inputValue.trim() ); //llama la funcion que agrega el valor al arreglo en el componente padre
    setInputValue(" "); //borra los datos del input luego de agregarlos
  };

  return (
    <form onSubmit={onSubmit} action="">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputCahnge}
      />
    </form>
  );
};
