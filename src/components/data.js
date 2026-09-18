import crystal from "../assets/crystal.jpg";
import images6 from "../assets/images (6).jpg";
import images12 from "../assets/images (12).jpg";
import luster from "../assets/luster.jpg";
import corona from "../assets/corona.jpg";
import mgic from "../assets/mgic.jpg";
import magivluster from "../assets/magiv luster.jpg";

const products = [
  {
    id: 'crystal',
    title: 'Crystal Lamp',
    description: 'Elegant crystal lamp with adjustable brightness.',
    image: crystal,
    price: 99.99,
    category: 'Decorative Lights',
    path: '/luster-crystal',
  },
  {
    id: 'images6',
    title: 'luster crestal',
    description: 'Modern lighting solution with sleek design.',
    image: images6,
    price: 149.99,
    category: 'Smart Lighting',
    path: '/luster-crystal',
  },
  {
    id: 'images12',
    title: 'aplik lamp',
    description: 'Versatile ambient light for any room.',
    image: images12,
    price: 79.99,
    category: 'Ambient Lights',
    path: '/aplique',
  },
  {
    id: 'luster',
    title: 'Luster LED ',
    description: 'Premium luster lamp with warm glow.',
    image: luster,
    price: 129.99,
    category: 'Decorative Lights',
    path: '/luster-led',
  },
  {
    id: 'lusterled',
    title: 'Lustre corona ',
    description: 'Modern lighting with app control, adaptive brightness, and premium design.',
    image: corona,
    price: 129.99,
    category: 'Smart Lighting',
    path: '/luster-led',
  },
   {
    id: 'magic-luster',
    title: 'Magic Luster Lamp',
    description: 'Smart ambient light with mood scenes and voice-ready controls.',
    image: magivluster,
    price: 89.99,
    category: 'Ambient Lights',
    path: '/luster-crystal',
  },
  {
    id: 'mgic',
    title: 'Magic LED Lamp',
    description: 'A magical lighting solution that adds a touch of wonder to any space.',
    image: mgic,
    price: 149.99,
    category: 'Smart Lighting',
    path: '/luster-led',
  },
];

const assetContext = require.context("../assets", false, /\.(jpg|jpeg|png)$/i);
const galleryImages = assetContext
  .keys()
  .filter((assetPath) =>
    /mmexport|ChatGPT|01_wall_sconce|04_flower|lustercrestal/i.test(assetPath)
  )
  .map((assetPath, index) => ({
    id: `gallery-${index + 1}`,
    title: `Product Gallery ${index + 1}`,
    description: 'Additional product photo from the Q LIGHT collection.',
    image: assetContext(assetPath),
    price: 0,
    category: 'Product Gallery',
    path: '/products',
  }));

const allProducts = [...products, ...galleryImages];

export default allProducts;