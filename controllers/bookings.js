const db = require('../models');

module.exports = {
  get: (req, res, next) => {
    const roomId = req.params.id;
    db.Booking.find({ roomId })
      .exec()
      .then((data) => {
        if (!data || !data.length) {
          next();
        } else {
          // console.log('sample items', data[0].bookings);
          res.json(data);
        }
      })
      .catch(next);
  },
  post: (req, res) => {
    // const roomId = req.params.id;
    const newBooking = new db.Booking(req.body);
    newBooking.save((err) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(newBooking);
    });
  },
  put: (req, res) => {
    const roomId = Number(req.params.id);
    console.log('this is room id:', typeof roomId);
    console.log(req.body);
    db.Booking.findByIdAndUpdate(roomId, { set: req.body }, (err, data) => {
      console.log('body', req.body);
      if (err) {
        console.log('error', err);
        res.status(500).send(err);
      }
      res.status(200).send(data);
    });
  },

  delete: (req, res) => {
    const roomId = req.params.id;
    db.Booking.findOneAndDelete(roomId, (err, data) => {
      if (err) {
        res.status(500).send(err);
      }
      res.send();
    });
  },

  create(req, res) {},
};
