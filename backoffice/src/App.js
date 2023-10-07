
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Adherents from "./pages/adherents/Adherents";
import Actualites from "./pages/actualites/Actualites";
import Settings from "./pages/settings/Settings";
import Informations from "./pages/informations/Informations";
import Events from "./pages/events/Events";
import Cours from "./pages/cours/Cours";
import Layout from "./Layout";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="adherents" element={<Adherents />} />
          <Route path="actualites" element={<Actualites />} />
          <Route path="cours" element={<Cours />} />
          <Route path="informations" element={<Informations />} />
          <Route path="settings" element={<Settings />} />
          <Route path="events" element={<Events />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


