import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ITask {
  id: string
  title: string
  text: string
}

function Tasks() {
  const [tasks, setTasks] = useState<[ITask]>()
  useEffect(() => {
    axios.get('http://localhost:3000/tasks')
    .then(resp => setTasks(resp.data))
    .catch((err) => console.log(err))
  }, [])
  console.log(tasks)
  return (
    <div>

      {tasks?.map((elem, index) => <><h3 key={index}>{elem.title}</h3><p>{elem.text}</p></>
      )}
    </div>
  );
}

export default Tasks;
