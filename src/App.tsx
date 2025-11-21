// UserProfile은 name, age, isAdmin을 받는다
// 받는 props에 따라 화면에 다르게 출력되어야 한다. 사용자가 관리자라면 "관리자 계정", 사용자가 일반 사용자라면 "일반 사용자"라고 표시되어야 한다.
// App 컴포넌트에서 UserProfile컴포넌트를 두 번 렌더링해라. 한번은 관리자로, 한 번은 일반사용자로.

import UserProfile from "./components/UserProfile";

export default function App() {
  return (
    <>
      <h1>사용자 목록</h1>
      <UserProfile>
        {{
          name: "홍길동",
          age: 30,
          isAdmin: true,
        }}
      </UserProfile>

      <UserProfile>
        {{
          name: "홍길은",
          age: 25,
          isAdmin: false,
        }}
      </UserProfile>
    </>
  );
}
