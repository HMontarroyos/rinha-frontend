import React, { useEffect } from "react";
import * as S from "./styled";
import { useJson } from "../../contexts/JsonContext";
import { useNavigate } from "react-router-dom";
import { formatJson } from "../../utils";

const JsonViewer: React.FC = () => {
  const { json, fileName } = useJson();
  const navigate = useNavigate();

  useEffect(() => {
    if (!json || !fileName) {
      navigate("/");
    }
  }, [json, fileName, navigate]);

  const formattedJson = json ? formatJson(json) : null;

  const renderFormattedJson = () => {
    if (!formattedJson) return null;

    return formattedJson.split("\n").map((line, index) => {
      const isKey = index % 2 === 0;
      const isString = line.includes(': "');
      const hasSquareBrackets = line.includes("[") || line.includes("]");

      return (
        <div key={index}>
          <S.Json
            className={isKey ? "key" : "value"}
            hasSquareBrackets={hasSquareBrackets}
          >
            {isString
              ? line.replace(
                  /"([^"]+)": "(.*?)"/g,
                  '"$1": <span style="color:black">"$2"</span>'
                )
              : line}
          </S.Json>
        </div>
      );
    });
  };

  return (
    <S.Container>
      {formattedJson && fileName && (
        <div>
          <S.Title>{fileName}</S.Title>
          <S.ContainerJson>{renderFormattedJson()}</S.ContainerJson>
        </div>
      )}
    </S.Container>
  );
};

export default JsonViewer;
