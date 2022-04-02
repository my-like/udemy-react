import classes from './MeetupItems.module.css';

function MeetupItems(props) {
  return (
    <li className={classes.item} key={props.meetup.key}>
      <div>
        <h2>{props.meetup.title}</h2>
      </div>
      <div className={classes.img}>
        <img src={props.meetup.image} alt={props.meetup.title} />
      </div>
      <div>
        <p>{props.meetup.description}</p>
      </div>
    </li>
  );
}

export default MeetupItems;
