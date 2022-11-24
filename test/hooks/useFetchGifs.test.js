import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("pruebas en el hook de useFetchGifs", () => {
  test("debe regresar el estado inicial ", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    const { images, loading } = result.current;

    // console.log(result);

    expect(images.length).toBe(0);
    expect(loading).toBeTruthy();
  });
  test("debe retornar un arreglo de imagenes y el loading en false ", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, loading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(loading).toBeFalsy();
  });
});
