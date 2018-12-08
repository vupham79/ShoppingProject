import model from './../database/models';

export async function getAllProducts(req, res) {
    try {
        const products = await model.products.findAll({
            attributes: ['id', 'cat_id', 'name', 'description', 'image', 'price'],
        })
        if (products) {
            return res.status(200).json(products);
        } else {
            return res.status(400).json({ message: 'No products existing!' });
        }
    } catch (error) {
        return res.status(400).json({ message: 'Error', error: error });
    }
}

export async function createProduct(req, res) {
    try {
        const product = await model.products.create({
            ...req.body,
        });
        if (product) {
            return res.status(200).json(product);
        } else {
            return res.status(400).json({ message: `Create product ${req.body.id} failed!` });
        }
    } catch (error) {
        return res.status(400).json({ message: 'Error', error: error });
    }
}

export async function updateProduct(req, res) {
    try {
        const product = await model.products.update({
            cat_id: req.body.cat_id,
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            price: req.body.price,
        },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        if (product) {
            return res.status(200).json(product);
        } else {
            return res.status(400).json({ message: `Update product ${req.body.id} failed!` });
        }
    } catch (error) {
        return res.status(400).json({ message: 'Error', error: error });
    }
}

export async function deleteProduct(req, res) {
    try {
        const product = await model.products.destroy({
            where: {
                id: req.params.id,
            }
        });
        if (product) {
            return res.status(200).json(product);
        } else {
            return res.status(400).json({ message: `Delete product ${req.params.id} failed!` })
        }
    } catch (error) {
        return res.status(400).json({ message: 'Error', error: error });
    }
}