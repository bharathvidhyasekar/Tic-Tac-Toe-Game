import { useState } from "react";
export default function Player({user,symbol}){
const [isEditing,setIsEditing]=useState(false);
const [userName,setuserName]=useState(user)
function handleEditClick(){
    setIsEditing((editing)=>!editing)

}
function handleChange(event){
    setuserName(event.target.value)

}
return(
    <li>
    <span>
        {!isEditing ? <span className="player-name">{userName}</span>
        : <input type="text" value={userName} onChange={handleChange} required/>}
    <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    
    </li>
)
}
