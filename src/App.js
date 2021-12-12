import { Button } from "@mui/material";
import GoogleLogin from "react-google-login";
import "./App.css";

let responseGoogle = (res) => {
  console.log(res);
  console.log(res.profileObj);
};

function App() {
  return (
    <div className="App">
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      ></GoogleLogin>
      <Button variant="outlined" size="large">
        Click me
      </Button>
    </div>
  );
}

export default App;
