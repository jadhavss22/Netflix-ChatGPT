// import './App.css';
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./Utils/Build-Store/appstore";

function App() {
  // return (
  //   // <div className="text-3xl font-bold text-red-600">
  <Provider store={appStore}>
    <Login />
  </Provider>;

  //   // </div>
  // );
}

export default App;
