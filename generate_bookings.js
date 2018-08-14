const faker = require('faker');

const bookings = (start, numOfBookings) => {
  for (let i = start; i <= numOfBookings; i += 1) {
    const roomId = faker.random.number({
      min: 1,
      max: 1000000,
    });
    const checkIn = faker.date
      .between('2018-08-10', '2019-12-31')
      .toISOString()
      .substring(0, 10);
    const duration = faker.random.number({
      min: 1,
      max: 31,
    });
    console.log(`${i}, ${roomId}, ${checkIn}, ${duration}`);
  }
};
bookings(1, 5000000);
setTimeout(() => {
  bookings(5000001, 10000000);
});
