import React, { useEffect, useState, useRef } from "react";
import * as S from "./styled";
import { useJson } from "../../contexts/JsonContext";
import { useNavigate } from "react-router-dom";
import { formatJson } from "../../utils";

const JsonViewer: React.FC = () => {
  const { json, fileName, nextPage, prevPage, currentPage, totalPages } = useJson();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!json || !fileName) {
      navigate("/");
    }
  }, [json, fileName, navigate]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  const formattedJson = json ? formatJson(json) : null;

  return (
    <S.Container>
      {formattedJson && fileName && (
        <>
          <S.Title ref={containerRef}>{fileName}</S.Title>
          <S.ContainerJson>
            {formattedJson.split("\n").map((line, index) => {
              const isKey = index % 2 === 0;
              const isString = line.includes(': "');
              const hasSquareBrackets =
                line.includes("[") || line.includes("]");

              return (
                <div key={index}>
                  <S.Json
                    className={isKey ? "key" : "value"}
                    hasSquareBrackets={hasSquareBrackets}
                  >
                    {isString
                      ? line.replace(/"([^"]+)": "(.*?)"/g, '"$1": "$2"')
                      : line}
                  </S.Json>
                </div>
              );
            })}
          </S.ContainerJson>
          <S.ContainerButton>
            {currentPage !== 1 && (
              <S.ButtonPagination onClick={prevPage}>
                Previous Page
              </S.ButtonPagination>
            )}
            {totalPages > 1 && currentPage !== totalPages && (
              <S.ButtonPagination onClick={nextPage}>
                Next Page
              </S.ButtonPagination>
            )}
          </S.ContainerButton>
        </>
      )}
    </S.Container>
  );
};

export default JsonViewer;
