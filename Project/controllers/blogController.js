const blog = require("../model/blog.js");
const { blogs } = require("../model/index.js");

exports.createBlog = async (req, res) => {
  let data = {
    name: req.body.name,
    desc: req.blog.desc,
  };
  let createdBlog = await blog.create(data);
  if (createdBlog) {
    res.status(200).json({
      data: createdBlog,
      message: "Created Sucessfully",
    });
  }
  console.log(createdBlog);
};

exports.getBlogs = async (req, res) => {
  let result = await blogs.findAll();
  res.status(200).send(result);
};

exports.getBlogsById = async (req, res) => {
  let result = await blogs.findByPk(req.params.id);
  res.status(200).send(result);
};
