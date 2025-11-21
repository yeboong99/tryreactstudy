type UserProfileProps = {
  name: string;
  age: number;
  isAdmin: boolean;
};

export default function UserProfile({
  children,
}: {
  children: UserProfileProps;
}) {
  const { name, age, isAdmin } = children;

  return (
    <>
      <div
        style={{ border: "1px solid black", padding: "10px", margin: "10px" }}
      >
        <p>이름: {name} </p>
        <p>나이: {age} </p>
        <p>{isAdmin ? "관리자 계정" : "일반 사용자"} </p>
      </div>
    </>
  );
}
