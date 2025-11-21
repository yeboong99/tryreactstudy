// export default function Button(props: { text: string }) {
//   return (
//     <>
//       <button>{props.text}</button>
//     </>
//   );
// }

// 위 방법은 기존에 사용하던 속성으로 데이터를 받는 방식.

// 태그 내 컨텐츠를 데이터로써 받으려면 아래와 같이 작성한다.
// 컨텐츠가 있는 태그를 이용해 넘어오는 데이터를 children이라고 한다.
// children은 예약된 props 속성으로, 함수 내부에서 .children을 이용해 사용할 수 있다.

// export default function Button(props: { children: React.ReactNode }) {
//   return (
//     <>
//       <Button>{props.children}</Button>
//     </>
//   );
// }

// 이를 비구조화 할당을 이용한다면 아래와 같다.
export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <>
      <button>{children}</button>
    </>
  );
}

// 그런데, TS이기 때문에 타입 지정을 반드시 해줘야 하는데, children를 두 가지 종류의 타입으로 받을 수 있다.

// 1. React.ReactElement 타입
// 이 타입은 단순히 컨텐츠로 텍스트를 사용하는 경우 (예: <div>문자열</div>) 식으로 들어오는 컨텐츠는 받을 수가 없다.
// 몇 가지 불가능한 태그를 제외한 태그로 감싸진 것들만 넘겨 받을 수 있는 타입.

// 2. React.ReactNode 타입
// 이 타입은 ReactElement보다 더 넓은 범위의 데이터를 받을 수 있다. 범용적이다.
// 문자열이나 숫자, null, undefined를 포함해서 JSX요소들까지 전부 허용한다.
// 그래서 ReactNode타입으로 타입을 지정하면 범용적으로 활용이 가능하다. 실무에서는 ReactElement타입을 구분하여 사용하기는 한다.

// 따라서, 앞으로는 다음과 같은 두 가지 방식으로 크게 구분할 수 있다.

// 1. 부모 컴포넌트에서 전달하려는 JSX요소의 속성이 전달에 사용되는 경우
// 예를 들어 App 컴포넌트에서 <Button id="id" className="btn btn-primary"} /> 이런 식으로 전달 시
// -> Button 컴포넌트에서는
// function Button({ id, className } : { id: string; className: string}) {
//   return (
//     <button id={id} className={className}>버튼</button>
//   );
// }

// 2. 부모 컴포넌트에서 전달하려는 JSX요소의 컨텐츠가 전달에 사용되는 경우
// 예를 들어 App 컴포넌트에서 <Button><span>버튼</span></Button> 이런 식으로 전달 시
// -> Button 컴포넌트에서는
// function Button({ children } : {children: React.ReactNode }) {
//    return (
//     <>
//       <Button>{children}</Button>
//     </>
//   );
// }
