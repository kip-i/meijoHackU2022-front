import { FC } from 'react';


const PostedMessagesList: FC = () => {
  const ans=[
    {
        "id": 1,
        "user_FK": 1,
        "challenge_FK":null,
        "text":"水を買い足した！",
        "picture_path_01":"rrrrrrrrrrrrrrrrrrrr",
        "like_count": 0,
        "created_at": 33333333333,
        "updated_at": 33333333333,
        "users":{
            "id":1, // postsのuser_FKと同じ
            "firebase_FK":1,
            "user_id":"koki-fore",
        },
        "comments":[
            {
                "id":1,
                "user_FK":4, // postsのuser_FKと違う
                "post_FK":1, // postsのidと同じ
                "text":"すごい",
                "created_at":33333333333,
                "updated_at":33333333333
            },
            {
                "id":4,
                "user_FK":5, // postsのuser_FKと違う
                "post_FK":1, // postsのidと同じ
                "text":"おおー",
                "created_at":33333333333,
                "updated_at":33333333333
            }
        ],
        "challenges":[{}]
    },
    {
        "id": 2,
        "user_FK": 1,
        "challenge_FK":null,
        "text":"水を買い足した！",
        "picture_path_01":"rrrrrrrrrrrrrrrrrrrr",
        "like_count": 0,
        "created_at": 33333333333,
        "updated_at": 33333333333,
        "users":{
            "id":1, // postsのuser_FKと同じ
            "firebase_FK":1,
            "user_id":"koki-fore",
        },
        "comments":[
            {
                "id":1,
                "user_FK":4, // postsのuser_FKと違う
                "post_FK":1, // postsのidと同じ
                "text":"すごい",
                "created_at":33333333333,
                "updated_at":33333333333
            },
          ],
    }
  ];
  var postedMessages = [];
  for (var i in ans){
    postedMessages.push(<PostedMessage/>)
  }
  return(
    <>
      
    </>
  );
  
}

export default PostedMessagesList;
 