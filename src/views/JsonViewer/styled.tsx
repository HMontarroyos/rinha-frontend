import styled from "styled-components";

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
