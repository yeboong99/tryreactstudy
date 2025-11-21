{
  /**
  children으로 데이터 전달하기

  자식 컴포넌트에게 속성 말고 태그 내 컨텐츠를 이용해 데이터를 전달할 수 있다.
  HTML의 셀프클로징 태그가 아닌, 컨텐츠를 담아서 보낼 때 데이터를 받을 수 있도록 만들어둔 타입을 children이라고 한다.


  */
}

{
  /* <Button text="Login" />
      <Button text="Logout" /> */
}

import Button from "./components/ui/Button.tsx";

export default function App() {
  return (
    <>
      <Button>Login</Button>
      <Button>
        <p>abc</p>
      </Button>
    </>
  );
}
