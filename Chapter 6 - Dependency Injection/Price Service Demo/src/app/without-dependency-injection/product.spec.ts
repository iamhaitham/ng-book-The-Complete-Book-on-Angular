import { Product } from '../without-dependency-injection/product.model';

 describe('Product', () => {

 let product;

 beforeEach(() => {
 product = new Product(11);
 });

 describe('price', () => {
 it('is calculated based on the basePrice and the state', () => {
 expect(product.totalPrice('FL')).toBe(11.66); // <-- hmmm
 });
 })

 });