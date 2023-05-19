import React,{useState} from "react";

export default function Main() {

const [count,setcount]=useState(0);
function add(){
    setcount(count+1)
}
function substract(){
    setcount(count-1)
}




  return (
    <div className="main">
      <button className="minus common" onClick={substract}>-</button>
      <div className="count">{count}</div>
      <button className="add common" onClick={add}>+</button>
    </div>
  );
}
