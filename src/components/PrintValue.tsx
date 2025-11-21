{
  /* 

    자식 컴포넌트로 전달하는 데이터의 수가 많아져서 매개변수 부분에 작성하면 너무 지저분해질 경우
    매개변수 내부에 작성해주던 프록시객체의 타입 지정부를 인터페이스로 아예 분리해서 코드 가독성을 향상시킬 수 있다.

    또는 interface 말고 type에 담을 수도 있다.

    vite로 생성된 타입스크립트 기반 리액트 프로젝트라면 
    기본 타입스크립트 설정이 들어있는 tsconfig.app.json의 하단부에

    "include": ["src"] 라는 설정이 포함되어 있는데, 이 설정 때문에 별도의 d.ts확장자를 가진 파일에 타입 정의를 분리해버릴 수도 있다.
    src 바로 하위에 types라는 폴더를 생성하고 내부에 
    props.d.ts라는 이름의 파일을 만들고
    export 키워드 없이도 바로 참조해서 사용할 수 있다.

    정리하자면, 매개변수의 타입 지정을 아래 방법으로 할 수 있다.
    1. 매개변수에 직접 타입 지정
    2. 사용하는 컴포넌트 파일에서 interface 또는 type별칭을 이용해 분리
    3. d.ts확장자를 이용하는 파일을 src/type 하위에 생성해 별도의 export키워드 없이 가져와 사용. 
       단, 이 방법은 tsconfig.app.json파일에 "include":["src"] 옵션이 있어야 함. vite를 이용해 TS기반 React 프로젝트를 생성한 경우엔 해당 옵션이 자동으로 기입되어 있음.

    이처럼 다양한 방법으로 이용할 수 있지만 가장 중요한 건 함께 개발하는 팀 내에서 일관된 규칙을 정해서 이용하는 것
  */
}

// interface PrintValueProps {
//   numberValue: number;
//   stringValue: string;
//   booleanValue: boolean;
//   arrayValue: number[];
//   objectValue: { name: string; age: number };
//   handleClick: () => void;
// }

export default function PrintValue(props: PrintValueProps) {
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
