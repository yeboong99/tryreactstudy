export default function Button() {
  const handleClick = () => alert("클릭 이벤트 발생");
  const handleDoubleClick = () => alert("더블 클릭 이벤트 발생");

  return (
    <>
      <button onClick={handleClick}>클릭</button>
      <button onDoubleClick={handleDoubleClick}>더블 클릭</button>
    </>
  );
}
