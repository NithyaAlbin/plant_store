import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <ProductCard />
    </>
  );
}