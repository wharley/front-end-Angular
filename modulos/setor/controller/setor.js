'use strict'

const model = require('../../../utils/modelLoader');

exports.read = (req, res) => {

    model.Setor.findAll({

    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};

exports.insert = (req, res) => {

    const dados = req.body;

    model.Setor
        .build(
            dados
        )
        .save()
        .then((data) => {
            res.send(true);
        }).catch((error) => {
            console.log(error);
            res.send(false);
        });
};

exports.update = (req, res) => {

    const dados = req.body;

    model.Setor
        .update(dados, {
            where: {
                id: dados.id
            }
        })
        .then((data) => {
            res.send(true);
        }).catch((error) => {
            console.log(error);
            res.send(false);
        });
};

exports.delete = (req, res) => {

    const dados = req.body;

    model.Setor
        .destroy({
            where: {
                id: dados.id
            }
        })
        .then((rowDeleted) => {
            res.send(true);
        }, (err) => {
            console.log(err);
            res.send(false);
        });
};

exports.getById = (req, res) => {

    const dados = req.body;

    model.Setor.findAll({
        where: {
            id: dados.id
        }
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send({ "data": 0 });
    });
}