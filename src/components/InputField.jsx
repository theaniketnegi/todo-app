import { useRef } from 'react';
import classes from './InputField.module.css';

const InputField = (props) => {
  const taskRef = useRef();
  
  const newTaskHandler = () => {
    props.addTask(taskRef.current.value);
    taskRef.current.value="";
  }

  return (
    <div className={classes.input_container}>
        <input className={classes.input} type="text" name="" id="" placeholder="Enter a task..." ref={taskRef}/>
        <button onClick={newTaskHandler} className={classes.add_button}>
          <span className={`${classes.span}`+' fa fa-plus'}>
          </span>
        </button>
    </div>
  )
}

export default InputField