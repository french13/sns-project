import React, { useCallback, useState } from 'react'
import { Button, Form, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../store/slice';

const PostForm = () => {
    const {imagePaths} = useSelector((state)=>{return state.post});
    const dispatch =useDispatch()
    const [text, setText] = useState("")
    

    const onChangeText = useCallback((e)=>{
        setText(e.target.value)
    },[])

    const onSubmit = useCallback(()=>{
        dispatch(addPost)
    }, [])


  return (
    <Form style={{margin : "10px 0 20px"}} encType="multipart/form-data" onFinish={onSubmit}>
        <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="오늘의 뉴스"
        />
        <div>
            <input type='file' multiple hidden />
            <Button>이미지업로드</Button>
            <Button type='primary' style={{float : 'right'}} htmlType='submit'>posting</Button>
        </div>
        <div>
            {/* {
                imagePaths.map((v)=>{
                    <div key={v} style={{display : "inline-block"}}>
                        <img src={v} style={{width : '200px'}} alt='사진'/>
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>
                })
            } */}
        </div>
    </Form>
  )
}

export default PostForm