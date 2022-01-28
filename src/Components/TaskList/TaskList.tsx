import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Task from '../Task/Task';
import { RootState } from '../../app/store';
import * as action from '../../app/getTaskCreators';
import * as API from '../../api';
import getTaskThunk from '../../app/thunk';

interface ITasks {
  id: number
  title: string
  text: string
  task_status: string

}


function TaskList(props: any) {
  const {tasks, getTask} = props
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

const mapDispatchToProps = (dispatch:any) => {
  return {
    getTask: () => {
      dispatch(getTaskThunk())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
