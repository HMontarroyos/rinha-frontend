import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  height: 100vh;
  margin: 0;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.darkText};
`;

export const Subtitle = styled.p`
  margin-top: 24px;
  margin-bottom: 24px;
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.darkText};
  font-size: 24px;
  font-weight: 400;
`;

export const LinkExample = styled.a`
  margin-top: 24px;
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.accentText};
  font-weight: 600;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: ${(props) => darken(0.2, props.theme.colors.accentText)};
  }
`;

export const TextInvalid = styled.p`
  margin-top: 24px;
  color: ${(props) => props.theme.colors.invalid};
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 16px;
  font-weight: 400;
`;
