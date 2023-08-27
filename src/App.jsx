import { Navigate, Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";

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
import CreateOpportunity from "./pages/createOpportunity/createOpportunity";
import OpportunityDetail from "./pages/opportunityDetail/opportunityDetail";
import MyApplications from "./pages/myApplications/myApplications";
import MyPosts from "./pages/myPosts/myPosts";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const token = Cookies.get("token");
  // const token = "test";

  return (
    <Routes>
      <Route exact path="/" element={<RootLayout />}>
        <Route index exact element={<HomePage />} />
        <Route
          exact
          path="explore"
          element={token ? <Explore /> : <Navigate to="/sign-in" />}
        />
        <Route
          exact
          path="post-opportunity"
          element={token ? <CreateOpportunity /> : <Navigate to="/sign-in" />}
        />
        <Route
          exact
          path="opportunity-detail/:opportunityId"
          element={token ? <OpportunityDetail /> : <Navigate to="/sign-in" />}
        />
        <Route
          exact
          path="my-posts"
          element={token ? <MyPosts /> : <Navigate to="/sign-in" />}
        />
        <Route
          exact
          path="my-applications"
          element={token ? <MyApplications /> : <Navigate to="/sign-in" />}
        />
      </Route>
      <Route
        exact
        path="email-verification-pending"
        element={<EmailVerificationPending />}
      />
      <Route exact path="email-verification" element={<EmailVerification />} />
      <Route exact path="/sign-in" element={<SignIn />} />
      <Route exact path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
