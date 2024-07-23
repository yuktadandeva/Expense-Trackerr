import { AddFriend } from "./AddFriend"

export const FriendList = ({share}) => {

    const friends=[
        {
       name:"Yukta Dandeva",
       id:"@yuktadandeva",

        },
        {
          name:"Aditya Singh",
          id:"@aditya.singh",

           },
        {
         name:"Janvi Singh",
            id:"@janviii",
             },
               {
                 name:"Janvi Charak",
                 id:"@janvi.charak",
                 }
                 ];

  
  return (
    <div>
        <div className="row">
        {friends.map((friend, index)=> <AddFriend key={index} friend={friend} share={share} />)}
        </div>
    </div>
  )
}
