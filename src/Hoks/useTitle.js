import { useEffect } from "react"

const UseTitle =(title)=>{
    useEffect(()=>{
        document.title=`${title}-Toy car`;
    },[title])
}

export default UseTitle;