import { useState } from "react";

function Insights() {
  const [building, setBuilding] = useState("");
  const [room, setRoom] = useState("");

  const handleBuildingChange = (event) => {
    setBuilding(event.target.value);
  };

  const handleRoomChange = (event) => {
    setRoom(event.target.value);
  };

  return (
    <div>
      <label htmlFor="building-select">Select a building:</label>

      // TODO buildings will need to be alphabetical
      <select id="building-select" value={building} onChange={handleBuildingChange}>
        <option value="">-- Select a building --</option>
        <option value="Nicarry">Building 1</option>
        <option value="Esbenshade">Building 2</option>
        <option value="Hoover">Building 3</option>
      </select>

      <label htmlFor="room-select">Select a room:</label>
      <select id="room-select" value={room} onChange={handleRoomChange}>
        <option value="">-- Select a room --</option>
        {building === "building-1" && (
          <>
            <option value="N104">104</option>
            <option value="N106">106</option>
            <option value="N127">127</option>
            <option value="N129">129</option>
            <option value="N131">131</option>
            <option value="N201">201</option>
            <option value="N202">202</option>
            <option value="N203-lab">203</option>
            <option value="N204">204</option>
            <option value="N205">205</option>
            <option value="N207">207</option>
            <option value="N208-lab">208</option>
            <option value="N210">210</option>
            <option value="N212">212</option>
            <option value="N228">228</option>
            <option value="N230">230</option>
            <option value="N232">232</option>
            <option value="N234">234</option>
          </>
        )}
        {building === "building-2" && (
          <>
            <option value="room-3">Room 3</option>
            <option value="room-4">Room 4</option>
          </>
        )}
        {building === "building-3" && (
          <>
            <option value="room-5">Room 5</option>
            <option value="room-6">Room 6</option>
          </>
        )}
      </select>
    </div>
  );
}

export default Insights;