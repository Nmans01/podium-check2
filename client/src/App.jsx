import { Routes, Route, useBeforeLeave, useNavigate } from "@solidjs/router";
import { lazy } from "solid-js";
import Insights from "./pages/Insights";
import { parseJwt } from "./utils/parseJwt";
//import requireAuth from "./utils/requireAuth";
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const Overview = lazy(() => import('./pages/Overview'));
const About = lazy(() => import('./pages/About'));
const Assignments = lazy(() => import('./pages/Assignments'));
const Admin = lazy(() => import('./pages/Admin'));
const Forms = lazy(() => import('./pages/Forms'));
const Form = lazy(() => import('./pages/Form'));
const Login = lazy(() => import('./pages/Login'));

const Page = ({ children }) => {
  return <div class="bg-gray-900 text-white grid grid-flow-row grid-rows-[min-content_1fr] h-screen gap-2">
    <Header />
    {children}
    <Footer />
  </div>;
};

function Modul({ children }) {
  return <div class="bg-gray-900 text-white h-screen grid grid-cols-1">
    <div class="flex justify-center items-center">
      {children}
    </div>
  </div>;
}

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Page><Overview /></Page>} />
        <Route path="/about" element={<Page><About /></Page>} />
        <Route path="/assignments" element={<Page><Assignments /></Page>} />
        <Route path="/insights" element={<Page><Insights /></Page>} />
        <Route path="/admin" element={<Page><Admin /></Page>} />
        <Route path="/forms" element={<Page><Forms /></Page>} />
        <Route path="/forms/:id" element={<Page><Form /></Page>} />
        <Route path="/login" element={<Modul><Login /></Modul>} />
      </Routes>
    </>
  );
}

export default App;
