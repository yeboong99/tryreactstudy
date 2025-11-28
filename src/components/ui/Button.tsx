import type React from "react";

{
  /** 
   
  props, children을 동시에 이용해보자.
  
  이벤트 핸들러에서 props를 읽어 사용하고,
  내부에서 사용되는 버튼 태그의 컨텐츠를 전달받은 children을 사용한다. (사실 전달받은 컨텐츠 내용을 그대로 사용하도록 하는 거라 변화가 안보임)
  
  버튼은 사실 처음 렌더링될 때 컨텐츠를 가진 상태로 렌더링해야 하는 것이 일반적이므로, 컨텐츠를 작성하되, 둘 다 자식 컴포넌트에서 동시에 활용할 수 있다는 걸 알았다는 거에 만족하자.
  
  
  
*/
}

export default function Button({
  message,
  children,
}: {
  message: string;
  children: React.ReactNode;
}) {
  const handleClick = () => alert(message);

  return (
    <>
      <button onClick={handleClick}> {children} </button>
    </>
  );
}
