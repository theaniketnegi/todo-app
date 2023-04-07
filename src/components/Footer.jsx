import classes from './Footer.module.css'

const Footer = (props) => {
  return (
    <div className={classes.container}>
        <p>{`You have ${props.tasks.length} pending tasks`}</p>
        <button onClick={props.clearTasks} className={classes.button}>Clear all</button>
    </div>
  )
}

export default Footer