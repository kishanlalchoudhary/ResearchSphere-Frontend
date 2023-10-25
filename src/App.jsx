// Imports
import { Navigate, Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";

// Layouts
import RootLayout from "./layouts/RootLayout/RootLayout";

// Pages
import NotFound from "./pages/notFound/notFound";
import HomePage from "./pages/homepage/homePage";
import SignIn from "./pages/signIn/signIn";
import SignUp from "./pages/signUp/signUp";
// import EmailVerificationPending from "./pages/emailSentForVerification/emailVerificationPending";
// import EmailVerification from "./pages/emailVerification/emailVerification";
import Explore from "./pages/explore/explore";
import OpportunityDetail from "./pages/opportunityDetail/opportunityDetail";
import CreateOpportunity from "./pages/createOpportunity/createOpportunity";
import MyPosts from "./pages/myPosts/myPosts";
import EditPost from "./pages/editPost/editPost";
import MyApplications from "./pages/myApplications/myApplications";
import PostApplicants from "./pages/postApplicants/postApplicants";
import MyProfile from "./pages/myProfile/myProfile";
import ProfileDetails from "./pages/profileDetails/profileDetails";
import Feedback from "./pages/feedback/feedback";
import AboutUs from "./pages/aboutUs/aboutUs";

// Toastify
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const token = Cookies.get("token");
  // const token = "test";

  return (
    <Routes>
      <Route exact path="/" element={<RootLayout />}>
        <Route index exact element={<HomePage />} />
        <Route
          path="feedback"
          exact
          element={token ? <Feedback /> : <Navigate to="/sign-in" />}
        />
        <Route
          path="about-us"
          exact
          element={token ? <AboutUs /> : <Navigate to="/sign-in" />}
        />
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
          path="my-profile"
          element={token ? <MyProfile /> : <Navigate to="/sign-in" />}
        />
        <Route
          exact
          path="profile-details/:userId"
          element={token ? <ProfileDetails /> : <Navigate to="/sign-in" />}
        />
        <Route
          exact
          path="post-edit/:postId"
          element={token ? <EditPost /> : <Navigate to="/sign-in" />}
        />
        <Route
          exact
          path="post-applicants/:postId"
          element={token ? <PostApplicants /> : <Navigate to="/sign-in" />}
        />
        <Route
          exact
          path="my-applications"
          element={token ? <MyApplications /> : <Navigate to="/sign-in" />}
        />
      </Route>
      <Route exact path="/sign-in" element={<SignIn />} />
      <Route exact path="/sign-up" element={<SignUp />} />
      {/* <Route exact path="email-verification" element={<EmailVerification />} /> */}
      {/* <Route
        exact
        path="email-verification-pending"
        element={<EmailVerificationPending />}
      /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
