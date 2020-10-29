export type State = Record<string, unknown> | null;

export interface Path {
  pathname: string;
  search: string;
  hash: string;
}

export interface Location extends Path {
  state: State;
}

export type Listener = (location: Location) => void;

function parseUrl(url: string): Path {
  const path: Path = {
    pathname: '',
    search: '',
    hash: '',
  };

  if (!url) return path;

  const hashIndex = url.indexOf('#');
  if (hashIndex >= 0) {
    path.hash = url.slice(hashIndex);
    url = url.slice(0, hashIndex);
  }

  const searchIndex = url.indexOf('?');
  if (searchIndex >= 0) {
    path.search = url.slice(searchIndex);
    url = url.slice(0, searchIndex);
  }

  if (url) {
    path.pathname = url;
  }

  return path;
}

function getLocation(): Location {
  const { pathname, search, hash } = window.location;
  const state = window.history.state;

  return {
    pathname,
    search,
    hash,
    state,
  };
}

function getNextLocation(to: string, state: State = null): Location {
  return {
    ...parseUrl(to),
    state,
  };
}

let location: Location = getLocation();
const listeners: Listener[] = [];

function push(to: string, state?: State) {
  location = getNextLocation(to, state);
  window.history.pushState(state, '', to);
  listeners.forEach((listener) => listener(location));
}

function listen(listener: Listener) {
  const index = listeners.length;

  listeners.push(listener);

  return () => {
    listeners.splice(index, 1);
  };
}

window.addEventListener('popstate', function () {
  location = getLocation();
  listeners.forEach((listener) => listener(location));
});

export default {
  location,
  push,
  listen,
};
