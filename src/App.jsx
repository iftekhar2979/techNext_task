import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Root from "./Page/Root";
import AllUsers from "./Page/AllUser";
import Navbar from "./Components/Navbar/Navbar";
import SingleUser from "./Page/SingleUser";
import ErrorComponent from "./Page/ErrorComponent";

export default function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Root />} />
        <Route index element={<AllUsers />} /> 
        <Route path="/:id" element={<SingleUser/>}/>
        <Route path="*" element={<ErrorComponent/>} />
      </Routes>
    </BrowserRouter>
  );
}





