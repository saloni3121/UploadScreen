import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import Login from './pages/Login';
import UploadScreen from './pages/UploadScreen';


function App() {
  return (
    <>
         <Route exact path="/main" component={UploadScreen} />
         <Route exact path="/" component={Login} />
    </>
  );
}

export default App;
