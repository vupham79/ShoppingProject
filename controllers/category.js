import model from './../database/models';

export async function getAllCategories(req, res) {
    try {
        const categories = await model.categories.findAll({
            attributes: ['id', 'name', 'description', 'image'],
        })
        if (categories) {
            return res.json(categories);
        } else {
            return res.json({ message: 'No category existing!' });
        }
    } catch (error) {
        return res.json({ message: 'Error', error: error });
    }
}

export async function createCategory(req, res) {
    try {
        const category = await model.categories.create({
            ...req.body,
        });
        if (category) {
            return res.json(category);
        } else {
            return res.json({ message: `Create category ${req.body.id} failed!` });
        }
    } catch (error) {
        return res.json({ message: 'Error', error: error });
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
            return res.json(category);
        } else {
            return res.json({ message: `Create category ${req.body.id} failed!` });
        }
    } catch (error) {
        return res.json({ message: 'Error', error: error });
    }
}

export async function deleteCategory(req, res) {
    try {
        const category = await model.categories.destroy({
            where: {
                id: req.params.id,
            }
        });
        if (category) {
            return res.json(category);
        } else {
            return res.json({ message: `Delete category ${req.params.id} failed!` })
        }
    } catch (error) {
        return res.json({ message: 'Error', error: error });
    }
}