import React, { useEffect } from "react";
import * as S from "./styled";
import { useJson } from "../../contexts/JsonContext";
import { useNavigate } from "react-router-dom";
import formatJson from "../../utils";

const JsonViewer: React.FC = () => {
  const { json, fileName } = useJson();
  const navigate = useNavigate();

  useEffect(() => {
    if (!json || !fileName) {
      navigate("/");
    }
  }, [json, fileName, navigate]);

  const formattedJson = json ? formatJson(json) : null;

  return (
    <S.Container>
      {formattedJson && fileName && (
        <div>
          <S.Title>{fileName}</S.Title>
          <S.ContainerJson>
            <pre>{formattedJson}</pre>
          </S.ContainerJson>
        </div>
      )}
    </S.Container>
  );
};

export default JsonViewer;
