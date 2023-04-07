import classes from "./Item.module.css";

const Item = (props) => {
  
  const deleteTaskHandler = () => {
    props.deleteTask(props.task.id);
  }

  return (
    <div className={classes.container}>
      <div className={classes.container_content}>
        <p>{props.task.task}</p>
      </div>
      <button onClick={deleteTaskHandler} className={classes.button}><span className="fa fa-trash"></span></button>
    </div>
  );
};

export default Item;
