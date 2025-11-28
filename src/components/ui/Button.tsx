{
  /** 이벤트 핸들러 추천 사용법
   *
   * 이벤트 핸들러를 정의하고, 이를 이벤트 props로 전달할 때 함수로 감싸야 한다고 알고 있다.
   *
   * 이 점을 활용해 아래와 같은 방법들이 있다.
   * 1. 이벤트 속성 부분에 () =>로 감싸 바로 함수 내용 작성하기 (22라인)
   * 2. 정의해둔 함수의 매개변수가 void인 경우에는 감싸지 않고 호출 가능 (23라인)
   * 3. 단, 정의해둔 함수를 다시 () => 함수로 감싸면 ()를 붙여야 함. 만약 안붙이면 함수를 감싼 새로운 함수만 전달하는 거라 새로운 함수 내부에 들어있는 함수를 '실행한다'는 의미로 ()를 붙여줘야 함 (24라인)
   *
   * 가능한 한 핸들러 함수를 별도로 정의하고, 매개변수가 없다면 2번 방법을, 매개변수가 있다면 3번 방법을 활용하는 것을 추천
   *
   */
}

export default function Button() {
  const handleClick = (value: string) => alert(value);
  const handleClick2 = () => alert("Hello");

  return (
    <>
      <button onClick={() => alert("Hello")}>클릭</button>
      <button onClick={handleClick2}>클릭2</button>
      <button onClick={() => handleClick2()}>클릭2</button>

      <button onClick={() => handleClick("world!")}>활용</button>
    </>
  );
}
