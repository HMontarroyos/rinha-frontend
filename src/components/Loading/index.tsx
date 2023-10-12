import * as S from "./styled";
import Lottie from "react-lottie";
import { LoadingAnimation } from "../../assets/lotties";

function Loading(): JSX.Element {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <S.Container>
      <Lottie options={defaultOptions} height={"40%"} width={"80%"} />
    </S.Container>
  );
}

export default Loading;
