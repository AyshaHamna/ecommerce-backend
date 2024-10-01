import { createProductDto } from "./dto/products.js";
import Product from "../infrastructure/schemas/Product.js";
import {ValidationError} from "../domain/errors/validation-error.js";
import { NotFoundError } from "../domain/errors/not-found-error.js";

export const getProducts = async (req, res) => {
  console.log(req.query);

  if (req.query.categoryId) {
    const categoryId = req.query.categoryId;
    const filteredProducts = await Product.find({categoryId: categoryId});
    return res.status(200).json(filteredProducts);
  }
  const products = await Product.find();
  return res.status(200).json(products);
};

export const createProduct = async (req, res, next) => {

  try {
    //! We need to make sure that the data is always in the correct format
  const product = createProductDto.safeParse(req.body);
  if (!product.success) throw new ValidationError(product.error.message);

  await Product.create({
    categoryId: product.data.categoryId,
    image: product.data.image,
    name: product.data.name,
    price: product.data.price,
    description: product.data.description,
  });
  return res.status(201).send();
  } catch (error) {
    next(error);
  }
  
};

export const getProductById = async (req, res, next) => {
  try {
    const id = req.params.id;
  //const product = _products.find((product) => product.id === id); used when fetching from hard coded array
  const product = await Product.findById(id).populate('categoryId');
  if (!product) throw new NotFoundError("Product Not Found");
  
  return res.status(200).json(product).send();
  } catch (error) {
    next(error)
  }
  
};
