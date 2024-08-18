const express = require('express');
const router = express.Router();
const { DivPosition } = require('../config/db'); // Ensure correct import
router.get('/positions', async (req, res) => {
    try {
        const positions = await DivPosition.findAll({ order: [['position', 'ASC']] });
        res.json(positions); // Should return an empty array if no data is present
        console.log(positions);
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
});


router.post('/update-position', async (req, res) => {
    const { divId, newPosition } = req.body;
    try {
        const [updated] = await DivPosition.update({ position: newPosition }, { where: { div_id: divId } });
        if (updated) {
            const updatedPosition = await DivPosition.findOne({ where: { div_id: divId } });
            res.json(updatedPosition);
            console.log('Position Updated Success');
        } else {
            res.status(404).json({ error: 'Div not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
