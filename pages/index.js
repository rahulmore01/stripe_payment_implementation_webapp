export default function Home() {
  const handleclick = () => {
    console.log("clicked");
  };

  return (
    <div className="main">
      <h1>buy me a course</h1>
      <button onClick={handleclick}>checkout</button>
    </div>
  );
}
