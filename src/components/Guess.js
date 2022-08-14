export default function Guess() {
  return (
    <div className="guess">
      <form className="form">
        rgb(
        <input placeholder="red" type="text" />,
        <input placeholder="green" type="text" />,
        <input placeholder="blue" type="text" />)
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}
