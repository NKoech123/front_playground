import React, { useState } from "react";


type IProfile = {
  username: string;
  password: string;
};

function App() {
  const [profile, setProfile] = useState<IProfile>({
    username: "",
    password: "",
  });

  //Checking Event Type for onChange Method
  let updateInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value,
    });
  };

  //Checking Event Type for onSubmit Method
  let login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(profile);
  };

  return (
    <div className="App">
      <h2>Employee Login</h2>
      <form onSubmit={login}>
        <div>
          <input
            name="username"
            value={profile.username}
            onChange={updateInput}
            type="text"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            name="password"
            value={profile.password}
            onChange={updateInput}
            type="password"
            placeholder="Password"
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;