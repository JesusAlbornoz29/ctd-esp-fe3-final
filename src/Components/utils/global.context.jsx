import { createContext, useContext, useState, useEffect } from "react";

// Define el contexto global
export const GlobalContext = createContext();

export const themes = {
  light: {
    font: "black",
    background: "white",
  },
  dark: {
    font: "white",
    background: "black",
  },
};

// Define el proveedor del contexto global
export function GlobalProvider({ children }) {
  const [theme, setTheme] = useState("light"); // Tema inicial
  const [apiData, setApiData] = useState([]); // Almacena los datos de la API

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === themes.light ? themes.dark : themes.light));
  };

  // Función para obtener datos de la API
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };

  // Cargar datos de la API al montar el componente
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ theme, toggleTheme, apiData }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
