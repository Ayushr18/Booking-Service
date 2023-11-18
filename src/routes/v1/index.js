const express = require('express');

const {BookingController }= require('../../controllers/index');
// const {createChannel} = require('../../utils/messageQueue');
// const channel = await createChannel();
const bookingController = new BookingController();
const router = express.Router();

router.get('/info', (req, res) => {
    return res.json({message: 'Response form routes'});
})
router.post('/bookings', bookingController.create); 
router.post('/public', bookingController.sendMessageToQueue);

module.exports = router; 