import React from "react";
import { useHistory } from "react-router";
import { createSocketConnectionInstance } from "../utils/connection";

const Room: React.FC = () => {
  const history = useHistory();

  const socketInstance = React.useRef(null);
  const [mediaType, setMediaType] = React.useState(false);

  React.useEffect(() => {
    startConnection();
  }, []);

  const toggleScreenShare = (displayStream: any) => {
    const { reInitializeStream, toggleVideoTrack } = socketInstance.current;
    displayStream === "displayMedia" &&
      toggleVideoTrack({
        video: false,
        audio: true,
      });
    reInitializeStream(false, true, displayStream).then(() => {
      setMediaType(!mediaType);
    });
  };

  const startConnection = () => {
    let params = { quality: 12 };
    socketInstance.current = createSocketConnectionInstance({
      params,
    });
  };

  const handleDisconnect = () => {
    socketInstance.current?.destroyConnection();
    history.push("/");
  };

  return (
    <React.Fragment>
      <div id="room-container"></div>
      <button onClick={handleDisconnect}>Disconnect</button>
      <button
        onClick={() =>
          toggleScreenShare(mediaType ? "userMedia" : "displayMedia")
        }
      >
        {mediaType ? "screen sharing" : "stop sharing"}
      </button>
    </React.Fragment>
  );
};

export default Room;
