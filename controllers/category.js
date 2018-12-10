import model from "./../database/models";

export async function getAllCategories(req, res) {
  try {
    const categories = await model.categories.findAll({
      attributes: ["id", "name", "description", "image"]
    });
    if (categories) {
      return res.status(200).json(categories);
    } else {
      return res.status(400).json({ message: "No category existing!" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Error", error: error.message });
  }
}

export async function getCategory(req, res) {
  try {
    const category = await model.categories.findOne({
      attributes: ["id", "name", "description", "image"],
      where: {
        id: req.params.id
      }
    });
    if (category) {
      return res.status(200).json(category);
    } else {
      return res
        .status(400)
        .json({ message: `Category ${req.params.id} not existing!` });
    }
  } catch (error) {
    return res.status(400).json({ message: "Error", error: error.message });
  }
}

export async function createCategory(req, res) {
  try {
    const category = await model.categories.create({
      name: req.body.name,
      description: req.body.description,
      image: req.body.image
    });
    if (category) {
      return res.status(200).json(category);
    } else {
      return res
        .status(400)
        .json({ message: `Create category ${req.body.id} failed!` });
    }
  } catch (error) {
    return res.status(400).json({ message: "Error", error: error.message });
  }
}

export async function updateCategory(req, res) {
  try {
    const category = await model.categories.update(
      {
        name: req.body.name,
        description: req.body.description,
        image: req.body.image
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
      return res
        .status(400)
        .json({ message: `Update category ${req.body.id} failed!` });
    }
  } catch (error) {
    return res.status(400).json({ message: "Error", error: error.message });
  }
}

export async function deleteCategory(req, res) {
  try {
    let t1 = model.sequelize.transaction();
    await model.products.destroy(
      { where: { cat_id: req.params.id } },
      { transaction: t1 }
    );
    await model.categories.destroy(
      { where: { id: req.params.id } },
      { transaction: t1 }
    );
    return res
      .status(200)
      .json({ message: `Delete category ${req.params.id} successfully!` });
  } catch (error) {
    return res.status(400).json({ message: "Error", error: error.message });
  }
}
