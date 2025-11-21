{
  /* 리액트는 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달해줄 수 있다.

    import문을 통해 자식 컴포넌트를 부모 컴포넌트에서 사용할 때
    부모 컴포넌트에서 속성(props; properties)을 이용해 데이터를 전달해줄 수 있다.

    아래 예시의 경우 name이라는 속성 값으로 문자열 "Jack"을, age라는 속성 값으로 숫자형 20을 전달해준다.
    만약 20을 중괄호{}가 아니라 큰/작은 따옴표""''로 전달하게 되면 문자열타입으로 전달되게 된다.

    이 때 props로 전달된 값은 자식 컴포넌트에서 매개변수로 받아 활용할 수 있다.
   */
}

import User from "./components/User";
export default function App() {
  return (
    <>
      <User name="Jack" age={20} />
      <User name="Mike" age={30} />
    </>
  );
}
