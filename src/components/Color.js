export default function Color(props) {
  return (
    <div className="color">
      <button
        className="given-color"
        style={{ background: props.color }}
        onClick={props.colorGenerator}
      ></button>
    </div>
  );
}
