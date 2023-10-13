import React, { createContext, useState, useContext, ReactNode } from "react";

interface JsonContextProps {
  json: string | null;
  fileName: string;
  setJsonData: (data: string, name: string) => void;
  nextPage: () => void;
  prevPage: () => void;
  currentPage: number;
  pageSize: number;
  totalPages: number;
}

const JsonContext = createContext<JsonContextProps | undefined>(undefined);

interface JsonProviderProps {
  children: ReactNode;
}

export const JsonProvider: React.FC<JsonProviderProps> = ({ children }) => {
  const [json, setJson] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(1000);

  const setJsonData = (data: string, name: string) => {
    setJson(data);
    setFileName(name);
    setCurrentPage(1);
  };

  const getJsonPage = () => {
    if (
      json &&
      typeof currentPage === "number" &&
      typeof pageSize === "number"
    ) {
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = Math.min(startIndex + pageSize, json.length);
      return json.slice(startIndex, endIndex);
    }
    return null;
  };

  const totalPages = Math.ceil((json?.length || 0) / pageSize);

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <JsonContext.Provider
      value={{
        json: getJsonPage(),
        fileName,
        setJsonData,
        nextPage,
        prevPage,
        currentPage,
        pageSize,
        totalPages,
      }}
    >
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
