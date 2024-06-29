import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Loginpage from "./pages/login_page/LoginPage";
import ForgotPage from "./pages/forgot_page/ForgotPage";
import Layout from "./components/layout/Layout";
import SignupPage from "./pages/signup_page/SignupPage";
import RechargePage from "./pages/recharge_page/RechargePage";
import PlanPage from "./pages/plan_page/PlanPage";
import { ViewportProvider } from "./hooks/ViewPort";
import RechargeLayout from "./components/layout/RechargeLayout";
import OnboardLayout from "./components/layout/OnboardLayout.jsx";
import MobileRecharge from "./components/service_components/mobile_recharge/MobileRecharge";
import DthRecharge from "./components/service_components/dth_recharge/DthRecharge";
import FastTag from "./components/service_components/fast_tag/FastTag";
import ElectricityBill from "./components/service_components/electricity_bill/ElectricityBill";
import LandlineRecharge from "./components/service_components/landline_recharge/LandlineRecharge";
import BroadbandRecharge from "./components/service_components/broadband_recharge/BroadbandRecharge";
import WaterBill from "./components/service_components/water_bill/WaterBill";
import TrainForm from "./components/service_components/train_ticket_booking/TrainForm";
import GasForm from "./components/service_components/lpg_cylinder_booking/GasForm";
import BusForm from "./components/service_components/bus_ticket_booking/BusForm";
import ProfileLayout from "./components/layout/ProfileLayout";
import SummaryPage from "./pages/summary/SummaryPage";
import Insurance from "./components/service_components/insurance/Insurance";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Protected from "./components/private_route/Protected.jsx";
import ActivityPage from "./pages/activity_page/ActivityPage.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import TransactionHistory from "./pages/transactions_page/TransactionHistory.jsx";
import AccountPage from "./pages/account_page/AccountPage.jsx";
import DistributorSignUp from "./components/distributor_signup/DistributorSignUp.jsx";
import Invoice from "./components/invoice/Invoice.jsx";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.withCredentials = true;

console.log(import.meta.env.VITE_BASE_URL);
function App() {
  const hours = new Date().getHours();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ViewportProvider>
          <Toaster
            position="top-right"
            containerStyle={{
              top: "100px",
              right: 0,
            }}
            toastOptions={{ duration: 5000 }}
          />
          <Routes>
            <Route path="/" element={<Layout />} exact>
              <Route element={<Loginpage />} index></Route>
              <Route path="/login" element={<Loginpage />}></Route>
              <Route path="/forgot" element={<ForgotPage />}></Route>
              <Route path="/signup" element={<SignupPage />}></Route>
              <Route path="/home" element={<HomePage />}></Route>

              <Route element={<Protected />}>
                <Route path="/signup" element={<SignupPage />}></Route>
                <Route path="/plan" element={<PlanPage />}></Route>
                <Route
                  path="/transactions/:transactionId"
                  element={<Invoice />}
                ></Route>
                <Route
                  path="/services"
                  element={
                    <RechargeLayout text="All services at your fingertips" />
                  }
                  exact
                >
                  <Route
                    element={<Navigate to="/services/mobile" replace />}
                    index
                  ></Route>
                  <Route
                    path="/services/mobile"
                    element={
                      <RechargePage>
                        <MobileRecharge />
                      </RechargePage>
                    }
                  ></Route>
                  <Route
                    path="/services/fasttag"
                    element={
                      <RechargePage>
                        <FastTag />
                      </RechargePage>
                    }
                  ></Route>
                  <Route
                    path="/services/dth"
                    element={
                      <RechargePage>
                        <DthRecharge />
                      </RechargePage>
                    }
                  ></Route>
                  <Route
                    path="/services/electricity"
                    element={
                      <RechargePage>
                        <ElectricityBill />
                      </RechargePage>
                    }
                  ></Route>
                  <Route
                    path="/services/landline"
                    element={
                      <RechargePage>
                        <LandlineRecharge />
                      </RechargePage>
                    }
                  ></Route>
                  <Route
                    path="/services/broadband"
                    element={
                      <RechargePage>
                        <BroadbandRecharge />
                      </RechargePage>
                    }
                  ></Route>
                  <Route
                    path="/services/cylinder"
                    element={
                      <RechargePage>
                        <GasForm />
                      </RechargePage>
                    }
                  ></Route>
                  <Route
                    path="/services/water"
                    element={
                      <RechargePage>
                        <WaterBill />
                      </RechargePage>
                    }
                  ></Route>
                  <Route
                    path="/services/train"
                    element={
                      <RechargePage>
                        <TrainForm />
                      </RechargePage>
                    }
                  ></Route>
                  <Route
                    path="/services/bus"
                    element={
                      <RechargePage>
                        <BusForm />
                      </RechargePage>
                    }
                  ></Route>
                  <Route
                    path="/services/insurance"
                    element={
                      <RechargePage>
                        <Insurance />
                      </RechargePage>
                    }
                  ></Route>
                </Route>
                <Route
                  path="/profile"
                  element={<ProfileLayout hours={hours} />}
                  exact
                >
                  <Route
                    element={<Navigate to="/profile/summary" replace />}
                    index
                  ></Route>
                  <Route
                    path="/profile/summary"
                    element={<SummaryPage />}
                  ></Route>
                  <Route
                    path="/profile/activity"
                    element={<ActivityPage />}
                  ></Route>
                  <Route
                    path="/profile/training"
                    element={<p>Training Videos Coming Soon...</p>}
                  ></Route>
                  <Route
                    path="/profile/account"
                    element={<AccountPage />}
                  ></Route>
                  <Route
                    path="/profile/transactions"
                    element={<TransactionHistory />}
                  ></Route>
                  <Route
                    path="/profile/wallet"
                    element={<p>Wallet Settings Coming Soon...</p>}
                  ></Route>
                </Route>
                <Route
                  path="/onboard"
                  element={<OnboardLayout text="Onboard New Users!" />}
                  exact
                >
                  <Route
                    element={<Navigate to="/onboard/franchise" replace />}
                    index
                  ></Route>
                  <Route
                    path="/onboard/franchise"
                    element={<SignupPage />}
                  ></Route>
                  <Route
                    path="/onboard/distributor"
                    element={<DistributorSignUp />}
                  ></Route>
                  <Route
                    path="/onboard/executive"
                    element={<p>Onboard Settings Coming Soon...</p>}
                  ></Route>
                  <Route
                    path="/onboard/telecaller"
                    element={<p>Onboard Settings Coming Soon...</p>}
                  ></Route>
                  <Route
                    path="/onboard/accountant"
                    element={<p>Onboard Settings Coming Soon...</p>}
                  ></Route>
                </Route>
              </Route>
            </Route>
          </Routes>
        </ViewportProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
