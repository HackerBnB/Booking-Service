const siege = require('siege');

const random = function (num) {
  return Math.floor(Math.random() * num);
};

const stress = siege().on('3001');
// .concurrent(15);

for (let i = 1; i <= 80000; i += 1) {
  const roomNum = random(100000);
  stress.for(1).times.get(`/api/rooms/${roomNum}/bookings`);
}
stress.attack();
