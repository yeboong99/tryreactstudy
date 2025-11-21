// 중첩 비구조화 할당하기
// 객체 내의 멤버까지도 비구조화할당하여 사용하는 함수 내부에서 props.userObj. 까지 생략 가능

export default function User({
  userObj: { name, age, gender },
}: {
  userObj: { name: string; age: number; gender: string };
}) {
  return (
    <>
      <p>name: {name} </p>
      <p>age: {age} </p>
      <p>gender: {gender} </p>
    </>
  );
}
