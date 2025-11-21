{
  /* 
  리액트에서는 JSX의 함수 형태로 작성된 코드가 구성되어 있다. 이런 코드가 작성된 파일을 컴포넌트라고 한다.
 
  컴포넌트 : React.JS 에서 UI를 구성하는 가장 작은 단위
  이 컴포넌트를 조합하여 하나의 완성된 UI를 만들어간다.

  스니펫 rfc를 입력해서 나오는 아래 코드
  export default function App() {
  return (
    <>
      <h1>App Component1</h1>
    </>
  );
}
  함수의 형태로 작성된 컴포넌트를 '함수형 컴포넌트'라고 한다.

  rcc를 입력해서 나오는 코드
  
  import React, { Component } from 'react'

  export default class App extends Component {
    render() {
      return (
        <div>
          
        </div>
      )
    }
  }
  이렇게 클래스 형태로 생긴 컴포넌트를 '클래스 컴포넌트'라고 이야기한다.

  클래스 컴포넌트는 함수형 컴포넌트와는 다르게 render()라는 메서드를 사용해서 JSX 요소를 반환해야 하며, React의 Component클래스를 상속해야 한다.
  클래스 컴포넌트는 문법이 복잡하고 가독성이 떨어지는 단점이 있어 잘 사용하지 않게 되었다.

  */
}

{
  /* 
  
  함수형 컴포넌트의 조건
  1. 함수로 작성되어야 함
  2. return문으로 JSX요소 또는 null을 반환해야 함 (undefined도 안된다)
  
  */
}

export default function App() {
  const primitiveString = "Hello World!";
  const primitiveBoolean = false;
  const primitiveUndefined = undefined;
  const primitiveNull = null;
  const primitiveSymbol = Symbol("mySymbol");
  const primitiveBigInt = 9007199254740991n;

  console.log("hello");
  return (
    <>
      <h2>기본 자료형 출력</h2>
      <p>문자열: {primitiveString} </p>
      <p>숫자: {primitiveBigInt} </p>
      {/* 논리형 값은 렌더링 가능한 값으로 취급하지 않아서 문자열로 변경해서 출력해줘야 함. */}
      <p>논리형: {primitiveBoolean.toString()} </p>
      {/* undefined, null, symbol도 마찬가지이지만 toString()은 지원되지 않음. 대신 JS 내장함수인 String()사용. */}
      <p>undefined: {String(primitiveUndefined)} </p>
      <p>null: {String(primitiveNull)} </p>
      <p>symbol: {String(primitiveSymbol)} </p>
    </>
  );
}
