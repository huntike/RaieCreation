var add_controller = require('./controllers/add');
var list_controller = require('./controllers/list');

exports.init = (app) => {
    //route d affichage de la list
    app.get('/', (req, res) => {
        list_controller.index(req, res);
    });
    //route affiche du formulaire d ajoute de rdv
    app.get('/add', (req, res) => {
        add_controller.index(req, res);
    });
    //route action de l ajout de rdv
    app.post('/add', (req, res) => {
        add_controller.action(req, res);
    });

}