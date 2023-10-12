import React, { createContext, useState, useContext, ReactNode } from "react";

interface JsonContextProps {
  json: string | null;
  fileName: string;
  setJsonData: (data: string, name: string) => void;
}

const JsonContext = createContext<JsonContextProps | undefined>(undefined);

interface JsonProviderProps {
  children: ReactNode;
}

export const JsonProvider: React.FC<JsonProviderProps> = ({ children }) => {
  const [json, setJson] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");

  const setJsonData = (data: string, name: string) => {
    setJson(data);
    setFileName(name);
  };

  return (
    <JsonContext.Provider value={{ json, fileName, setJsonData }}>
      {children}
    </JsonContext.Provider>
  );
};

export const useJson = () => {
  const context = useContext(JsonContext);
  if (!context) {
    throw new Error("useJson must be used within a JsonProvider");
  }
  return context;
};
