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
  const referenceArray = [1, 2, 3, 4, 5];
  const referenceObject = { name: "Jhon", age: 30 };
  const referenceFunction = () => "함수의 리턴 값";
  const referenceDate = new Date();

  {
    /* 정규식 */
  }
  const referenceRegExp = /react/i;

  const referenceMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
  ]);
  const referenceSet = new Set([1, 2, 3, 4]);

  return (
    <>
      <h2>참조 자료형 출력</h2>
      <p>배열: {referenceArray} </p>

      {/* 객체를 바로 렌더링하려고 하면 리액트에서 에러를 냄. JSON 문자열 형태로 바꾸면 렌더링 가능 */}
      <p>객체: {JSON.stringify(referenceObject)} </p>

      {/* 함수는 래퍼 객체가 존재하기 때문에 toString()으로 렌더링 시킬 수 있음 */}
      <p>함수: {referenceFunction.toString()} </p>

      {/* Date도 래퍼 객체가 존재해서 toString() */}
      <p>Date: {referenceDate.toString()} </p>

      {/* 정규식도 마찬가지. toString()으로 렌더링 가능 */}
      <p>정규식: {referenceRegExp.toString()} </p>

      {/* 맵의 경우 그냥 referenceMap자체만 렌더링하면 보이긴 하지만 리액트 에러가 발생하고 요소 내용이 한번에 쭉 나열되어서 출력됨.
      그래서  Array내장객체의 from()메서드를 이용해 배열로 변환하고, 예쁘게 보기 위해 JSON문자열로 한번 더 변환한 후에 렌더링 */}
      <p>Map: {JSON.stringify(Array.from(referenceMap))} </p>

      {/* 셋도 마찬가지 */}
      <p>Set: {JSON.stringify(Array.from(referenceSet))} </p>
    </>
  );
}
