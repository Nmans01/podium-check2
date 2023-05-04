
 function Insights() {

    return (
        <div>Insights</div>
    );
}
    export default Insights;
// const buildings = [
//     {
//         name: 'BSC',
//         rooms: ['200', '233'],
//       },
//       {
//         name: 'Eshade',
//         rooms: ['163', '164', '182', '184', '187', '260H-lab', '270', '273', '280- key', '281', '360', '362', '368', '370', '373', '380', '382'],
//       },
//       {
//         name: 'Hoover',
//         rooms: ['107', '108-lab', '109', '110', '111-lab', '112', '114', '211', '212', '213', '214', '215'],
//       },
//       {
//         name: 'Lyet',
//         rooms: ['150', '151', '152', '153', '249', '250', '251', '252', '253'],
//       },
//       {
//         name: 'Musser',
//         rooms: ['108', '215', '232'],
//       },
//       {
//         name: 'Nicarry',
//         rooms: ['104', '106', '127', '129', '131', '201', '202', '203-lab', '204', '205', '206', '207', '208-lab', '210', '212', '228', '230', '232', '234'],
//       },
//       {
//         name: 'Steinman',
//         rooms: ['101', '204', '210', '211'],
//       },
//       {
//         name: 'Thompson',
//         rooms: ['105'],
//       },
//       {
//         name: 'Wenger',
//         rooms: ['001', '204', '211', '304', '310'],
//       },
//       {
//         name: 'Zug',
//         rooms: ['102', '114', '116', '125', '126', '204'],
//       },
//   ];
  
//   const buildingSelector = document.getElementById('building-selector');
//   const roomSelector = document.getElementById('room-selector');
  
//   buildingSelector.addEventListener('change', function() {
//     const selectedBuilding = this.value;
    
//     // Clear previous room options
//     roomSelector.innerHTML = '<option value="">--Select a room--</option>';
  
//     // Populate room options for selected building
//     const selectedBuildingObj = buildings.find(building => building.name === selectedBuilding);
//     if (selectedBuildingObj) {
//       selectedBuildingObj.rooms.forEach(room => {
//         const option = document.createElement('option');
//         option.value = selectedBuilding.charAt(0) + room;
//         option.text = selectedBuilding.charAt(0) + room;
//         roomSelector.appendChild(option);
//       });
//     }
//   });
  
//   roomSelector.addEventListener('change', function() {
//     const selectedRoom = this.value;
//     console.log(`You have selected room: ${selectedRoom}`);
//   });
  