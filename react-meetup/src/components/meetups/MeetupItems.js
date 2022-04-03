import classes from './MeetupItems.module.css';

/**
 * Image URL (public vs src)
 * 1. public 이미지는 단순히 빌드 결과믈에 복사-붙여넣기 된다. webpack 관리 X
 * 2. src 내의 이미지는 10,000 byte 이하는 컴파일되어 data:URL 형식으로 나타난다.
 * https://velog.io/@rimo09/React-Create-react-app-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90%EC%84%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EA%B2%BD%EB%A1%9C%EB%A5%BC-%EC%84%A4%EC%A0%95%ED%95%98%EB%8A%94-4%EA%B0%80%EC%A7%80-%EB%B0%A9%EB%B2%95
 */
function MeetupItems(props) {
  return (
    <li className={classes.item} key={props.meetup.key}>
      <div>
        <h2>{props.meetup.title}</h2>
      </div>
      <div className={classes.img}>
        <img src={(props.meetup.image.startsWith('/')) ? `${process.env.PUBLIC_URL}${props.meetup.image}`: props.meetup.image} alt={props.meetup.title} />
      </div>
      <div>
        <p>{props.meetup.description}</p>
      </div>
    </li>
  );
}

export default MeetupItems;
