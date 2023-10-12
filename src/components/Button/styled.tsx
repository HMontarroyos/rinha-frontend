import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.label`
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.darkText};
  opacity: 0.7;
  background-color: ${(props) => props.theme.colors.button};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => darken(0.2, props.theme.colors.button)};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.darkText};
  font-size: 16px;
  font-weight: 500;
`;

export const FileInput = styled.input`
  display: none;
`;
