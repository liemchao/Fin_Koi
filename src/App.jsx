import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
// import RegisterPage from "./pages/register";
import Dashboard from "./pages/dashboard";
import HomePage from "./pages/home/HomePage";
import Header2 from "./components/main/Header2";
import Rating from "./pages/Rating/Rating";
import ProductDetail from "./pages/1Koi/ProductDetail";
import PaymentPageOnline from "./pages/payment/PaymentOnl";
import OrderStatus from "./pages/OrderStatus/OrderStatus";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import ProductPage from "./pages/product/ProductPage";
import Packs from "./pages/packs/packs";
import Payment from "./pages/payment/PaymentOffline";
import CartPage from "./pages/cart/CartPage";
import RegisterPage from "./pages/register/register";
import Submission from "./pages/submission/Submission";
import FAQ from "./pages/FAQs/faqs";

// import StudentManagement from "./StudentManagement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={
            <>
              <Header />
              <HomePage />
              <Footer />
            </>
          }
        >
        </Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/detail" element={<ProductDetail />} />
        <Route path="/kygui" element={<Submission />} />


        <Route
          path="/"
          element={
            <>
              <Header2 />
              <Footer />
            </>
          }
        >

        </Route>
        <Route path="/v" element={<HomePage />} />
        <Route path="/productv" element={<ProductPage />} />
        <Route path="/detailv" element={<ProductDetail />} />
        <Route path="paymentonline" element={<PaymentPageOnline />} />
        <Route path="orderstatus" element={<OrderStatus />} />
        <Route path="rating" element={<Rating />} />
        <Route path="package" element={<Packs />} />
        <Route path="payment" element={<Payment />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="sub" element={<Submission />} />
        <Route path="/support" element={<FAQ />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
