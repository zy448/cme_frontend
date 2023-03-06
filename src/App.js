import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
      <div>
        <Routes>
          <Route path="/account/purchases" element={<Purchases />} />
          <Route path="/account/cart" element={<Cart />} />
          <Route path="/account/cart/checkout" element={<Checkout />} />
          {/* <Route path="/account/purchases/status" element={<Status />} /> */}
        </Routes>
      </div>

    </>
  );
}

export default App;
