import model from './../database/models';

export async function getAllCategories(req, res) {
    try {
        const categories = await model.categories.findAll({
            attributes: ['id', 'name', 'description', 'image'],
        })
        if (categories) {
            return res.status(200).json(categories);
        } else {
            return res.status(400).json({ message: 'No category existing!' });
        }
    } catch (error) {
        return res.status(400).json({ message: 'Error', error: error.message });
    }
}

export async function createCategory(req, res) {
    try {
        const category = await model.categories.create({
            ...req.body,
        });
        if (category) {
            return res.status(200).json(category);
        } else {
            return res.status(400).json({ message: `Create category ${req.body.id} failed!` });
        }
    } catch (error) {
        return res.status(400).json({ message: 'Error', error: error.message });
    }
}

export async function updateCategory(req, res) {
    try {
        const category = await model.categories.update({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
        },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        if (category) {
            return res.status(200).json(category);
        } else {
            return res.status(400).json({ message: `Update category ${req.body.id} failed!` });
        }
    } catch (error) {
        return res.status(400).json({ message: 'Error', error: error.message });
    }
}

export async function deleteCategory(req, res) {
    try {
        const products = await model.products.destroy({
            where: {
                cat_id: req.params.cat_id,
            }
        })
        const category = await model.categories.destroy({
            where: {
                id: req.params.cat_id,
            }
        });
        if (products && category) {
            return res.status(200).json(category);
        } else {
            return res.status(400).json({ message: `Delete category ${req.params.id} failed!` });
        }
    } catch (error) {
        return res.status(400).json({ message: 'Error', error: error.message });
    }
}