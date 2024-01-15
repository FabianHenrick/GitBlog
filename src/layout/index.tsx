import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { Header } from "../components/header";
import { UserContextProvider } from "../context/UserDataContext";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <UserContextProvider>
        <Outlet />
      </UserContextProvider>
    </LayoutContainer>
  );
}
