{
  /* 

    props 객체 내부 멤버들의 타입을 쉽게 적어줄 수 있는 방법이 있다.
    자식 컴포넌트의 매개변수 부분에서 타입을 지정해주지 않은 상태에서 부모 컴포넌트의 첫 번째 전달데이터의 빨간밑줄 에러메시지를 보면
    중괄호로 감싸져있는 미지정 타입들에 대한 설명이 나오는데

    이걸 props:만 써준 뒷부분에 컨씨컨브이 해버리면 쉽게 써버릴 수 있다 ㅋㅋ
    물론 이해를 한 상태에서 써야 되겠다!
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
