//My component

export default function App() {
  return (
    <div>
      <MyComponent></MyComponent>
    </div>
  );
}

export function MyComponent() {
  let uname = " Pari";
  let email = "pari@gmail.com";
  let id = 101;

  let obj = { id: 1, name: "Ved" }; //we have to access objet by calling thir elemnts like obj.id

  return (
    <div>
      <h2>Hello World!!!</h2>
      <div> hii {"pari".toUpperCase()} </div>

      <div id={id}> {uname}</div>
      <div> {email}</div>

      <div>
        {obj.id} {obj.name}
      </div>
    </div>
  );
}
