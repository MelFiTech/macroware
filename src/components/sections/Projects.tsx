import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "Kiakia - Logistics & Delivery Platform",
      category: "Logistics Solutions",
      image: "/images/Web.png"
    },
    {
      title: "Letlo - Shortlet Apartment Rentals", 
      category: "Real Estate Platform",
      image: "/images/Web.png"
    },
    {
      title: "Boost - Car Rental Service",
      category: "Vehicle Rental", 
      image: "/images/Web.png"
    },
    {
      title: "Zinex - Gift Card Trading Platform",
      category: "E-Commerce",
      image: "/images/Web.png"
    },
    {
      title: "FoodFlex - Restaurant Ordering",
      category: "Food Service",
      image: "/images/Web.png"
    },
    {
      title: "TravelBuddy - Trip Planning",
      category: "Travel & Tourism",
      image: "/images/Web.png"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full text-center mb-4">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-green-50 to-blue-50 rounded-full text-sm">
            Projects
          </span>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4">
            Our Work Speaks
          </h2>
          <p className="text-gray-500 text-lg">
            See the projects that highlight our expertise and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">{project.category}</p>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="#all-projects"
            className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
} 