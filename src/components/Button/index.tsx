import * as S from "./styled";

interface ButtonProps {
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
  children?: React.ReactNode;
}

function Button({ onChange, text }: ButtonProps) {
  return (
    <S.Container>
      <S.FileInput type="file" accept=".json" onChange={onChange} />
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}

export default Button;
