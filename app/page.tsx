import Nav from "./components/Nav";
import Head from "./components/Head";
import Tools from "./components/Tools";
import Hero from "./components/Hero";

export default function PageLayout() {
  return (
    <div className="min-h-screen">
      {/* Fixed Navigation at the top */}
      <Nav />

      {/* Main Content Layout */}
      <div className="mt-16 flex flex-col lg:flex-row gap-6 px-6">
        {/* Left Section (30%) - Tools Section */}
        <div className="w-full lg:w-[30%]">
          <Tools />
        </div>

        {/* Right Section (70%) */}
        <div className="w-full lg:w-[70%] flex flex-col gap-4">
          {/* Head Section inside 70% */}
          <Head />

          {/* Hero Section */}
          <Hero />
        </div>
      </div>
    </div>
  );
}
