'use strict'

const model = require('../../../utils/modelLoader');

exports.read = (req, res) => {

    model.Produto.findAll({
        include: [
            { model: model.Setor }
        ]
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};

exports.insert = (req, res) => {

    const dados = req.body;

    model.Produto
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

    model.Produto
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

    model.Produto
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

    model.Produto.findAll({
        where: {
            id: dados.id
        },
        include: [
            { model: model.Setor }
        ]
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send({ "data": 0 });
    });
}