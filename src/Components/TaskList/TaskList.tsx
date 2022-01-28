import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Task from '../Task/Task';
import { RootState } from '../../app/store';
import getTaskThunk from '../../app/thunk';
import { store } from '../../app/store'

interface ITasks {
  id: number
  title: string
  text: string
  task_status: string
}

interface Iprops {
  tasks: ITasks[]
  getTask: Function
}

function TaskList({tasks, getTask}: Iprops) {


  useEffect(() => {
    getTask()
  }, []);
  return (
    <>
      <ul>
        {
          tasks.length !== 0 ?
            tasks.map((elem: ITasks) => {
              return <Task key={elem.id} id={elem.id} title={elem.title} text={elem.text}
                           task_status={elem.task_status}/>
            })
            : <h1>no tasks yet</h1>
        }
      </ul>
    </>
  )
}


const mapStateToProps = (state: RootState) => {
  return {tasks: state.task.data};
};
export const dispatchStore = store.dispatch as typeof store.dispatch | Dispatch<any>
const mapDispatchToProps = () => {
  return {
    getTask: () => {
      dispatchStore(getTaskThunk())
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
