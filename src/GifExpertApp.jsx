import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([ "Hunter x Hunter" ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return; //Si la categoria existe retorna el mismo arreglo sin cambios
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <div>GifExpertApp</div>

      {/* Input */}
      <AddCategory
        // setCategories={setCategories} //manda el setState directamente
        onNewCategory={onAddCategory} //manda la función que setea el arreglo
      />
      {/* Listado de Gif */}
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
    </>
  );
};
