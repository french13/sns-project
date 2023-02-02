const postContent = {
  id: 1,
  User: {
    id: 1,
    nickname: "french",
  },
  content: "첫 번째 게시글 #해시태그 #익스프레스",
  Images: [
    {
      src: "http://placeimg.com/640/480/any",
    },
    {
      src: "http://placeimg.com/640/480/any/grayscale",
    },
    {
      src: "http://placeimg.com/640/480/animals/grayscale",
    },
  ],
  Comments: [
    {
      User: {
        nickname: "jack",
      },
      content: "안녕하세요",
    },
    {
      User: {
        nickname: "Mike",
      },
      content: "진짜 안녕하세요",
    },
  ],
  imagePaths : [],
  postAdded : false,
};

export { postContent };
