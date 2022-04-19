import events from "./events.js";

const socketController = (socket) => {
  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
  });
};

export default socketController;
