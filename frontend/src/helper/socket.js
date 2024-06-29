import { io } from "socket.io-client";
import { isLoggedIn } from "./auth";

export let socket;

export const initiateSocketConnection = () => {
  const BASE_URL = "http://localhost:5000/";
  const user = isLoggedIn();

  socket = io(BASE_URL, {
    auth: {
      token: user,
    },
  });
};

export const disconnectSocket = () => {
  if (socket) socket.disconnect();
};
