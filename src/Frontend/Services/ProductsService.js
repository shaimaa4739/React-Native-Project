const PRODUCTS = [
  {
    itemID: 100,
    itemName: 'ReactProX Headset',
    itemPrice: 350,
    image: require('../../../assets/images/pizza.jpg'),
    description:
      'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).',
  },
  {
    itemID: 101,
    itemName: 'FastLane Toy Car',
    itemPrice: 600,
    image: require('../../../assets/images/pizza.jpg'),
    description:
      'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.',
  },
  {
    itemID: 102,
    itemName: 'SweetHome Cupcake',
    itemPrice: 2,
    image: require('../../../assets/images/pizza.jpg'),
    description:
      'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.',
  },
];
export function getProducts() {
  return PRODUCTS;
}
export function getProduct(id) {
  return PRODUCTS.find(product => product.id == id);
}
