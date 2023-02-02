import { Button } from 'antd'
import Head from 'next/head'
import React from 'react'
import { useSelector } from 'react-redux'
import Applayout from '../components/Applayout'
import FollowList from '../components/FollowList'
import NicknameEdition from '../components/NicknameEdition'

const Profile = () => {
  const followerList = [{nickname : "라이언"}, {nickname : "무지"}, {nickname : "피치"}]
  const followingList = [{nickname : "라이언"}, {nickname : "무지"}, {nickname : "피치"}]

  


  const test = useSelector((state)=>{return  state.user})


  console.log(test)



  return (
    <>
    <Head>
      <title>프로필</title>
    </Head>
    <Applayout>
      <NicknameEdition/>
      <FollowList header="팔로잉 목록" data={followerList} />
      <FollowList header="팔로워 목록" data={followingList}/>
    </Applayout>
    </>
  )
}

export default Profile