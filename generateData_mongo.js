const faker = require('faker');
const mongoose = require('mongoose');
const db = require('./models/');

const bookings = (start, numOfBookings) => {
  for (let i = start; i <= numOfBookings; i += 1) {
    const item = {};
    item.roomId = i;
    item.roomName = `room${i}`;
    item.price = faker.random.number({
      min: 50,
      max: 999,
    });

    item.numberOfBookings = faker.random.number({
      min: 1,
      max: 10,
    });

    item.bookings = [];

    for (let j = 0; j < item.numberOfBookings; j++) {
      const booking = {};
      booking.checkIn = faker.date
        .between('2018-08-10', '2019-12-31')
        .toISOString()
        .substring(0, 10);
      booking.duration = faker.random.number({
        min: 1,
        max: 31,
      });

      item.bookings.push(booking);
    }

    item.serviceFee = faker.random.number({
      min: 15,
      max: 50,
    });

    item.cleaningFee = faker.random.number({
      min: 5,
      max: 35,
    });

    item.minimumStay = faker.random.number({
      max: 3,
    });

    item.maxAdults = faker.random.number({
      min: 2,
      max: 8,
    });

    item.maxChildren = faker.random.number({
      min: 2,
      max: 8,
    });

    item.maxInfants = faker.random.number({
      min: 2,
      max: 4,
    });

    item.taxes = faker.random.number({
      min: 5,
      max: 40,
    });

    const num1 = faker.random.number({
      max: 5,
    });

    const num2 = faker.random.number({
      max: 7,
    });

    const funFactTitles = [
      'This house is haunted.',
      'This was Elon Musk\'s first apartment.',
      'This place has a great view of the park.',
      'This place has amazing air conditioning.',
      'This is a very popular booking.',
      'People are talking about this place.',
    ];
    const funFacts = [
      'It’s been viewed 500+ times in the past week.',
      `It’s been booked ${item.taxes} times in the past year.`,
      'The owner takes pictures of all the tenants.',
      'This is a top rated listing.',
      'The owner is a gentleman and a scholar.',
      'The owner is well-liked in his community.',
      'It\'s rated in the top 5% for hospitality.',
      'It\'s rated in the top 5% for cleanliness.',
    ];

    item.funFactTitles = funFactTitles[num1];
    item.funFacts = funFacts[num2];

    console.log(`${JSON.stringify(item)}`);
  }
};

bookings(1, 2500000);
setTimeout(() => {
  bookings(2500001, 5000000);
}, 100);
