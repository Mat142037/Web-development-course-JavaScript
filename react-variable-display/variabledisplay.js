
function VariableDisplay() {
  let stringVar = " ";
  let numberVar = 42;
  let booleanVar = true;
  let arrayVar = ["React", "JSX", "Variables"];
  let objectVar = { name: "John", age: 30, role: "Developer" };

  if (Math.random() > 0.7) {
    stringVar = "Welcome to advanced React";
    numberVar = 24;
    booleanVar = false;
    arrayVar = ['c++', 'Java', 'python'];
    objectVar = { name: 'Pete', age: 35, role: 'Entertainer'}
  } else {
    stringVar = "Welcome to intermediate React";
  }

  return (
    <div>
      <h1>{stringVar}</h1>
      <p>{numberVar}</p>
      <p>{booleanVar}</p>
      <ul>{arrayVar.map((list, index) => (<li key={index}>{list}</li>))}</ul>
      <p>Name: {objectVar.name}</p>
      <p>Age: {objectVar.age}</p>
      <p>Role: {objectVar.role}</p>
    </div>
  );
}

export default VariableDisplay;