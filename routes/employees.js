const { Client } = require('pg');
var connectionString = "postgres://postgres:1234@localhost:5432/testdb";

const client = new Client({
    connectionString: connectionString
});

client.connect();

exports.list = function (req, res) {

    client.query('SELECT * FROM employee', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.render('employee/list', { title: "Employees", data: result.rows });
    });

};

exports.add = function (req, res) {
    res.render('employee/add', { title: "Add Employee"  });
};

exports.edit = function (req, res) {

    var id = req.params.id;

    client.query('SELECT * FROM employee WHERE id=$1', [id], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.render('employee/edit', { title: "Edit Employee", data: result.rows });
    });

};

exports.save = function (req, res) {

    var cols = [req.body.name, req.body.job, req.body.department, req.body.salary, req.body.hire_date];

    client.query('INSERT INTO employee(name, job, department, salary, hire_date) VALUES($1, $2, $3, $4, $5) RETURNING *', cols, function (err, result) {
        if (err) {
            console.log("Error Saving : %s ", err);
        }
        res.redirect('/employees');
    });

};

exports.update = function (req, res) {

    var cols = [req.body.name, req.body.job, req.body.department, req.body.salary, req.body.hire_date, req.params.id];

    client.query('UPDATE employee SET name=$1, job=$2, department=$3, salary=$4, hire_date=$5 WHERE id=$6', cols, function (err, result) {
        if (err) {
            console.log("Error Updating : %s ", err);
        }
        res.redirect('/employees');
    });

};

exports.delete = function (req, res) {

    var id = req.params.id;

    client.query("DELETE FROM employee WHERE id=$1", [id], function (err, rows) {
        if (err) {
            console.log("Error deleting : %s ", err);
        }
        res.redirect('/employees');
    });

};


