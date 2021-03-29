const Dot = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.position === props.index ? props.active : props.deactive}
    viewBox="0 0 16 16"
  >
    <circle cx="8" cy="8" r="8" />
  </svg>
);

export default Dot;
