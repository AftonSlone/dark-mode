import React from "react";
import useLocalStorage from "./useLocalStorage";

export function useDarkMode(input) {
  const [dark, setDark] = useLocalStorage("dark", input);

  return [dark, setDark];
}
