{
  /* 부모 컴포넌트가 props로 전달해준 데이터를 받으려면
  
  함수형 컴포넌트의 매개변수로 받을 타입을 지정하여 둔 다음 이 값을 함수 내부에서 사용하면 된다.

  관례상 매개변수의 이름을 props로 한다.

  부모 컴포넌트로부터의 데이터들은 객체 형태로 전달된다.
  전달하려는 속성값이 한 가지이던 여러가지 이던 상관 없이 객체로 전달된다.
  
  TS 기반 리액트에서는 이러한 매개변수의 타입을 올바르게 지정해줘야 타입에러가 발생하지 않으므로 타입을 꼭 지정해주자.

  props 내의 속성이름들을 이용해 타입을 지정해줄 수 있다.

  props 뒤에 콜론:을 붙여주고 객체 형태로 타입을 나열한다.

  */
}

export default function User(props: { name: string; age: number }) {
  console.log(props);

  return (
    <>
      <div>
        <p>name: {props.name} </p>
        <p>age: {props.age} </p>
      </div>
    </>
  );
}
