const models = require("../models");

module.exports = function (app) {

    app.get('/superheros', (req, res) =>

        models
            .Heroes
            .findAll()
            .then(result => res.json(result))
    )


    app.post('/superheros', (req, res) =>

        models
            .Heroes
            .create({
                name: 'Sophie',
                age: 21
            })
            .then(result => res.json(result))
    )


    app.delete('/superheros/:id', (req, res) =>
        models
            .Heroes
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(() => console.log("Done"))
    );


    app.put('/:id', (req, res) =>
        models
            .Heroes
            .update({ age: 20 }, {
                where: {
                    id: req.params.id
                }
            }).then(() => console.log("Done"))
    );

}