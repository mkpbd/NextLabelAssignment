// Define the schema for the product variants
interface Variant {
  type: string;
  value: string;
}

// Define the schema for the inventory details
interface Inventory {
  quantity: number;
  inStock: boolean;
}

// Define the schema for the product
interface Product {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Variant[];
  inventory: Inventory;
}

export default Product;
