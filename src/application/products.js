import { createProductDto } from "./dto/products.js";
import Product from "../infrastructure/schemas/Product.js";
import { ValidationError } from "../domain/errors/validation-error.js";
import { NotFoundError } from "../domain/errors/not-found-error.js";

export const getProducts = async (req, res) => {
  console.log(req.query);

  try {
    const { categoryId, sortOrder } = req.query;
    let query = {};

    // Filter by category if provided
    if (categoryId && categoryId !== "ALL") {
      query.categoryId = categoryId;
    }

    // Get products based on the query
    let productsQuery = Product.find(query);

    if (sortOrder) {
      const sortDirection = sortOrder === "lowToHigh" ? 1 : -1;
      productsQuery = productsQuery.sort({ price: sortDirection });

      // If price is a string, convert it to a number for sorting
      productsQuery = productsQuery.collation({
        locale: "en",
        numericOrdering: true,
      });
    }
    const products = await productsQuery;
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
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
    const product = await Product.findById(id).populate("categoryId");
    if (!product) throw new NotFoundError("Product Not Found");

    return res.status(200).json(product).send();
  } catch (error) {
    next(error);
  }
};
