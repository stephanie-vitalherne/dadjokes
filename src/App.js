import { useState, useEffect } from "react";
function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch("https://joke.deno.dev/10")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <h1>Jokes</h1>
    </div>
  );
}

export default App;
