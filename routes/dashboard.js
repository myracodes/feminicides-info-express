let express = require("express");
let router = express.Router();
const User = require('../models/User');
const Region = require('../models/Region')
const Events = require('../models/Event')

// /*Render dashboard*/

// router.get("/tableau-de-bord", (req, res, next) => {
//     res.render("dashboard")
// })

/*CRUD admin*/

//List of admins
router.get('/tableau-de-bord', (req, res, next) => {
    User.find()
    .then((users) => {
        res.status(200).json(users)
    })
    .catch((err) => res.status(500).json(err))
})

//One admin
router.get('/tableau-de-bord/:adminId', (req, res, next) => {
    User.findById(req.params.adminId)
    .then((user) => {
        res.status(200).json(user);
    })
    .catch((err) => res.status(500).json(err));
})

//Update admin info
router.patch('/tableau-de-bord/:adminId', (req, res, next) => {
    User.findByIdAndUpdate(req.params.adminId, req.body)
    .then((adminToUpdate) => {
        res.status(200).json(adminToUpdate);
    })
    .catch((err) => res.status(500).json(err));
})

//Delete admin info
router.delete('/tableau-de-bord/:adminId', (req, res, next) => {
    User.findByIdAndDelete(req.params.adminId)
    .then((adminToDelete) => {
        res.status(200).json(adminToDelete);
    })
    .catch((err) => res.status(500).json(err));
})

//Create new admin
router.post('/tableau-de-bord', (req, res, next) => {
    //est-ce qu'on ajoute l'ID du super admin dans un sous-admin ? pour savoir qui l'a créé

    User.create(req.body)
    .then((newUser) => {
        res.status(201).json(newUser);
    })
    .catch((err) => res.status(500).json(err));
})


/*Event CRUD*/





module.exports = router;