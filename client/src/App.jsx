import { Routes, Route } from "@solidjs/router";
import { lazy } from "solid-js";
const Header      = lazy(() => import('./components/Header'));
const Footer      = lazy(() => import('./components/Footer'));
const Overview    = lazy(() => import('./pages/Overview'));
const About       = lazy(() => import('./pages/About'));
const Admin       = lazy(() => import('./pages/Admin'));
const Form        = lazy(() => import('./pages/Form'));
const Login       = lazy(() => import('./pages/Login'));

function App() {
  return (
    <div class="bg-gray-900 text-white grid grid-flow-row grid-rows-[min-content_1fr] h-screen ">
      <Header/>
      <Routes>
        <Route path="/" component={Overview}/>
        <Route path="/about" component={About}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/form" component={Form}/>
        <Route path="/login" component={Login}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
