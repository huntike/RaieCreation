var rdvs = require('../module-rdv');


exports.index = (req, res) => {
    // On récupère la liste des rendez-vous au moment ou on ouvre la page
    rdvs.listallrdv((err, results) => {
        res.render("listRdv", {allRdvs: results});
    });   
}