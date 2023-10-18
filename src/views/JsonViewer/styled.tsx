import styled, { css } from "styled-components";
import { darken } from "polished";

interface jsonProps {
  hasSquareBrackets: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin-top: 24px;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.darkText};
  font-size: 32px;
  font-weight: 700;
  text-align: left;
`;

export const ContainerJson = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  flex-direction: column;
  max-width: 100%; 
  flex-wrap: wrap;
`;

export const Json = styled.pre<jsonProps>`
  text-align: left;
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 16px;
  font-weight: 400;
  line-height: 176.523%;
  white-space: pre-wrap; 

  &.key {
    color: ${(props) => props.theme.colors.accentText};
  }

  &.value {
    color: ${(props) => props.theme.colors.darkText};
  }

  ${(props) =>
    props.hasSquareBrackets &&
    css`
      color: ${(props) => props.theme.colors.brackets}!important;
      font-weight: 700;
    `}
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const ButtonPagination = styled.button`
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.darkText};
  background-color: ${(props) => props.theme.colors.button};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => darken(0.2, props.theme.colors.button)};
  }
`;
