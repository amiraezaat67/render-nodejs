import { Op } from "sequelize";
import Product from "../../../DB/models/product.model.js";
import User from "../../../DB/models/user.model.js";

export const createProduct = async (req, res) => {
  try {
    const { title, price, UserId } = req.body;

    const product = await Product.create({
      title,
      price,
      UserId,
    });

    res.json({ message: "Product Created", product });
  } catch (error) {
    console.log(error);
    res.json({ message: "Internal server error" });
  }
};

// list products
export const listProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      where: {
        price: {
          [Op.gt]: 1000,
        },
      },
      attributes: ["title", "price"], // projection
      include: [
        { model: User, attributes: ["name", "email"], where: { id: 3 } },
      ],
      limit: 1,
      offset: 2,
    });
    res.json({ products });
  } catch (error) {
    console.log(error);
    res.json({ message: "Internal server error" });
  }
};
