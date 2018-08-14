const faker = require('faker');

// console.log(
//   'id, roomName, price, cleaningFee, serviceFee, minimumStay, maxAdults, maxChildren, maxInfants, taxes, funFactTitles, funFacts',
// );
const rooms = (start, numOfBookings) => {
  for (let i = start; i <= numOfBookings; i += 1) {
    const roomId = i;
    const roomName = `room${i}`;
    const price = faker.random.number({
      min: 50,
      max: 999,
    });
    const cleaningFee = Math.floor(Math.random() * 50) + 5;
    const serviceFee = Math.floor(Math.random() * 50) + 5;
    const minimumStay = Math.floor(Math.random() * 7) + 1;
    const maxAdults = Math.floor(Math.random() * 9) + 1;
    const maxChildren = Math.floor(Math.random() * 9) + 1;
    const maxInfants = Math.floor(Math.random() * 9) + 1;
    const taxes = Math.floor(Math.random() * 100) + 9;
    const funFactTitles = faker.lorem.words();
    const funFacts = faker.lorem.words();

    console.log(
      `${roomId}, ${roomName}, ${price}, ${cleaningFee}, ${serviceFee}, ${minimumStay}, ${maxAdults}, ${maxChildren}, ${maxInfants}, ${taxes}, ${funFactTitles}, ${funFacts}`,
    );
  }
};

rooms(1, 5000000);
setTimeout(() => {
  rooms(5000001, 10000000);
}, 100);
