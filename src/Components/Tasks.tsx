import React,{useEffect, useState} from 'react';
import axios from 'axios';

function Tasks() {
const [tasks, setTasks]= useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/tasks")
    .then(resp=> setTasks(resp.data))
    .catch((err)=>console.log(err))
  },[])
  return (
    <div>

      {tasks.map((elem)=>{
       return <h1 key={elem["id"]}>{elem["text"]}</h1>
      })}
     </div>
  );
}

export default Tasks;
