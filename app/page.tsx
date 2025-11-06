import HomeButton from "@/components/HomeButton";
import InfoNum from "@/components/InfoNum";
import InfoText from "@/components/InfoText";
import { FaEye, FaMedal, FaPuzzlePiece } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen text-[#023e8a]">
      <div className="flex flex-col items-center w-full max-w-xl mx-auto mt-8 px-4">
        <h1 className="text-3xl font-light tracking-widest">
          We are Government
        </h1>
        <p className="mt-4 text-center text-sm leading-relaxed">
          The government is the system or group of people that organizes, governs,
          and makes decisions for a society or country.
        </p>

        <div className="mt-6">
          <HomeButton />
        </div>
      </div>

      <div
        style={{
          borderRadius: '22px',
          background: '#e0e0e0',
          boxShadow: '14px 14px 40px #aaaaaa, -14px -14px 40px #ffffff',
        }}
        className="w-full h-full px-6 py-4 mt-16"
      >
        <div className="grid grid-cols-3 gap-4">
          <InfoText icon={FaEye} title={"Audience"} content={"The group of people a product, service, or message is intended for. Understanding your audience helps tailor content, marketing, and communication effectively."} />
          <InfoText icon={FaMedal} title={"Branding"} content={"The process of creating a unique identity for a product, service, or company, including its name, logo, colors, and messaging, to differentiate it and build recognition."} />
          <InfoText icon={FaPuzzlePiece} title={"Production"} content={"The process of creating goods, content, or services. In media or marketing, it refers to the stages of planning, designing, and delivering the final product, whether it’s a video, advertisement, or physical item."} />
        </div>
      </div>

      <div className="flex gap-10 mt-20">
        <div className="w-1/2">
          <div className="relative w-100 h-90 mx-auto">
            {/* SVG with blob shape for clipping */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="blob-clip">
                  <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.2C64.8,55.2,53.8,66.6,40.3,73.8C26.8,81,10.8,83.9,-4.8,81.6C-20.4,79.3,-35.6,71.8,-48.9,63.1C-62.2,54.4,-73.6,44.5,-80.1,31.8C-86.6,19.1,-88.2,3.6,-85.4,-10.7C-82.6,-25,-75.4,-38.1,-65.8,-49.4C-56.2,-60.7,-44.2,-70.2,-30.8,-77.8C-17.4,-85.4,-2.6,-91.1,11.3,-90.4C25.2,-89.7,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100) scale(1.1)" />
                </clipPath>

                {/* Filter for shadow */}
                <filter id="blob-shadow">
                  <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.3" />
                </filter>
              </defs>

              {/* Image clipped by the blob */}
              <image
                href="/images/your-image.jpeg"
                x="0"
                y="0"
                width="200"
                height="200"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#blob-clip)"
              />

              {/* White border with shadow */}
              <path
                d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.2C64.8,55.2,53.8,66.6,40.3,73.8C26.8,81,10.8,83.9,-4.8,81.6C-20.4,79.3,-35.6,71.8,-48.9,63.1C-62.2,54.4,-73.6,44.5,-80.1,31.8C-86.6,19.1,-88.2,3.6,-85.4,-10.7C-82.6,-25,-75.4,-38.1,-65.8,-49.4C-56.2,-60.7,-44.2,-70.2,-30.8,-77.8C-17.4,-85.4,-2.6,-91.1,11.3,-90.4C25.2,-89.7,30.6,-83.6,44.7,-76.4Z"
                transform="translate(100 100) scale(1.1)"
                fill="none"
                stroke="#e0e0e0"
                strokeWidth="4"
                filter="url(#blob-shadow)"
              />
            </svg>
          </div>
        </div>

        <div className="items-center w-1/2 pr-10 mt-16">
          <h1 className="text-3xl font-light mb-4">
            Design with us , Develop anything.
          </h1>
          <p className="text-xs/10 w-[400px] leading-relaxed tracking-wider">
            Design with us, Develop anything” captures the essence of a versatile
            creative partnership. We transform ideas into fully realized digital
            experiences, combining sleek, user-focused design with robust development.
            Whether it’s a web app, mobile platform, or interactive prototype.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-20 mb-20">
        <InfoNum icon={FaEye} title={"Team Members"} content={"1000"} />
        <InfoNum icon={FaMedal} title={"Project Published"} content={"200"} />
        <InfoNum icon={FaPuzzlePiece} title={"Countries"} content={"80"} />
      </div>
    </div>
  );
}
