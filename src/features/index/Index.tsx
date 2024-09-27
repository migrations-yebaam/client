import {
  FC,
  lazy,
  LazyExoticComponent,
  ReactElement,
  Suspense,
  useEffect,
} from "react";
import { IHeader } from "../../shared/header/interfaces/header.interface";
import CircularPageLoader from "../../shared/page-loader/CircularPageLoader";
import { saveToSessionStorage } from "../../shared/utils/utils.service";
import RecentLogins from "./components/RecentLogins";
import LoginForm from "./components/LoginForm";
import CreateAccountButton from "./components/CreateAccountButton";
import Footer from "./components/Footer";
import HeaderLanding from "./components/HeaderLanding";
import './scss/index.scss';  // Aquí importas el SCSS que hemos creado

const IndexHeader: LazyExoticComponent<FC<IHeader>> = lazy(
  () => import("../../shared/header/components/Header")
);

const Index: FC = (): ReactElement => {
  useEffect(() => {
    saveToSessionStorage(JSON.stringify(false), JSON.stringify(""));
  }, []);

  return (
    <><div className="index-page">
      <div className="left-section">
        <HeaderLanding />
        <RecentLogins />
      </div>
      <div className="right-section">
        <LoginForm />
        <CreateAccountButton className="create-account" />
      </div>
    </div><Footer /></>

  );
};

export default Index;
