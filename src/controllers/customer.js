import { Customers } from "../database/models";

export async function getAllCustomers(req, res) {
  try {
    const customers = await Customers.findAll();
    if (customers) {
      return res.status(200).json(customers);
    } else {
      return res.status(400).json({ message: "No customers existing!" });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

export async function getCustomer(req, res) {
  try {
    const customer = await Customers.findOne({
      attributes: [
        "id",
        "forename",
        "surname",
        "add1",
        "add2",
        "add3",
        "postcode",
        "phone",
        "email",
        "registered"
      ],
      where: { id: req.params.id }
    });
    if (customer) {
      return res.status(200).json(customer);
    } else {
      return res
        .status(400)
        .json({ message: `Customer ${req.params.id} not existing!` });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

export async function createCustomer(req, res) {
  try {
    const customer = await Customers.create({
      forename: req.body.forename,
      surname: req.body.surname,
      add1: req.body.add1,
      add2: req.body.add2,
      add3: req.body.add3,
      postcode: req.body.postcode,
      phone: req.body.phone,
      email: req.body.email,
      registered: req.body.registered
    });
    if (customer) {
      return res.status(200).json(customer);
    } else {
      return res.status(400).json({ message: "Create customer failed!" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Error", error: error.message });
  }
}

export async function updateCustomer(req, res) {
  try {
    const customer = await Customers.update(
      {
        forename: req.body.forename,
        surname: req.body.surname,
        add1: req.body.add1,
        add2: req.body.add2,
        add3: req.body.add3,
        postcode: req.body.postcode,
        phone: req.body.phone,
        email: req.body.email,
        registered: req.body.registered
      },
      {
        where: {
          id: req.params.id
        }
      }
    );
    if (customer) {
      return res.status(200).json(customer);
    } else {
      return res.status(400).json({ message: "Update customer failed!" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Error", error: error.message });
  }
}

export async function deleteCustomer(req, res) {
  try {
    let t1 = model.sequelize.transaction();
    await Logins.destroy({ where: { id: req.params.id } }, { transaction: t1 });

    const customer = await Customers.destroy({
      where: {
        id: req.params.id
      }
    });
    if (customer) {
      return res.status(200).json(customer);
    } else {
      return res
        .status(400)
        .json({ message: `Delete customer ${req.params.id} failed!` });
    }
  } catch (error) {
    return res.status(400).json({ message: "Error", error: error.message });
  }
}
