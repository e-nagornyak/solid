import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PaymentPage } from "@/components/pages/payment-page.tsx";
import { HomePage } from "@/components/pages/home-page.tsx";
import { routes } from "@/lib/routes.ts";
import { CongratulationsPage } from "@/components/pages/congratulations-page.tsx";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.success} element={<CongratulationsPage />} />
        <Route path={routes.payment} element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}
