import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.container_text}>Todo App</h1>
      {props.children}
    </div>
  )
}

export default Card