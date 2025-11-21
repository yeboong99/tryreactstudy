{
  /* 매개변수로 속성값을 받을 때 

  boolean의 경우 boolean 대신 true|false 를 입력해도 된다
  객체의 경우 구성원 별로 타입을 알려주면 된다
  함수의 경우 속성이름에 대해(:) 매개변수와 출력의 타입을 알려주면 된다
  이 예제에서는 함수의 내용을 string으로 바꿔 출력했는데, 더 자세한 활용법은 뒤에서 공부
  */
}

export default function PrintValue(props: {
  numberValue: number;
  stringValue: string;
  booleanValue: boolean;
  arrayValue: number[];
  objectValue: { name: string; age: number };
  handleClick: () => void;
}) {
  console.log(props);
  return (
    <>
      <p>number: {props.numberValue} </p>
      <p>string: {props.stringValue} </p>

      {/* 렌더링할 때에는 이전 출력하기 공부할 때와 마찬가지로 toString(), String(), JSON.stringify()등을 활용한다. */}
      <p>boolean: {props.booleanValue.toString()} </p>
      <p>array: {props.arrayValue} </p>
      <p>object: {JSON.stringify(props.objectValue)} </p>
      <p>function: {props.handleClick.toString()} </p>
    </>
  );
}
