import React, { useEffect, useState } from "react";
const details = {
  user: "admin",
  password: "password",
};
const Login = () => {
  const [uname, setuname] = useState("");
  const [password, setpassword] = useState("");
  const [log, setlog] = useState(false);
  const [error, seterror] = useState("");
 
  useEffect(() => {
    const log = localStorage.getItem("log") === "true";
    setlog(log);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;



    if (name === "uname") setuname(value);
    if (name === "password") setpassword(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (uname === details.user && password === details.password) {
      localStorage.setItem("log", "true");
      setlog(true);
      seterror(" ");
    } else {
      seterror("Invalid user");
    }
  };

  const handleLogout = () => {
    localStorage.setItem("log", "false");
    setlog(false);
  };
  if (log) {
    return (
      <div>
        <h1>Welcome</h1>
        <button onClick={handleLogout}>LogOut</button>
      </div>
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="uname"
            value={uname}
            onChange={handleChange}
            required
            // style={styles.input}
          />
        </div>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
