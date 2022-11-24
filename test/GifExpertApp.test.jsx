import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
  test("debe cambiar el valor de la caja de texto", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "Kilua" } });

    expect(input.value).toBe("Kilua");
  });
  test("debe retorna el mismo arreglo sin cambios si la categoria existe", () => {
    render(<GifExpertApp />);
    const category = "Hunter x Hunter";
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: category } });
    fireEvent.submit(form);

    expect(screen.getAllByText(category).length).toBe(1); //verifica mediante un arreglo las veces que aparece esa categoria
    screen.debug();
  });
});
