DROP DATABASE sdc;
CREATE DATABASE sdc;

CREATE TABLE rooms(
  roomId: INT NOT NULL AUTO_INCREMENT,
  roomName: varchar(14) NOT NULL,
  price: INT NOT NULL,
  cleaningFee: INT NOT NULL,
  serviceFee: INT NOT NULL,
  minimumStay: INT NOT NULL,
  maxAdults: INT NOT NULL,
  maxChildren: INT NOT NULL,
  maxInfants: INT NOT NULL,
  taxes: INT NOT NULL,
  funFactTitles: varchar(280) NOT NULL,
  funFacts: varchar(280) NOT NULL,
);
CREATE TABLE bookings();

