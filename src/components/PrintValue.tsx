{
  /* 

    자식 컴포넌트로 값을 전달할 때 이전 예제처럼 props라는 이름으로 객체를 받는 걸 명시적으로 해도 되지만
    비구조화 방식으로 받을 수도 있다. 

    예시 1. props를 직접 표기하지 않고 아래와 같이 받는 속성이름들을 나열한 다음 중괄호를 한 번 닫은 후에 
    속성들의 타입을 다시 중괄호를 열어서 지정하여 바로 함수 내부에서는 바로 사용할 수 있는 형태를 만들거나 

    예시 2. 매개변수 쪽의 코드가 너무 길어지는걸 원하지 않는다면 함수 내부에서 비구조화 할당을 할 수 있도록 props를 함수 내부에서 객체변수를 재정의하는 방법도 있다.

    매개변수 쪽에서 props를 이용하지 않는 비구조화 할당을 하든, 
    함수 내부에서 props를 이용하지 않는 비구조화 할당을 하든, 
    처음 배운 방식처럼 비구조화 할당을 하지 않고 전부 명시적으로 작성하든 상황에 맞게 선택해서 알잘딱 하자.
    
  */
}

// 예시 1.
// export default function PrintValue({
//   numberValue,
//   stringValue,
//   booleanValue,
//   arrayValue,
//   objectValue,
//   handleClick,
// }: {
//   numberValue: number;
//   stringValue: string;
//   booleanValue: boolean;
//   arrayValue: number[];
//   objectValue: { name: string; age: number };
//   handleClick: () => void;
// }) {
//   return (
//     <>
//       <p>number: {numberValue} </p>
//       <p>string: {stringValue} </p>

//       {/* 렌더링할 때에는 이전 출력하기 공부할 때와 마찬가지로 toString(), String(), JSON.stringify()등을 활용한다. */}
//       <p>boolean: {booleanValue.toString()} </p>
//       <p>array: {arrayValue} </p>
//       <p>object: {JSON.stringify(objectValue)} </p>
//       <p>function: {handleClick.toString()} </p>
//     </>
//   );
// }

// 예시 2.
export default function PrintValue(props: {
  numberValue: number;
  stringValue: string;
  booleanValue: true | false;
  arrayValue: number[];
  objectValue: { name: string; age: number };
  handleClick: () => void;
}) {
  const {
    numberValue,
    stringValue,
    booleanValue,
    arrayValue,
    objectValue,
    handleClick,
  } = props;

  return (
    <>
      <p>number: {numberValue} </p>
      <p>string: {stringValue} </p>
      <p>boolean: {booleanValue.toString()} </p>
      <p>array: {arrayValue} </p>
      <p>object: {JSON.stringify(objectValue)} </p>
      <p>function: {handleClick.toString()} </p>
    </>
  );
}
