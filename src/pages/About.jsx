import React from 'react';
import aboutimg from '../images/incubationImg.jpg'

const About = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dots.png')] opacity-20"></div>

      {/* Shapes */}
      <div className="absolute top-10 left-10 md:w-24 md:h-24 w-16 h-16 bg-blue-400 rounded-full opacity-30"></div>
      <div className="absolute top-20 right-10 md:w-40 md:h-40 w-24 h-24 bg-green-400 opacity-40"></div>
      <div className="absolute bottom-20 left-20 md:w-32 md:h-32 w-20 h-20 border-4 border-red-500 rounded-full opacity-40"></div>
      <div className="absolute top-1/3 right-1/4 md:w-16 md:h-16 w-12 h-12 bg-yellow-400 rounded opacity-50"></div>
      <div className="absolute top-1/4 left-1/3 md:w-24 md:h-24 w-16 h-16 bg-purple-300 rounded-full opacity-25"></div>
      <div className="absolute bottom-32 right-32 md:w-36 md:h-36 w-24 h-24 bg-pink-500 opacity-30"></div>
      <div className="absolute bottom-10 left-1/4 md:w-48 md:h-48 w-32 h-32 border-8 border-blue-600 rounded-full opacity-30"></div>
      <div className="absolute top-2/3 left-1/6 md:w-28 md:h-28 w-20 h-20 bg-orange-400 rounded opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            About Infrashare
          </h2>
          <p className="text-gray-700 text-[20px] mt-4 text-lg max-w-2xl mx-auto">
            Empowering research and development through streamlined access to scientific infrastructure across institutions nationwide.
          </p>
        </div>

        {/* Content with Image Section */}
        <div className="md:flex md:items-center md:space-x-8">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img
              src= {aboutimg}
              alt="Equipment Showcase"
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 text-[18px] mb-4 font-poppins">
              Infrashare is an initiative launched to transform how scientific infrastructure is shared across the nation. Our mission is to break down institutional barriers, fostering collaboration by providing a centralized platform for researchers, innovators, and industries to access cutting-edge equipment without limitations. We believe in empowering minds through shared resources, enabling better, faster, and more cost-effective scientific advancements.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 text-[18px] font-poppins">
              Our vision is to create a nationwide network of equipment and infrastructure that ensures no research project is hindered by a lack of resources. Infrashare envisions an inclusive and dynamic research ecosystem where every researcher, student, or professional has equal access to the tools necessary for innovation, driving progress across every field of science, technology, and engineering.
            </p>
          </div>
        </div>

        {/* New Section: Impact and Vision */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6">
            Impact and Vision
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">
                Fostering Collaboration
              </h4>
              <p className="text-gray-600 text-[17px] cursor-pointer">
                Infrashare connects research institutions, universities, and industry partners, enabling seamless collaboration and shared innovation. Through this, we aim to bridge gaps between knowledge and application, creating a cohesive research network across the country.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">
                Reducing Costs and Redundancy
              </h4>
              <p className="text-gray-600 text-[17px] cursor-pointer">
                By sharing high-end, expensive equipment, Infrashare helps institutions avoid duplicate purchases, reducing overall costs while ensuring that resources are used to their fullest potential.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">
                Supporting Innovation
              </h4>
              <p className="text-gray-600 text-[17px] cursor-pointer">
                Our platform empowers the next generation of innovators, ensuring they have access to the tools and infrastructure necessary to bring their ideas to life, no matter where they are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
