import React from "react";
import { useHistory } from "react-router";
import * as fetch from "isomorphic-fetch";

const Home: React.FC = () => {
  const history = useHistory();

  const handleJoin = async () => {
    let res = await fetch("/join");
    let data = await res.json();
    history.push(`/join/${data.link}`);
  };

  return (
    <React.Fragment>
      <button onClick={handleJoin}>Join</button>
    </React.Fragment>
  );
};

export default Home;
