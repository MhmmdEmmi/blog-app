import { Route, Routes } from "react-router-dom";
import Layout from "./Layout.js";
import IndexPage from "./pages/IndexPage.js";
import LoginPage from "./pages/LoginPage.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
