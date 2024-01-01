import { useState, useCallback } from "react";

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const handleSubmit = useCallback((e)=>{
    e.preventDefault();
    console.log(`Email- ${email} and Room- ${room}`);
  },[email,room])
  return (
    <>
      <div>
        <h1>Looby Screen</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email-id</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            value={email}
          />
          <br />
          <label htmlFor="room">Room Code</label>
          <input
            onChange={(e) => setRoom(e.target.value)}
            type="text"
            id="room"
            value={room}
          />
          <br />
          <button>
            Join
          </button>
        </form>
      </div>
    </>
  );
};

export default LobbyScreen;
