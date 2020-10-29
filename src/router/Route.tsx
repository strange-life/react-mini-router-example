import React from 'react';

export interface RouteProps {
  path: string;
}

export const Route: React.FC<RouteProps> = function Route(props) {
  return <>{props.children}</>;
};
