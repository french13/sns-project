import React, { useMemo, useState } from "react";
import PropsTypes from "prop-types";
import Link from "next/link";
import { Input, Menu, Row, Col, Button } from "antd";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import styled from "styled-components";
import { useSelector } from "react-redux";
const SearchInput  = styled(Input.Search)`
vertical-align : middle
`



const Applayout = ({ children }) => {
  const isLoggedIn = useSelector((state) => {return state.user.isLoggedIn})

  const style = useMemo(()=>({width : "100%"}), [])

  console.log(isLoggedIn)
  return (
    <div>
      <Row >
        <Col xs={6}>
         <Button style={style}><Link href="/">노드버드</Link></Button>
        </Col>
        <Col xs={6}>
          <Button style={style}><Link href="/profile">프로필</Link></Button>
        </Col>
        <Col xs={6}>
          <SearchInput  />
        </Col>
        <Col xs={6}>
          <Button style={style}><Link href="/signup">회원가입</Link></Button>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {
            isLoggedIn ? <UserProfile  /> : <LoginForm />
          }
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>오른쪽 메뉴</Col>
      </Row>
    </div>
  );
};

// 넘기는게 components라 node로 설정
Applayout.PropsTypes = {
  children: PropsTypes.node.isRequired,
};

export default Applayout;
