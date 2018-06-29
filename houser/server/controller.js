module.exports = {

    getAllProperties: (req, res) => {
        req.app.get('db').getAllProperties()
        .then( houseList => res.send(houseList))
        .catch( err => {
            console.log(err)
            res.send(err)
        })
    },
    
    addProperty: (req, res) => {
        const { name, address, city, state, zipcode } = req.body;
        req.app.get('db').addProperty([name, address, city, state, zipcode])
        .then( houseList => res.status(201).send(houseList))
        .catch( err => {
            console.log(err)
            res.status(500).send(err)
        })
    },

    update: (req, res) => {

    },
    delete: (req, res) => {

    }
}