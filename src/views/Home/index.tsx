import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import { Button, Loading } from "../../components";
import { useJson } from "../../contexts/JsonContext";
import { linkJsonExample } from "../../global/const";

const Home: React.FC = () => {
  const { setJsonData } = useJson();
  const [isFileValid, setIsFileValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDownEvent = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        const input = document.getElementById("file-input") as HTMLInputElement;
        input?.click();
      }
    };

    return () => {
      document.removeEventListener("keydown", handleKeyDownEvent);
    };
  }, []);

  const handleKeyDownForUpload = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const input = document.getElementById("file-input") as HTMLInputElement;
      input?.click();
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0];
    if (file) {
      setIsLoading(true);

      const reader = new FileReader();

      reader.onload = (e) => {
        const content = e.target?.result as string;
        try {
          JSON.parse(content);
          setJsonData(content, file.name);
          setIsFileValid(true);
          navigate("json");
        } catch (error) {
          setIsFileValid(false);
          console.log("Invalid JSON file. Error:", error);
        } finally {
          setIsLoading(false);
        }
      };

      reader.readAsText(file);
    } else {
      setIsFileValid(false);
    }
  };

  return (
    <S.Container>
      <S.Title aria-label="JSON Tree Viewer">JSON Tree Viewer</S.Title>
      <S.Subtitle>
        Simple JSON Viewer that runs completely on-client. No data exchange{" "}
      </S.Subtitle>
      <Button
        disabled={false}
        onChange={handleFileUpload}
        onKeyDown={handleKeyDownForUpload}
        text={"Load JSON"}
        aria-label="Upload JSON file"
      />
      <S.LinkExample href={linkJsonExample} target="_blank" aria-label="Json Examples Files Link">Json Examples Files</S.LinkExample>
      {isLoading && <Loading/>}
      {!isFileValid && (
        <S.TextInvalid aria-label="Invalid file.">
          Invalid file. Please load a valid JSON file.
        </S.TextInvalid>
      )}
    </S.Container>
  );
};

export default Home;
