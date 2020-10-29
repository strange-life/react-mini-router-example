import React, { ReactElement } from 'react';
import type { RouteProps } from './Route';
import { useLocation } from './Router';

type RouteChild = ReactElement<RouteProps>;

interface SwitchProps {
  children?: RouteChild | RouteChild[];
}

export const Switch: React.FC<SwitchProps> = function (props) {
  const location = useLocation();
  let element: RouteChild | null = null;

  React.Children.forEach(props.children, function (child) {
    if (element || !React.isValidElement(child)) return;
    if (child.props.path === location.pathname) element = child;
  });

  return element;
};
