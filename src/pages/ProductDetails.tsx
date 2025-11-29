import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Leaf, Droplet, Recycle } from 'lucide-react';
import WellsipHeader from '../components/wellsip/WellsipHeader';
import WellsipFooter from '../components/wellsip/WellsipFooter';

const ProductDetails: React.FC = () => {
  const { productId } = useParams();

  const products = [
    { id: 'single-bottle', title: 'Single Bottle', subtitle: 'Wellsip 500ml', price: '$2.99' },
    { id: '6-pack', title: '6-Pack', subtitle: 'Wellsip 500ml', price: '$15.99', originalPrice: '$17.94' },
    { id: '12-pack', title: '12-Pack', subtitle: 'Wellsip 500ml', price: '$29.99', originalPrice: '$35.88' },
    { id: '24-pack', title: '24-Pack', subtitle: 'Wellsip 500ml', price: '$54.99', originalPrice: '$71.76' },
    { id: 'premium-glass', title: 'Premium Glass Bottle', subtitle: 'Wellsip 750ml', price: '$4.99' },
  ];

  const relatedProducts = products.filter(p => p.id !== productId).slice(0, 3);
  const currentProduct = products.find(p => p.id === productId) || products[0];

  const minerals = [
    { name: 'Calcium', description: 'Strengthens bones and teeth, supports muscle function.' },
    { name: 'Magnesium', description: 'Helps relax muscles, improves energy and metabolism.' },
    { name: 'Bicarbonates', description: 'Balances body pH, reduces acidity and improves digestion.' },
    { name: 'Silica', description: 'Contributes to the maintenance of connective tissue, hair, and skin structure.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <WellsipHeader />
      
      <main className="">
        {/* Back Button */}
        <div className="mx-auto max-w-7xl px-4 py-6">
          <Link 
            to="/wellsip" 
            className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-pink-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>
        </div>

        {/* Product Details Section */}
        <section className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="flex items-center justify-center bg-gradient-to-b from-zinc-50 to-white rounded-2xl p-12 border border-zinc-200">
              <img 
                src="/bottol-hero.png" 
                alt={currentProduct.title}
                className="h-96 object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-pink-600 uppercase tracking-wider mb-2">
                  {currentProduct.subtitle}
                </p>
                <h1 className="text-4xl font-bold text-zinc-900 mb-4">
                  {currentProduct.title}
                </h1>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-bold text-zinc-900">{currentProduct.price}</span>
                  {currentProduct.originalPrice && (
                    <span className="text-xl text-zinc-400 line-through">{currentProduct.originalPrice}</span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3 border-t border-zinc-200 pt-6">
                <h3 className="text-lg font-semibold text-zinc-900 mb-4">Product Details</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-600 mt-1">•</span>
                    <span className="text-zinc-700">Zero calories, sugar and additives.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-600 mt-1">•</span>
                    <span className="text-zinc-700">Origin Aravalli Hills. Enriched with naturally-occurring calcium, magnesium and essential electrolytes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-600 mt-1">•</span>
                    <span className="text-zinc-700">Pair it with a meal, use it as a mixer or enjoy chilled as is.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-600 mt-1">•</span>
                    <span className="text-zinc-700">Case of 8 glass bottles.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-600 mt-1">•</span>
                    <span className="text-zinc-700"><strong>Ingredients:</strong> Aava Natural Mineral Water, Carbon Dioxide.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-600 mt-1">•</span>
                    <span className="text-zinc-700">Packaging inspired by the biodiversity in our Aava Ecosystem.</span>
                  </li>
                </ul>
              </div>

              {/* Add to Cart Button */}
              <div className="relative">
                <button
                  disabled
                  className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 px-8 py-4 text-lg font-semibold text-white shadow-lg cursor-not-allowed opacity-75"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg animate-pulse">
                  Coming Soon
                </div>
              </div>
              
              {/* Contact Us Button */}
              <Link 
                to="/contact" 
                className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* The Role of Minerals Section */}
        <section className="mx-auto max-w-7xl px-4 py-16 border-t border-zinc-200 mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              The Role of Minerals
            </h2>
            <p className="text-lg text-zinc-600 max-w-4xl mx-auto leading-relaxed">
              Minerals play a vital role in maintaining overall health by supporting essential body functions. 
              They are involved in everyday processes that help the body stay balanced and healthy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {minerals.map((mineral, index) => (
              <div 
                key={mineral.name}
                className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <Droplet className="h-8 w-8 text-pink-600 mb-3" />
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">{mineral.name}</h3>
                <p className="text-sm text-zinc-600">{mineral.description}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-zinc-600 text-center mt-8 max-w-4xl mx-auto leading-relaxed">
            Publicly available scientific research and trusted clinical studies have examined how regular mineral intake
            supports functions like immunity, heart performance, longevity, and general wellbeing. These findings highlight
            the natural health advantages of consuming mineral-rich water every day.
          </p>
        </section>

        {/* Environmental Section */}
        <section className="mx-auto max-w-7xl px-4 py-16 border-t border-zinc-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Good for Health,<br />Better for the Environment
            </h2>
            <p className="text-lg text-zinc-600 max-w-4xl mx-auto leading-relaxed">
              Our bottles are crafted with the environment in mind, using high-quality recyclable and BPA-free materials
              that help reduce plastic waste and promote sustainability. By choosing eco-friendly packaging, we ensure that
              every bottle has a lower environmental impact and can be reused or recycled responsibly.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <span className="text-2xl">☀️</span>
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">No UV Radiation</h3>
            </div>
            <div className="text-center p-6 rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Droplet className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">BPA-free</h3>
            </div>
            <div className="text-center p-6 rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Recycle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">100% Recyclable</h3>
            </div>
            <div className="text-center p-6 rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">Zero Waste</h3>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
            <p className="text-zinc-700 leading-relaxed text-center max-w-4xl mx-auto">
              Our water is packed in PET bottles that are completely recyclable and free from BPA. While about 45% of PET
              is recycled worldwide, India achieves an impressive 92% recycling rate thanks to a strong network of waste
              collectors, scrap dealers, and dedicated recycling facilities.
            </p>
          </div>
        </section>

        {/* Related Products */}
        <section className="mx-auto max-w-7xl px-4 py-16 border-t border-zinc-200">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center bg-gradient-to-b from-zinc-50 to-white rounded-xl p-8 mb-4 border border-zinc-200">
                  <img
                    src="/bottol-hero.png"
                    alt={product.title}
                    className="h-40 object-contain"
                  />
                </div>
                <p className="text-xs font-medium text-pink-600 uppercase tracking-wider mb-1">
                  {product.subtitle}
                </p>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">{product.title}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-zinc-900">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-zinc-400 line-through">{product.originalPrice}</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <WellsipFooter />
    </div>
  );
};

export default ProductDetails;

