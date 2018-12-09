import model from './../database/models';

export async function getAllDeliveryAddresses(req, res) {
    try {
        const deliveryAddresses = await model.delivery_addresses.findAll({
            attributes: ['id', 'forename', 'surname', 'add1', 'add2', 'add3', 'postcode', 'phone', 'email'],
        })
        if (deliveryAddresses) {
            return res.status(200).json(deliveryAddresses);
        } else {
            return res.status(400).json({ message: 'No delivery address existing!' });
        }
    } catch (error) {
        return res.status(400).json({ message: 'Error', error: error.message });
    }
}

export async function createDeliveryAddress(req, res) {
    try {
        const deliveryAddress = await model.delivery_addresses.create(
            {
                forename: req.body.forename,
                surname: req.body.surname,
                add1: req.body.add1,
                add2: req.body.add2,
                add3: req.body.add3,
                postcode: req.body.postcode,
                phone: req.body.phone,
                email: req.body.email,
            }
        )
        if (deliveryAddress) {
            return res.status(200).json(deliveryAddress);
        } else {
            return res.status(400).json({ message: `Create delivery address '${req.body.id}' failed!` });
        }
    } catch (error) {
        return res.status(400).json({ message: 'Error', error: error.message });
    }
}

export async function updateDeliveryAddress(req, res) {
    try {
        const deliveryAddress = await model.delivery_addresses.update(
            {
                forename: req.body.forename,
                surname: req.body.surname,
                add1: req.body.add1,
                add2: req.body.add2,
                add3: req.body.add3,
                postcode: req.body.postcode,
                phone: req.body.phone,
                email: req.body.email,
            },
            {
                where: {
                    id: req.params.id,
                }
            }
        )
        if (deliveryAddress) {
            return res.status(200).json(deliveryAddress);
        } else {
            return res.status(400).json({ message: `Update delivery address ${req.params.id} failed!` });
        }
    } catch (error) {
        return res.status(400).json({ message: 'Error', error: error.message });
    }
}

export async function deleteDeliveryAddress(req, res) {
    try {
        const deliveryAddress = await model.delivery_addresses.destroy({
            where: {
                id: req.params.id,
            }
        })
        if (deliveryAddress) {
            return res.status(200).json(deliveryAddress);
        } else {
            return res.status(400).json({ message: `Delete delivery address ${req.params.id} failed!` });
        }
    } catch (error) {
        return res.status(400).json({ message: 'Error', error: error.message });
    }
}