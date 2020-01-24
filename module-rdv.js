//Définition de la base
var mysql = require('mysql');
var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'raie-creation'
});

//fonction ajouter un rendez-vous
var addrdv = function (rdv, callback) {
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        
        connection.query('INSERT INTO rdv SET ?', {firstname: rdv.firstname, name: rdv.surname, email: rdv.email, phone: rdv.phone, street: rdv.street, date_appointment: rdv.date_appointment}, (err, results, fields) => {
            connection.release();
            callback(err, results, fields);
        });
    });
}

//fonction lister tout les rendez-vous
var listallrdv = function (callback) {
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        
        connection.query('SELECT * FROM rdv', (err, results, fields) => {
            connection.release();
            callback(err, results, fields);
        });
    });
}
var deleterdv = function (rdvid, callback) {
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        
        connection.query('DELETE FROM rdv WHERE id = ?', rdvid, (err, results, fields) => {
            connection.release();
            callback(err, results, fields);
        });
    })
}



exports.addrdv = addrdv;
exports.deleterdv = deleterdv;
exports.listallrdv = listallrdv;