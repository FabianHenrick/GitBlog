import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layout/index";
import { Home } from "../pages/home";
import { Profile } from "../pages/profile";
import { Issue } from "../pages/Issue";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/issue" element={<Issue />} />
      </Route>
    </Routes>
  );
}
