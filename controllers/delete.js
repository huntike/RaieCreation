var rdvs = require('../module-rdv');


exports.action = (req,res) => {
    console.log('------------------------------------');
    console.log("id du rdv est supprimé :" + req.params.id);
    console.log('------------------------------------');
    rdvs.deleterdv(req.params.id,(err, results) => {
        res.redirect("/");
    });
}