import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Admins from "./pages/Admins";
import ChatPage from "./pages/ChatPage";
import Reports from "./pages/Reports";
import Contacts from "./pages/Contacts";
import Settings from "./pages/Settings";
import NoPage from "./pages/NoPage";

export default function App() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/chat" element={<ChatPage />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/reports" element={<Reports />} />
              <Route path="/admins" element={<Admins />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </Router>
     )
}