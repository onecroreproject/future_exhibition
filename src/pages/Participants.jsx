import React from "react";
import SEO from "../components/SEO";
const participantsData = [
  {
    id: 1,
    name: "Gulf University",
    logo: "/participants-logos/Gulf University.webp",
  },
  {
    id: 2,
    name: "JnS Education",
    logo: "/participants-logos/JnS Education.webp",
  },
  {
    id: 3,
    name: "Euro University of bahrain",
    logo: "/participants-logos/Euro University of bahrain.webp",
  },
  {
    id: 4,
    name: "Change Makers For Human Development",
    logo: "/participants-logos/Change Makers For Human Development.webp",
  },
  {
    id: 5,
    name: "Wisdom Makers For Sustainable Development & Governance",
    logo: "/participants-logos/Wisdom Makers For Sustainable Development & Governance.webp",
  },
  {
    id: 6,
    name: "One World Kindergarten",
    logo: "/participants-logos/One World Kindergarten.webp",
  },
  {
    id: 7,
    name: "Doroors Plus Educational Centre",
    logo: "/participants-logos/Doroors Plus Educational Centre.webp",
  },
  {
    id: 8,
    name: "National Cyber Security Center",
    logo: "/participants-logos/National Cyber Security Center.webp",
  },
  {
    id: 9,
    name: "American University of Bahrain",
    logo: "/participants-logos/American University of Bahrain.webp",
  },
  {
    id: 10,
    name: "University College of Bahrain",
    logo: "/participants-logos/University College of Bahrain.webp",
  },
];
const Participants = () => {
  return (
    <main>
      <SEO title="Participants" description="Explore the Participants page of SMART EDU EXPO - your premier educational exhibition and conference." />
      {" "}
      {/* Hero Section */}{" "}
      <section
        className="relative py-[100px] md:py-[150px] text-white overflow-hidden text-left bg-cover bg-center min-h-[400px] md:min-h-[500px] flex items-center"
        style={{ backgroundImage: "url('/participants-bg.webp')" }}
      >
        {" "}
        <div className="container relative z-10">
          {" "}
          <div className="max-w-[750px]">
            {" "}
            <h1 className="text-[58px] leading-[75px] font-sora font-semibold text-white">
              {" "}
              Participants{" "}
            </h1>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Grid Section */}{" "}
      <section className="py-[80px] bg-[#ffedf5]">
        {" "}
        <div className="container mx-auto px-[20px]">
          {" "}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[20px]">
            {" "}
            {participantsData.map((participant) => (
              <div
                key={participant.id}
                className="bg-[#2e1065] bg-[url('/galaxy-bg.webp')] bg-cover bg-center bg-blend-overlay rounded-[16px] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.15)] flex flex-col h-full transition-transform hover:-translate-y-[5px]"
              >
                {" "}
                <div className="p-[10px]">
                  {" "}
                  <div className="bg-white rounded-[12px] h-[120px] flex items-center justify-center p-[16px]">
                    {" "}
                    {/* Placeholder for logo */}{" "}
                    {participant.logo ? (
                      <img
                        src={participant.logo}
                        alt={participant.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    ) : (
                      <div className="text-gray-400 text-[12px] italic opacity-50">
                        Image Placeholder
                      </div>
                    )}{" "}
                  </div>{" "}
                </div>{" "}
                <div className="p-[15px] flex-grow flex items-center justify-center text-center">
                  {" "}
                  <h3 className="text-white font-bold text-[13px] leading-[1.4]">
                    {participant.name}
                  </h3>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </main>
  );
};
export default Participants;
