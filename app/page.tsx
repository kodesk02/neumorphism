import HomeButton from "@/components/HomeButton";

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

    </div>
  );
}
