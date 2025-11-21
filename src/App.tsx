import User from "./components/User";
import User2 from "./components/User2";

export default function App() {
  const userObj = {
    name: "Jack",
    age: 20,
    gender: "male",
  };

  return (
    <>
      <User userObj={userObj} />
      <User2 {...userObj} />
      <User2 name={userObj.name} age={userObj.age} gender={userObj.gender} />
    </>
  );
}

{
  /* 14라인에 전개 연산자 (...)를 이용해서 15라인과 똑같은 형태의 데이터 전달을 할 수 있다.
  전개 연산자는 스프레드 연산자라고도 불린다. */
}
