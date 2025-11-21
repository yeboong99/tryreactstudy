import PrintValue from "./components/PrintValue";

export default function App() {
  const numberValue = 42;
  const stringValue = "Hello World";
  const booleanValue = true;
  const arrayValue = [1, 2, 3, 4];
  const objectValue = { name: "John Doe", age: 30 };
  const handleClick = () => alert("버튼이 클릭되었습니다.");

  return (
    <>
      {/* 속성 식별자(이름)와 전달하려는 값을 담은 변수의 이름이 같도로 하는 게 가독성 좋음 */}

      <PrintValue
        numberValue={numberValue}
        stringValue={stringValue}
        booleanValue={booleanValue}
        arrayValue={arrayValue}
        objectValue={objectValue}
        handleClick={handleClick}
      />
    </>
  );
}
