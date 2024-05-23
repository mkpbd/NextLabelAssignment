// Define the schema for the product variants
type Variant = {
  type: string;
  value: string;
};

// Define the schema for the inventory details
type Inventory = {
  quantity: number;
  inStock: boolean;
};

// Define the schema for the product
type Product = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Variant[];
  inventory: Inventory;
};

export default Product;
