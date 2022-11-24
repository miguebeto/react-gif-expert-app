import { GifItem } from "../../src/components/GifItem";
import { render, screen } from "@testing-library/react";

describe("Pruebas en componente GifItem.jsx", () => {
  const title = "kilua";
  const url = "https://hunterxhunter.com/kilua.jpg";
  test("debe hacer match con el snapshop", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  test("debe mostrar la imagen con el url y el alt indicado", () => {
    render(<GifItem title={title} url={url} />);
    // expect(screen.getByRole('img').src).toBe( url );
    // expect(screen.getByRole('img').alt).toBe( title );

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  test("debe mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
    screen.debug();
  });
});
