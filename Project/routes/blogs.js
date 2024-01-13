const {
  createBlog,
  getBlogs,
  getBlogsById,
} = require("../controllers/blogController");

const router = require("express").Router();

router.post("/create", createBlog);
router.get("/get", getBlogs);
router.get("/get/:id", getBlogsById);

module.exports = router;
