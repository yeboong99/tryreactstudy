{
  /** 이벤트 핸들러에 매개변수로 데이터 전달하기
  
  이벤트 핸들러의 매개변수에 타입을 지정하고,
  호출할 때 주의해야 할 점이 있다.
  
  아래의 경우에서 버튼 태그 내 속성으로 이벤트 종류를 결정한 후, 실행할 메서드를 전달할 때
  
  <button onClick={handleClick("Hello")}>클릭</button>

  이런 식으로 작성하게 되면 이 handleClick은 클릭했을 때의 핸들러로써 작동하는 게 아니라 호출용으로 사용되기에 이 태그가 랜더링되는 동시에 함수가 실행되어버린다.
  의도와 다르게 실행되는데, 이걸 방지하기 위해 매개변수를 전달하고 이용하고 싶다면 함수로 감싸진 형태를 이용해야 한다.

  
  
  */
}

export default function Button() {
  const handleClick = (value: string) => alert(value);

  return (
    <>
      <button onClick={() => handleClick("Hello")}>클릭</button>
    </>
  );
}
