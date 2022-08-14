export default function Color(props) {
  console.log(props);
  return (
    <div className="given-color">
      <h3 style={{ background: props.color }}>Given Color</h3>
      <div></div>
      <button onClick={props.colorGenerator}>Get a Color🎨</button>
    </div>
  );
}
