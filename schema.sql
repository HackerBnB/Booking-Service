DROP DATABASE sdc;
CREATE DATABASE sdc;

CREATE TABLE IF NOT EXISTS rooms(
  roomId SERIAL PRIMARY KEY,
  roomName varchar(14) UNIQUE NOT NULL,
  price INT NOT NULL,
  cleaningFee INT NOT NULL,
  serviceFee INT NOT NULL,
  minimumStay INT NOT NULL,
  maxAdults INT NOT NULL,
  maxChildren INT NOT NULL,
  maxInfants INT NOT NULL,
  taxes INT NOT NULL,
  funFactTitles varchar(280) NOT NULL,
  funFacts varchar(280) NOT NULL
);
CREATE TABLE IF NOT EXISTS bookings(
  id SERIAL PRIMARY KEY,
  roomId INTEGER REFERENCES rooms(roomId),
  checkIn DATE NOT NULL,
  duration INT NOT NULL
);

COPY rooms FROM '/Users/joshcho/Documents/sdc/Booking-Service/rooms.csv' WITH (FORMAT csv);

COPY bookings from '/Users/joshcho/Documents/sdc/Booking-Service/bookings.csv' WITH (FORMAT csv);
-- COPY bookings from '/Users/joshcho/Documents/sdc/Booking-Service/bookings1.csv' WITH (FORMAT csv);
-- COPY bookings from '/Users/joshcho/Documents/sdc/Booking-Service/bookings2.csv' WITH (FORMAT csv);
-- COPY bookings from '/Users/joshcho/Documents/sdc/Booking-Service/bookings3.csv' WITH (FORMAT csv);
-- COPY bookings from '/Users/joshcho/Documents/sdc/Booking-Service/bookings4.csv' WITH (FORMAT csv);
-- COPY bookings from '/Users/joshcho/Documents/sdc/Booking-Service/bookings5.csv' WITH (FORMAT csv);
-- COPY bookings from '/Users/joshcho/Documents/sdc/Booking-Service/bookings6.csv' WITH (FORMAT csv);
-- COPY bookings from '/Users/joshcho/Documents/sdc/Booking-Service/bookings7.csv' WITH (FORMAT csv);
-- COPY bookings from '/Users/joshcho/Documents/sdc/Booking-Service/bookings8.csv' WITH (FORMAT csv);
-- COPY bookings from '/Users/joshcho/Documents/sdc/Booking-Service/bookings9.csv' WITH (FORMAT csv);
