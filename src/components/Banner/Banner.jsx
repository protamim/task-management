import { Link } from "react-router-dom";
import collaboration from "../../assets/team-collaboration.jpg";

const Banner = () => {
  return (
    <>
      <section
        className="relative min-h-[65vh] bg-cover bg-center before:absolute before:h-full before:w-full before:bg-[#131212b4]"
        style={{ backgroundImage: `url(${collaboration})` }}
      >
        <div className="absolute z-50 flex items-center h-full text-white">
          <div className="max-w-[640px] pl-10 space-y-5">
            <p className="text-3xl">Unleash Productivity with <span className="text-lime-500">ReactTask</span></p>
            <p>
              The Ultimate Collaborative Task Management Platform Powered by
              React.js, Firebase, and MongoDB.
            </p>
            <p>
              Let&apos;s transform the way you work – Streamlined, Efficient,
              and Collaborative.
            </p>
            <p>🚀 Boost Your Productivity Today! 🚀</p>
            <button className="bg-purple-600 border border-transparent transition-all hover:bg-transparent hover:border-purple-600 px-5 rounded-md py-1">
              <Link to={"/dashboard"}>Let&apos;s Explore</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
