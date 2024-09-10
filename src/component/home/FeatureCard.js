// import FeatureCard from './FeatureCard';
// import { FaUsers, FaChartLine, FaEnvelope, FaCogs, FaLayerGroup, FaRegCalendarAlt, FaGoogle, FaPhone, FaRocket } from 'react-icons/fa';
const FeaturesSection = () => {
     //const features = [
      // { title: 'CRM', description: 'Grow Engagement', icon: <FaUsers /> },
    //     { title: 'B2B Integration', description: 'Grow Engagement', icon: <FaChartLine /> },
    //     { title: 'Mail to Lead', description: 'Grow Engagement', icon: <FaEnvelope /> },
    //     { title: 'APIs', description: 'Grow Engagement', icon: <FaCogs /> },
    //     { title: 'Marketing', description: 'Grow Engagement', icon: <FaLayerGroup /> },
    //     { title: 'Webform to Lead', description: 'Grow Engagement', icon: <FaRegCalendarAlt /> },
    //     { title: 'Call to Lead', description: 'Grow Engagement', icon: <FaPhone /> },
    //     { title: 'Google Integration', description: 'Grow Engagement', icon: <FaGoogle /> },
    //     { title: 'Productivity', description: 'Grow Engagement', icon: <FaRocket /> },
    // ];
    return (
        <div className="bg-blue-800 py-12">
            <div className="container mx-auto">
                <h2 className="text-white text-3xl font-bold text-center mb-8">BIZ Pro Top Features</h2>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
                    ))}
                </div> */}
                <div className="text-center mt-8">
                    <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">Explore More</button>
                </div>
            </div>
        </div>
    );
};
export default FeaturesSection;