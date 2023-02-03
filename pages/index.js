import styles from "../styles/Home.module.css";
import Applayout from "../components/Applayout";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { useSelector } from "react-redux";

export default function Home() {
  const isLoggedIn = useSelector((state) => {return state.user.isLoggedIn})
  const mainPosts = useSelector((state)=>{return state.post})

  console.log(mainPosts)

  return (
    <Applayout>
      {
        isLoggedIn &&  <PostForm/>
      }
      {
        mainPosts.map((post)=> <PostCard key={post.id} post={post}/>)
      }
     
      
    </Applayout>
  );
}
