import { Navigate, Route, Routes } from "react-router-dom";

// Layouts
import RootLayout from "./layouts/RootLayout/RootLayout";

// Pages
import HomePage from "./pages/homepage/homePage";
import SignIn from "./pages/signIn/signIn";
import EmailVerificationPending from "./pages/emailSentForVerification/emailVerificationPending";
import EmailVerification from "./pages/emailVerification/emailVerification";
import SignUp from "./pages/signUp/signUp";
import Explore from "./pages/explore/explore";
import NotFound from "./pages/notFound/notFound";
import Cookies from "js-cookie";
import CreateOpportunity from "./pages/createOpportunity/createOpportunity";
import IndiOpportunity from "./pages/indiOpportunity/indiOpportunity";

const App = () => {
  const token = Cookies.get("token");
import ConfirmationalModal from "./components/confirmationalModal/confirmationalModal";
import AppliedModal from "./components/appliedModal/appliedModal";

  return (
    <Routes>
      <Route exact path="/" element={<RootLayout />}>
        <Route index exact element={<HomePage />} />
        <Route
          exact
          path="explore"
          element={token ? <Explore /> : <Navigate to="/sign-in" />}
        />
      </Route>
      <Route
        exact
        path="email-verification-pending"
        element={<EmailVerificationPending />}
      />
      <Route exact path="email-verification" element={<EmailVerification />} />
      <Route
        exact
        path="/sign-in"
        element={token ? <Navigate to="/explore" /> : <SignIn />}
      />
      <Route
        exact
        path="/sign-up"
        element={token ? <Navigate to="/explore" /> : <SignUp />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
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
