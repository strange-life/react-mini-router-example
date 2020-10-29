import React from 'react';
import { useLocation, useRouter } from './Router';

type ClickHandler = React.MouseEventHandler<HTMLAnchorElement>;

interface LinkProps {
  to: string;
  onClick?: ClickHandler;
}

export const Link: React.FC<LinkProps> = function Link({
  to,
  onClick,
  ...rest
}) {
  const location = useLocation();
  const router = useRouter();

  const handleClick: ClickHandler = function handleClick(event) {
    try {
      if (onClick) onClick(event);
      if (to !== location.pathname) router.push(to);
    } catch (error) {
      throw error;
    } finally {
      event.preventDefault();
    }
  };

  return <a href={to} onClick={handleClick} {...rest} />;
};
