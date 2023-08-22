import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Layouts
import RootLayout from "./layouts/RootLayout/RootLayout";

// Pages
import HomePage from './pages/homepage/homePage'
import SignIn from './pages/signIn/signIn'
import EmailVerificationPending from './pages/emailSentForVerification/emailVerificationPending'
import EmailVerification from "./pages/emailVerification/emailVerification";
import SignUp from "./pages/signUp/signUp";
import Explore from "./pages/explore/explore";

//components
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

//assets


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={
        <div>
          <Navbar />
          <HomePage/>
          <Footer />
        </div>
      }></Route>
      <Route path="sign-in" element={
        <SignIn/>
      }>
      </Route>
      <Route path="sign-up" element={
        <SignUp/>
      }></Route>
      <Route path="email-verification-pending" element={
        <EmailVerificationPending/>
      }></Route>
      <Route path="email-verification" element={
        <EmailVerification/>
      }></Route>

      <Route path="explore" element={     // -------->    remove this shit after authentication implemented
        <Explore/>
      }></Route>
      {/* <Route path="*" element={} /> */}
    </Route>
  )
);

const App = () => {
  return (<div class="body"><RouterProvider router={router} /></div>);
};

export default App;
