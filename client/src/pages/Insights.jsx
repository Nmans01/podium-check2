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
      <select id="building-select" value={building} onChange={handleBuildingChange}>
        <option value="">-- Select a building --</option>
        <option value="BSC">BSC</option>
        <option value="Esbenshade">Esbenshade</option>
        <option value="Hoover">Hoover</option>
        <option value="Lyet">Lyet</option>
        <option value="Musser">Musser</option>
        <option value="Nicarry">Nicarry</option>
        <option value="Steinman">Steinman</option>
        <option value="Thompson">Thompson</option>
        <option value="Wenger">Wenger</option>
        <option value="Zug">Zug</option>
      </select>

      <label htmlFor="room-select">Select a room:</label>
      <select id="room-select" value={room} onChange={handleRoomChange}>
        <option value="">-- Select a room --</option>
        {building === "Nicarry" && (
          <>
            <option value="N104">104</option>
            <option value="N106">106</option>
            <option value="N127">127</option>
            <option value="N129">129</option>
            <option value="N131">131</option>
            <option value="N201">201</option>
            <option value="N202">202</option>
            <option value="N203-lab">203-lab</option>
            <option value="N204">204</option>
            <option value="N205">205</option>
            <option value="N206">206</option>
            <option value="N207">207</option>
            <option value="N208-lab">208-lab</option>
            <option value="N210">210</option>
            <option value="N212">212</option>
            <option value="N228">228</option>
            <option value="N230">230</option>
            <option value="N232">232</option>
            <option value="N234">234</option>
          </>
        )}
        {building === "Hoover" && (
          <>
            <option value="H107">107</option>
            <option value="H108-lab">108-lab</option>
            <option value="H109">109</option>
            <option value="H110">110</option>
            <option value="H111-lab">111-lab</option>
            <option value="H112">112</option>
            <option value="H114">114</option>
            <option value="H211">211</option>
            <option value="H212">212</option>
            <option value="H213">213</option>
            <option value="H214">214</option>
            <option value="H215">215</option>
          </>
        )}
      </select>
    </div>
  );
}

export default Insights;