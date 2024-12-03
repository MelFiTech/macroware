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
    <section id="projects" className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full text-center mb-4">
          <span className="inline-block px-3 sm:px-4 py-1 bg-gradient-to-r from-green-50 to-blue-50 rounded-full text-xs sm:text-sm">
            Projects
          </span>
        </div>

        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4">
            Our Work Speaks
          </h2>
          <p className="text-gray-500 text-base sm:text-lg px-4">
            See the projects that highlight our expertise and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-gray-500 text-xs sm:text-sm mb-1 sm:mb-2">{project.category}</p>
                <h3 className="text-lg sm:text-xl font-semibold line-clamp-2">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link 
            href="#all-projects"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white text-sm sm:text-base rounded-full hover:bg-gray-800 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}