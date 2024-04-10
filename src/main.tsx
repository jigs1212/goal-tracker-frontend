import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Layout from "./Layout";
import ListGoals from "./Goal/Listing/ListGoals";
import CreateGoal from "./Goal/Create/CreateGoal";
import GoalDetails from "./Goal/Details/GoalDetails";
import Home from "./Home/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="goal" element={<ListGoals />} />
        <Route path="goal/create" element={<CreateGoal />} />
        <Route path="goal/:goalId" element={<GoalDetails />} />

        {/* <Route path="user/:userid" element={<User />} /> */}
        {/* <Route loader={githubInfoLoader} path="github" element={<Github />} /> */}
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
