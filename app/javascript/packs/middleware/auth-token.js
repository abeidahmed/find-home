export const authToken = getState => {
  const token = getState().currentUser.token;

  const config = {
    headers: {
      "Content-type": "application/json",
      Accept: "application/json"
    }
  };

  if (token) config.headers["Authorization"] = `Bearer ${token}`;

  return config;
};
