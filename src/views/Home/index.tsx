import React, { useState } from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { useJson } from "../../contexts/JsonContext";

const Home: React.FC = () => {
  const { setJsonData } = useJson();
  const [isFileValid, setIsFileValid] = useState(true);
  const navigate = useNavigate();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0];
    if (file) {
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
        }
      };

      reader.readAsText(file);
    } else {
      setIsFileValid(false);
    }
  };
  return (
    <S.Container>
      <S.Title>JSON Tree Viewer</S.Title>
      <S.Subtitle>
        Simple JSON Viewer that runs completely on-client. No data exchange{" "}
      </S.Subtitle>
      <Button disabled={false} onChange={handleFileUpload} text={"Load JSON"} />
      {!isFileValid && (
        <S.TextInvalid>
          Invalid file. Please load a valid JSON file.
        </S.TextInvalid>
      )}
    </S.Container>
  );
};

export default Home;
