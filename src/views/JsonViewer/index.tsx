import React, { useEffect, useState, useRef } from "react";
import * as S from "./styled";
import { useJson } from "../../contexts/JsonContext";
import { useNavigate } from "react-router-dom";
import { formatJson, handleKeyDown } from "../../utils";



const JsonViewer: React.FC = () => {
  const { json, fileName, nextPage, prevPage, currentPage, totalPages } =
    useJson();
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

      containerRef.current.focus();
    }
  }, [currentPage]);

  const formattedJson = json ? formatJson(json) : null;
  

  const handlePrevPageKeyDown = handleKeyDown(prevPage);
  const handleNextPageKeyDown = handleKeyDown(nextPage);

  return (
    <S.Container aria-label="JSON Viewer" tabIndex={-1}>
      {formattedJson && fileName && (
        <>
          <S.ContainerJson ref={containerRef} aria-live="polite">
            <S.Title>{fileName}</S.Title>


            {formattedJson.split(formattedJson.includes("\n") ? "\n" : ",").map((line, index) => {
              const isKey = index % 2 === 0;
              const isString = line.includes(': "');
              const hasSquareBrackets =
                line.includes(": [") || line.includes("]");

              return (
                <S.Json
                  className={"key"}/* {isKey ? "key" : "value"} */
                  hasSquareBrackets={false}
                  key={index}
                >
                  {line}
                  {/*                   {isString
                    ? line.replace(/"([^"]+)": "(.*?)"/g, '"$1": "$2"')
                    : line} */}
                </S.Json>
              );
            })}
          </S.ContainerJson>
          <S.ContainerButton>
            {currentPage !== 1 && (
              <S.ButtonPagination
                onClick={prevPage}
                aria-label="Previous Page"
                onKeyDown={handlePrevPageKeyDown}
              >
                Previous Page
              </S.ButtonPagination>
            )}
            {totalPages > 1 && currentPage !== totalPages && (
              <S.ButtonPagination
                onClick={nextPage}
                aria-label="Next Page"
                onKeyDown={handleNextPageKeyDown}
              >
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
