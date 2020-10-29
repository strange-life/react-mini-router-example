import React, { createContext, useState, useEffect, useContext } from 'react';
import historyRouter from './historyRouter';

const RouterContext = createContext({
  router: historyRouter,
  location: historyRouter.location,
});

export function useRouter() {
  return useContext(RouterContext).router;
}

export function useLocation() {
  return useContext(RouterContext).location;
}

export const Router: React.FC = function Router(props) {
  const [location, setLocation] = useState(historyRouter.location);

  useEffect(() => historyRouter.listen(setLocation), []);

  return (
    <RouterContext.Provider
      value={{ router: historyRouter, location }}
      children={props.children}
    />
  );
};
