import AddBuku from "./components/AddBuku";
import BukuList from "./components/BukuList";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import EditBook from "./components/EditBook";
import Login from "./components/Login";

function App() {
  const loggedIn = localStorage.getItem('loggedIn') === 'true';
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BukuList />} />
        <Route path="add" element={<AddBuku />} />
        <Route path="edit/:id" element={<EditBook />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
