Function App() {
  return (
    <div>
      <Student name="Likitha" />
      <Student name="Jahnavi" />
    </div>
  );

}
function Student(prpos) {
  return <h2>Hello, {prpos.name}!</h2>;

}
export default App;