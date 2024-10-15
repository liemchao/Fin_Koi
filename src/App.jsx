import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import HomePage from "./pages/home/HomePage";
import { Outlet } from "react-router-dom";


// import StudentManagement from "./StudentManagement";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
      <Outlet />
    </>

  );
}

export default App;
