import model from './../database/models';

export async function getAllDeliveryAddresses(req, res) {
    try {
        const deliveryAddresses = await model.delivery_addresses.findAll({
            attributes: ['id', 'forename', 'surname', 'add1', 'add2', 'add3', 'postcode', 'phone', 'email'],
        })
        if (deliveryAddresses) {
            return res.json(deliveryAddresses);
        } else {
            return res.json({ message: 'No delivery address existing!' });
        }
    } catch (error) {
        return res.json({ message: 'Error', error: error });
    }
}

export async function createDeliveryAddress(req, res) {
    try {
        const deliveryAddress = await model.delivery_addresses.create({
            ...req.body
        })
        if (deliveryAddress) {
            return res.json(deliveryAddress);
        } else {
            return res.json({ message: `Create delivery address '${req.body.id}' failed!` });
        }
    } catch (error) {
        return res.json({ message: 'Error', error: error });
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
            return res.json(deliveryAddress);
        } else {
            return res.json({ message: `Update delivery address ${req.params.id} failed!` });
        }
    } catch (error) {
        return res.json({ message: 'Error', error: error });
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
            return res.json(deliveryAddress);
        } else {
            return res.json({ message: `Delete delivery address ${req.params.id} failed!` });
        }
    } catch (error) {
        return res.json({ message: 'Error', error: error });
    }
}