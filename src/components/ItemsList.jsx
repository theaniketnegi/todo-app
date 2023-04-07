import Item from "./Item";
import classes from "./ItemsList.module.css";
const ItemsList = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.inner_container}>
        {props.tasks.length !== 0 ? (
          props.tasks.map((task) => {
            return (
              <Item
                key={task.id}
                task={task}
                deleteTask={props.deleteTask}
              />
            );
          })
        ) : (
          <p> No tasks to do. </p>
        )}
      </div>
    </div>
  );
};

export default ItemsList;
