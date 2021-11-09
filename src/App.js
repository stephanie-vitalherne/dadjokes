import { useState, useEffect } from "react";
import { Joke, NavTab } from "./components";
import { CssBaseline, Typography } from "@material-ui/core";

function App() {
  const [jokes, setJokes] = useState([]);
  const [likedJokes, setLikedJokes] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    fetch("/10")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setJokes(res);
      })
      .catch((err) => console.error(err));
  }, []);

  const likeJoke = (id) => {
    if (likedJokes.find((joke) => joke.id === id)) return;
    const liked = jokes.find((joke) => joke.id === id);
    setLikedJokes([liked, ...likedJokes]);
  };

  const unlikeJoke = (id) => {
    const unliked = likedJokes.filter((joke) => joke.id !== id);
    setLikedJokes(unliked);
  };

  const changeTab = (event, value) => {
    setCurrentTab(value);
  };

  return (
    <div className="App">
      <CssBaseline />
      <Typography variant="h3" align="center">
        Dad Jokes
      </Typography>
      <NavTab value={currentTab} onChange={changeTab} />
      <div role="tabpanel" hidden={currentTab !== 0}>
        {jokes.map((joke) => (
          <Joke
            key={joke.id}
            setup={joke.setup}
            punchline={joke.punchline}
            onClickLike={() => likeJoke(joke.id)}
            onClickUnlike={() => unlikeJoke(joke.id)}
          />
        ))}
      </div>
      <div role="tabpanel" hidden={currentTab !== 1}>
        {likedJokes.map((joke) => (
          <Joke
            key={joke.id}
            setup={joke.setup}
            punchline={joke.punchline}
            onClickLike={() => likeJoke(joke.id)}
            onClickUnlike={() => unlikeJoke(joke.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
