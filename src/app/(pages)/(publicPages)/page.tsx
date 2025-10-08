import Clients from "@/components/main-ui-components/LandingPage/clients/Clients";
import CtaBanner from "@/components/main-ui-components/LandingPage/CtaBanner/CtaBanner";
import DevSection from "@/components/main-ui-components/LandingPage/DeveloperBanner/Developer";
import Faqs from "@/components/main-ui-components/LandingPage/Faqs/Faqs";
import FeaturedSlider from "@/components/main-ui-components/LandingPage/FeaturedIn/FeaturedIn";
import HeroSection from "@/components/main-ui-components/LandingPage/HeroSection/HeroSection";
import KPIs from "@/components/main-ui-components/LandingPage/KPIs/KPIs";
import ProductTab from "@/components/main-ui-components/LandingPage/ProductsTab/ProductTab";
import Trust from "@/components/main-ui-components/LandingPage/TrustSection/Trust";

const Page = () => {
  return (
    <div className="">
      <HeroSection/>
      <Trust/>
      <ProductTab/>
      <DevSection/>
      <Clients/>
      <KPIs/>
    
      <Faqs/>
      <CtaBanner/>
    </div>
  );
};

export default Page;
