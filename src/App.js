import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Home from "./layouts/Home/Home.jsx";
import SanPhamPage from "./layouts/SanPhamPage/SanPhamPage";
import SingleSP from "./layouts/SanPhamPage/SingleSP";
import LienHe from "./layouts/LienHe/LienHe.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="xetai">
                    <Route index element={<SanPhamPage />} />
                    <Route path=":xetaiID" element={<SingleSP />} />
                </Route>
                <Route path="lienhe">
                    <Route index element={<LienHe />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
