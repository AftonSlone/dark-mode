import React from "react";
import useLocalStorage from "./useLocalStorage";

export default function useDarkMode() {
  const [someValue, setSomeValue] = useLocalStorage(key);

  return [value, setter];
}
