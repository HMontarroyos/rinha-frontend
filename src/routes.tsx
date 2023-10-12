import React, { Suspense } from "react";
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";

import { Home, JsonViewer } from "./views";
import { Loading } from "./components";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="/json" element={<JsonViewer />} />
        </Router>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
