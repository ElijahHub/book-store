import { Router } from "express";

import { getBook, getBookById } from "../controller/getBooks.controller.js";
import { createBook } from "../controller/createBook.controller.js";
import { updateBook } from "../controller/updateBook.controller.js";
import { deleteBook } from "../controller/deleteBook.controller.js";

const router = Router();

router.get("/", getBook);
router.get("/:id", getBookById);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
