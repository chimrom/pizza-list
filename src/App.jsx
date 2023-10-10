import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./pages/Layout/Layout";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { MenuPage } from "./pages/MenuPage/MenuPage";
import { ContactsPage } from "./pages/ContactsPage/ContactsPage";
import { NotFound } from "./pages/NotFound/NotFound";

import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* <Route path="/" element={<Navigate to="/about" replace />} /> */}
                <Route index element={<AboutPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}
export default App;
