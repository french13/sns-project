import { Button, Form, Input } from "antd";
import Link from "next/link";
import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginAction } from "../store/slice";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
padding : 10px
`


const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

  // components에서 props로 넘기는 기능들은 useCallback을 써서 최적화 하기
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
      dispatch(loginAction({id, password}))
  }, [id, password]);


  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-id"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>

      <ButtonWrapper>
        <Button type="primary" htmlType="submit">
          로그인
        </Button>
        <Link href="/signup">
          <Button>회원가입</Button>
        </Link>
      </ButtonWrapper>
      <div></div>
    </FormWrapper>
  );
};

export default LoginForm;

// 객체는 새로 생길때마다 다른것으로 인식 되므로 스타일에 객체로 넣을시 리렌더링 된다.
// useMemo를 사용하여 최적화 할 수 도 있다.
