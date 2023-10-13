import styled, { css } from "styled-components";

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
`;

export const Json = styled.pre<jsonProps>`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 16px;
  font-weight: 400;
  line-height: 176.523%;

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
