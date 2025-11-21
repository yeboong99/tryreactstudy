export default function User2({
  name,
  age,
  gender,
}: {
  name: string;
  age: number;
  gender: string;
}) {
  return (
    <>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>gender: {gender}</p>
    </>
  );
}

{
  /* 
  
  부모 컴포넌트가 보낸 데이터를 바로 이중 비구조화 방식을 이용해 받아줄 수 있다. 
  
  */
}
