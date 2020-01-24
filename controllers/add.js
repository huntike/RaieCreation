var rdvs = require('../module-rdv');
var rdvModel = require('../models/rdv').Rdv;

exports.index = (req, res) => {
    res.render('addRdv');
}

exports.action = (req, res) => {
    var rdv = rdvModel;
    rdv.firstname = req.body.firstname;
    rdv.surname = req.body.name;
    rdv.email = req.body.email;
    rdv.phone = req.body.phone;
    rdv.street = req.body.street;
    rdv.date_appointment = req.body.date_appointment;    

    rdvs.addrdv(rdv, (err, results) => {
        res.redirect("/");
    });
    
}