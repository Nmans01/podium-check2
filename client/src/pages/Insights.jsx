import React, { useState } from 'react';

const buildings = [
  {
    name: 'BSC',
    rooms: ['200', '233'],
  },
  {
    name: 'Eshade',
    rooms: ['163', '164', '182', '184', '187', '260H-lab', '270', '273', '280- key', '281', '360', '362', '368', '370', '373', '380', '382'],
  },
  {
    name: 'Hoover',
    rooms: ['107', '108-lab', '109', '110', '111-lab', '112', '114', '211', '212', '213', '214', '215'],
  },
  {
    name: 'Lyet',
    rooms: ['150', '151', '152', '153', '249', '250', '251', '252', '253'],
  },
  {
    name: 'Musser',
    rooms: ['108', '215', '232'],
  },
  {
    name: 'Nicarry',
    rooms: ['104', '106', '127', '129', '131', '201', '202', '203-lab', '204', '205', '206', '207', '208-lab', '210', '212', '228', '230', '232', '234'],
  },
  {
    name: 'Steinman',
    rooms: ['101', '204', '210', '211'],
  },
  {
    name: 'Thompson',
    rooms: ['105'],
  },
  {
    name: 'Wenger',
    rooms: ['001', '204', '211', '304', '310'],
  },
  {
    name: 'Zug',
    rooms: ['102', '114', '116', '125', '126', '204'],
  },
];

const BuildingRoomSelector = () => {
  const [selectedBuilding, setSelectedBuilding] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');

  const handleBuildingChange = (event) => {
    setSelectedBuilding(event.target.value);
    setSelectedRoom('');
  };

  const handleRoomChange = (event) => {
    setSelectedRoom(event.target.value);
  };

  return (
    <div>
      <label htmlFor="building-selector">Select a building:</label>
      <select id="building-selector" value={selectedBuilding} onChange={handleBuildingChange}>
        <option value="">--Select a building--</option>
        {buildings.map((building) => (
          <option key={building.name} value={building.name}>
            {building.name}
          </option>
        ))}
      </select>

      {selectedBuilding && (
        <div>
          <label htmlFor="room-selector">Select a room:</label>
          <select id="room-selector" value={selectedRoom} onChange={handleRoomChange}>
            <option value="">--Select a room--</option>
            {buildings.find((building) => building.name === selectedBuilding).rooms.map((room) => (
              <option key={room} value={selectedBuilding.charAt(0) + room}>
                {selectedBuilding.charAt(0) + room}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedRoom && <p>You have selected room: {selectedRoom}</p>}
    </div>
  );
};

export default BuildingRoomSelector;
