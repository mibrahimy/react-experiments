const Button = (props) => {
  return (
    <button
      className={'d-flex mx-auto btn ' + props.color} onClick={props.onClick}>
        {props.text}
    </button>
  );
};

export default Button;
