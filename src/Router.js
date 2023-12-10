import React from "react";
import { Route, Routes } from "react-router-dom";

import Bazarkar from "./pages/Bazarkar";
import Firstpage from "./pages/Firstpage";
import Mashaqel from "./pages/Mashaqel";
import Meli from "./pages/Meli";
import Amozesh from "./pages/Amozesh";
import Yadgiri from "./pages/Yadgiri";
import Dore from "./pages/Dore";
import Uni from "./pages/Uni";
import Azmon from "./pages/Azmon";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Firstpage />} />
      <Route path="/bazarkar" element={<Bazarkar />} />
      <Route path="/mashaqel" element={<Mashaqel />} />
      <Route path="/meli" element={<Meli />} />
      <Route path="/amozesh" element={<Amozesh />} />
      <Route path="/yadgiri" element={<Yadgiri />} />
      <Route path="/dore" element={<Dore />} />
      <Route path="/uni" element={<Uni />} />
      <Route path="/azmon" element={<Azmon />} />
    </Routes>
  );
};

export default Router;
