import model from './../database/models';

export async function getAllCustomers(req, res) {
    try {
        const customers = await model.customers.findAll();
        if (customers) {
            return res.json(customers);
        } else {
            return res.json({ message: 'No customers existing!' });
        }
    } catch (error) {
        return res.json({ error: error.message });
    }
}

export async function createCustomer(req, res) {
    try {
        const customer = await model.customers.create({
            ...req.body
        })
        if (customer) {
            return res.json(customer);
        } else {
            return res.json({ message: 'Create customer failed!' });
        }
    } catch (error) {
        return res.json({ message: 'Error', error: error.message });
    }
}

export async function updateCustomer(req, res) {
    try {
        const customer = await model.customers.update(
            {
                forename: req.body.forename,
                surname: req.body.surname,
                add1: req.body.add1,
                add2: req.body.add2,
                add3: req.body.add3,
                postcode: req.body.postcode,
                phone: req.body.phone,
                email: req.body.email,
                registered: req.body.registered,
            },
            {
                where: {
                    id: req.params.id,
                }
            }
        )
        if (customer) {
            return res.json(customer);
        } else {
            return res.json({ message: 'Update customer failed!' });
        }
    } catch (error) {
        return res.json({ message: 'Error', error: error.message });
    }
}

export async function deleteCustomer(req, res) {
    try {
        const customer = await model.customers.destroy({
            where: {
                id: req.params.id,
            }
        })
        if (customer) {
            return res.json(customer);
        } else {
            return res.json({ message: 'Delete customer failed!' });
        }
    } catch (error) {
        return res.json({ message: 'Error', error: error.message });
    }
}