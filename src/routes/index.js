const { Router } = require('express');
const router = Router();

router.get('/test',(req, res) => {
    const data= {
        "nombre": "Mailo"


    };
    res.json (data);
});

module.exports = router;