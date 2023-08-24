import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Layouts
import RootLayout from "./layouts/RootLayout/RootLayout";

// Pages
import HomePage from "./pages/homepage/homePage";
import SignIn from "./pages/signIn/signIn";
import EmailVerificationPending from "./pages/emailSentForVerification/emailVerificationPending";
import EmailVerification from "./pages/emailVerification/emailVerification";
import SignUp from "./pages/signUp/signUp";
import Explore from "./pages/explore/explore";
import CreateOpportunity from "./pages/createOpportunity/createOpportunity";
import IndiOpportunity from "./pages/indiOpportunity/indiOpportunity";

//components
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import ConfirmationalModal from "./components/confirmationalModal/confirmationalModal";
import AppliedModal from "./components/appliedModal/appliedModal";

//assets

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index
        element={
          <div>
            <Navbar />
            <HomePage />
            <Footer />
          </div>
        }
      ></Route>
      <Route path="sign-in" element={<SignIn />}></Route>
      <Route path="sign-up" element={<SignUp />}></Route>
      <Route
        path="email-verification-pending"
        element={<EmailVerificationPending />}
      ></Route>
      <Route path="email-verification" element={<EmailVerification />}></Route>

      <Route
        path="explore"
        element={
          // -------->    remove this shit after authentication implemented
          <Explore />
        }
      ></Route>
      <Route
        path="test"
        element={
          // -------->    remove this shit after authentication implemented
          <IndiOpportunity/>
          // <ConfirmationalModal/>
          // <AppliedModal/>
        }
      ></Route>
      <Route path="create-opportunity" element={<CreateOpportunity/>}></Route>
      {/* <Route path="*" element={} /> */}
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
