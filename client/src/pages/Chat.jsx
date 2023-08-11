import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
    const { userChats,isUserChatsLoading,userChatsError } = useContext(ChatContext);
    console.log("MyChats:",userChats);
    return ( 
         <>

         </>
     );
}
 
export default Chat;