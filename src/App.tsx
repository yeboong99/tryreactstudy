{
  /**
  
  부모 컴포넌트에서 전달한 데이터를 props로 받아 함께 전달받은 함수 매개변수로 활용해주는 컴포넌트로 자식 컴포넌트를 작성할 경우


  
  
  */
}

import Button from "./components/ui/Button";

export default function App() {
  return (
    <>
      <Button
        handleClick={(message: string) => alert(message)}
        message="영화를 재생합니다."
      >
        Play Movie
      </Button>
      <Button
        handleClick={(message: string) => alert(message)}
        message="업로드합니다."
      >
        Upload!
      </Button>
    </>
  );
}
