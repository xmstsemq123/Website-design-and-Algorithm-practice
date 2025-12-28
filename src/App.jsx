import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // 引入動畫控制
import Header from "./pages/Header.jsx";
import Home from "./pages/Home.jsx";
import ProblemPageLayout from "./pages/ProblemPageLayout.jsx";
import TransitionWrapper from "./pages/TransitionWrapper.jsx";

export default function App() {
  const location = useLocation(); // 1. 取得當前路徑資訊

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* <Header /> */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <TransitionWrapper>
              <Home />
            </TransitionWrapper>
          } />
          <Route path="/problem/:id" element={ <ProblemPageLayout /> } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}