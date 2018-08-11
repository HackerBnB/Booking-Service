const faker = require('faker');

console.log('id, roomName, roomId, numberOfBookings, checkIn, duration');
const dates = (start, numOfBookings) => {
  for (let i = start; i <= numOfBookings; i += 1) {
    const numberOfBookings = faker.random.number({
      min: 1,
      max: 10,
    });
    for (let j = 0; j <= numberOfBookings; j += 1) {
      const checkIn = faker.date.between('2018-08-10', '2019-12-31');
      const duration = faker.random.number({
        min: 1,
        max: 31,
      });
      const numOfAdults = Math.floor(Math.random() * 9) + 1;
      const numOfChildren = Math.floor(Math.random() * 9) + 1;
      const numOfInfants = Math.floor(Math.random() * 9) + 1;
      console.log(
        `${i}-${j}, ${i}, ${checkIn}, ${duration}, ${numOfAdults}, ${numOfChildren}, ${numOfInfants}`,
      );
    }
  }
};
dates(9000001, 10000000);
