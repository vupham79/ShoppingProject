import * as CategoryController from "./../controllers/category";
import { Router } from "express";

const router = new Router();

router.get("/", CategoryController.getAllCategories);
router.post("/", CategoryController.createCategory);
router.get("/:id", CategoryController.getCategory);
router.patch("/:id", CategoryController.updateCategory);
router.delete("/:id", CategoryController.deleteCategory);

export default router;
