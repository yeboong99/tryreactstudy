type UserProfileProps = {
  name: string;
  age: number;
  isAdmin: true | false;
};

export default function UserProfile({ name, age, isAdmin }: UserProfileProps) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <p>이름: {name} </p>
      <p>나이: {age} </p>
      <p>권한 : {isAdmin ? "관리자 계정" : "일반 사용자"}</p>
    </div>
  );
}
