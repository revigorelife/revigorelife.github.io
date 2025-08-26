import Header from "@/components/header";
import Hero from "@/components/hero";
import ShopByCategory from "@/components/shop-by-category";
import FeaturedProducts from "@/components/featured-products";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ShopByCategory />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}
