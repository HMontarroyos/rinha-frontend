import * as S from "./styled";

interface ButtonProps {
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  text: string;
  children?: React.ReactNode;
}

function Button({ onChange, text, onKeyDown }: ButtonProps) {
  return (
    <S.Button onKeyDown={onKeyDown}>
      <S.Container>
        <S.FileInput type="file" accept=".json" onChange={onChange} id="file-input"/>
        <S.Text>{text}</S.Text>
      </S.Container>
    </S.Button>
  );
}

export default Button;
