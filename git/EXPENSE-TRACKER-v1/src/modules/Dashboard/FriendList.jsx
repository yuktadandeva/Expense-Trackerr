import { AddFriend } from "./AddFriend"

export const FriendList = ({share}) => {

    const friends=[
        {
       name:"Yukta Dandeva",
       id:"@yuktadandeva",

        },
        {
         name:"Rekha",
            id:"@rekha",

             },
             {
                name:"Asha Bhosle",
                id:"@bhosle234",

                 },
                 {
                    name:"Lata Mangeshkar",
                    id:"@therealLata",

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
