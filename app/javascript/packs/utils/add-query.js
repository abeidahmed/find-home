import { useLocation } from "react-router-dom";

export const useAddQuery = (key, value) => {
  const location = useLocation();
  let pathname = location.pathname;
  let searchParams = new URLSearchParams(location.search);
  searchParams.set(key, value);
  history.push({
    pathname: pathname,
    search: searchParams.toString()
  });
};
