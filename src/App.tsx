{
  /**
  
  이벤트핸들러 메서드 자체를 props로 전달해버리는 방법도 있다.


  
  
  */
}

import Button from "./components/ui/Button";

export default function App() {
  return (
    <>
      <Button handleClick={(message: string) => alert(message)}>
        Play Movie
      </Button>
      <Button handleClick={(message: string) => alert(message)}>Upload!</Button>
    </>
  );
}
