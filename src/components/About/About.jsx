import { Github, Mail, Code, Palette, Smartphone, ExternalLink } from "lucide-react";
import { TelegramIcon } from "../icons/TelegramIcon";

export const About = ({ hasAnimated }) => {

  const features = [
    {
      icon: <Code className="w-8 h-8 mb-4 text-black" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices"
    },
    {
      icon: <Palette className="w-8 h-8 mb-4 text-black" />,
      title: "UI/UX Design",
      description: "Creating intuitive interfaces with attention to detail"
    },
    {
      icon: <Smartphone className="w-8 h-8 mb-4 text-black" />,
      title: "Responsive",
      description: "Mobile-first approach ensuring great experience on all devices"
    },
    {
      icon: <ExternalLink className="w-8 h-8 mb-4 text-black" />,
      title: "Performance",
      description: "Optimizing for fast load times and smooth interactions"
    }
  ]

  return (<section id="about" className="py-16 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <div className={`transition-all duration-1000 delay-200 ${hasAnimated.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="text-4xl font-bold mb-12 text-center"> About me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              I'm a frontend developer with 2 years of experience building modern web applications.
              My focus is on React ecosystem and creating intuitive, responsive user interfaces.
              I enjoy transforming ideas into functional, user-friendly digital products.
              Constantly learning and adapting to new technologies and best practices.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              I work with React, TypeScript, and modern tools to build scalable solutions.
              For me, good code is not just about functionality, but also about
              maintainability, performance, and great user experience.          </p>
            <div className="flex space-x-4">
              <Github className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors" />
              <TelegramIcon className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors" />
              <Mail className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                {feature.icon}
                <h3 className="font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>);
}