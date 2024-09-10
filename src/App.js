import './App.css';
import CompanySection from './component/home/CompanySection';
import FAQ from './component/home/FAQItem';
import BlogSection from './component/home/BlogPost';
import PricingPlan from './component/home/PricingPlan';
import TopFeatures from './component/home/TopFeatures';
import ManageTools from './component/home/ManageTools';
import Topbanner from './component/home/Topbanner';
import CallToAction from './component/home/CallToAction';
import Integration from './component/home/Integration';
import ExploreDashBoard from './component/home/ExploreDashBoard'; 
import Testimonials from './component/home/Testimonials';
import Footer from './component/home/Footer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Topbanner />
      <CompanySection />
      <TopFeatures />
      <ManageTools />
      <PricingPlan />
      <Testimonials/>
      <FAQ />
      <BlogSection />
      <CallToAction />
      <Integration />
      <ExploreDashBoard /> 
      <Footer/>
      
      {/* Updated component usage */}
    </>
  );
}

export default App;
