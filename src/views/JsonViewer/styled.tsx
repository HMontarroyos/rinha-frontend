import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

interface jsonProps {
  hasSquareBrackets: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  min-height: 100vh;
  padding: 0 10vw;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

export const Icon = styled.button`
  font-size: 32px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.darkText};

  &:hover {
    cursor: pointer;
    color: ${(props) => lighten(0.2, props.theme.colors.darkText)};
  }
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.darkText};
  font-weight: 700;
  font-size: 32px;
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
