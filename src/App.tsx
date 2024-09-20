import { FC, ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AppRouter from "./AppRoutes";
import { LayoutProvider } from "./components/layout/core";
import { ThemeModeProvider } from "./components/partials";

const App: FC = (): ReactElement => {
  // useBeforeWindowUnload();

  // useEffect(() => {
  //   socketService.setupSocketConnection();
  // }, []);

  return (
    <>
      <BrowserRouter>
        <LayoutProvider>
          <ThemeModeProvider>
         
              <AppRouter />
              <ToastContainer />
        
          </ThemeModeProvider>
        </LayoutProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
