import React, {useCallback, useState} from "react";
import Applayout from "../components/Applayout";
import Head from "next/head";
import { Checkbox, Form, Input, Button } from "antd";
import useInput from "../hooks/useInput";
import styled from "styled-components";


const ErrorMessage = styled.div`
color : red
`

const Signup = () => {
  const [id, onChangeId] =useInput("")
  const [nickname, onChangeNickname] =useInput("")
  const [password, onChangePassword] =useInput("")
  const [passwordCheck, setPasswordCheck] =useState("")
  const [passwordError, setPasswordError] =useState(false)


  const onChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value)
    setPasswordError(password !== e.target.value)
  }

  const [term, setTerm] = useState("")
  const [termError, setTermError] = useState(false)
  const onChangeTerm = useCallback((e)=>{
    setTerm(e.target.checked)
    setTermError(false)
  },[])

  const onSubmit = useCallback(()=>{
    if(password !==passwordCheck){
     return setPasswordError(true)
    }
    if(!term){
      return setTermError(true)
    }
  },[password, passwordCheck, term])





  return (
    <Applayout>
      <Head>
        <title>회원가입</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br/>
          <Input name="user-id" value={id} onChange={onChangeId}  required/>
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br/>
          <Input name="user-nick" value={nickname} onChange={onChangeNickname}  required/>
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br/>
          <Input name="user-password" value={password} onChange={onChangePassword}  required/>
        </div>
        <div>
          <label htmlFor="user-nick">비밀번호체크</label>
          <br/>
          <Input name="user-nick" value={passwordCheck} onChange={onChangePasswordCheck}  required/>
          {
            passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다</ErrorMessage>
          }
        </div>
        <div>
          <br/>
          <Checkbox name="user-tern" checked={term} onChange={onChangeTerm}  >
            동의합니다
          </Checkbox>
          {
            termError && <ErrorMessage style={{red : 'red'}}>약관에 동의 하여야 합니다.</ErrorMessage>
          }
        </div>
        <div style={{marginTop : 10}}>
          <Button type="primary" htmlType="submit">가입하기</Button>
        </div>
      </Form>
    </Applayout>
  )
};

export default Signup;
