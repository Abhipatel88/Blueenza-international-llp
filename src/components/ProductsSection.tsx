
import { Button } from "@/components/ui/button";
import { ArrowRight, Wheat, Droplets, Leaf, Grape, TreePine, Package } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Food Grains",
      description: "Premium quality rice, wheat, barley, and other cereal grains sourced from the finest agricultural regions.",
      icon: Wheat,
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      id: 2,
      name: "Oil Seeds",
      description: "High-quality sunflower seeds, soybeans, sesame seeds, and other oil-bearing seeds for global markets.",
      icon: Droplets,
      image: "https://images.unsplash.com/photo-1628540700846-27ce9fd32638?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-yellow-400 to-amber-500"
    },
    {
      id: 3,
      name: "Pulses & Legumes",
      description: "Nutritious lentils, chickpeas, beans, and peas meeting international quality standards.",
      icon: Leaf,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      id: 4,
      name: "Spices & Herbs",
      description: "Aromatic spices and fresh herbs sourced directly from organic farms and traditional growers.",
      icon: Grape,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-red-400 to-pink-500"
    },
    {
      id: 5,
      name: "Organic Products",
      description: "Certified organic agricultural products grown without synthetic pesticides or fertilizers.",
      icon: TreePine,
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 6,
      name: "Processed Foods",
      description: "Value-added processed food products including flours, oils, and ready-to-eat items.",
      icon: Package,
      image: "https://images.unsplash.com/photo-1556909114-6093864400e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-purple-400 to-blue-500"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-blue-600 font-medium text-sm">Our Product Range</span>
          </div>
          
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
            Premium Quality
            <span className="text-gradient block">Agricultural Products</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in sourcing and trading the finest agricultural products from around the world, ensuring quality, sustainability, and reliability in every shipment.
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group glass-card rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} - Premium quality agricultural products from Bluenza International`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="absolute top-4 right-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${product.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="font-poppins font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {product.description}
                </p>
                
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-2 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center animate-fade-in">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
