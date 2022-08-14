export default function Guess() {
  return (
    <div>
      <form className="guess">
        rgb(
        <input placeholder="amount of red" type="text" />,
        <input placeholder="amount of green" type="text" />,
        <input placeholder="amount of blue" type="text" />)
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
