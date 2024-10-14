// App.tsx
import { FC, ReactElement, useEffect } from "react";
import { BrowserRouter, Outlet } from "react-router-dom";
import AppRouter from "./AppRoutes";
import { LayoutProvider } from "./components/layout/core";
import { ThemeModeProvider } from "./components/partials";
import { MasterInit } from "./components/layout/MasterInit";
import { I18nProvider } from "./components/i18n/i18nProvider";
import { socketService } from "./sockets/socket.service";

const App: FC = (): ReactElement => {

  useEffect(() => {
    socketService.setupSocketConnection();
  }, []);

  return (
    <>
      <BrowserRouter>
      <I18nProvider>

      <LayoutProvider>
            <ThemeModeProvider>
              <AppRouter />
              <Outlet />
              <MasterInit />
            </ThemeModeProvider>
          </LayoutProvider>
      
      </I18nProvider>


   

         
      </BrowserRouter>
    </>
  );
};

export default App;
