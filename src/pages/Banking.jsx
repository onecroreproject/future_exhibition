import React from "react";
import SEO from "../components/SEO";
const Banking = () => {
  return (
    <main>
      <SEO title="Banking" description="Explore the Banking page of SMART EDU EXPO - your premier educational exhibition and conference." />
      {" "}
      {/* Hero Section */}{" "}
      <section
        className="relative py-[120px] md:py-[150px] text-white overflow-hidden text-left bg-cover bg-center min-h-[600px] flex items-center"
        style={{ backgroundImage: "url('/galaxy-bg.webp')" }}
      >
        {" "}
        <div className="container relative z-10">
          {" "}
          <div className="max-w-[750px]">
            {" "}
            <h1 className="text-[58px] leading-[75px] font-sora font-semibold text-white mb-[20px]">
              {" "}
              Banking Details{" "}
            </h1>{" "}

          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Information Grid Section */}{" "}
      <section className="py-[80px] bg-[#ffedf5]">
        {" "}
        <div className="container mx-auto px-[20px]">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {" "}
            {/* Card 1 */}{" "}
            <div className="bg-[#5b1a8c] rounded-[24px] p-[20px_16px] text-center shadow-[0_15px_40px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center transition-transform hover:-translate-y-[5px]">
              {" "}
              <div className="w-[60px] h-[60px] rounded-full bg-[#fbcfe8] text-[#db2777] flex items-center justify-center text-[24px] mb-[20px]">
                {" "}
                <i className="fa-solid fa-address-card"></i>{" "}
              </div>{" "}
              <h3 className="text-white text-[20px] font-bold font-sora mb-[10px]">
                Account Name
              </h3>{" "}
              <p className="font-manrope font-[400] text-white text-[16px] leading-[26px]">
                Future Exhibition & Conferences
              </p>{" "}
            </div>{" "}
            {/* Card 2 */}{" "}
            <div className="bg-[#5b1a8c] rounded-[24px] p-[20px_16px] text-center shadow-[0_15px_40px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center transition-transform hover:-translate-y-[5px]">
              {" "}
              <div className="w-[60px] h-[60px] rounded-full bg-[#fbcfe8] text-[#db2777] flex items-center justify-center text-[24px] mb-[20px]">
                {" "}
                <i className="fa-solid fa-id-card-clip"></i>{" "}
              </div>{" "}
              <h3 className="text-white text-[20px] font-bold font-sora mb-[10px]">
                Account No
              </h3>{" "}
              <p className="font-manrope font-[400] text-white text-[16px] leading-[26px]">
                100000139583
              </p>{" "}
            </div>{" "}
            {/* Card 3 */}{" "}
            <div className="bg-[#5b1a8c] rounded-[24px] p-[20px_16px] text-center shadow-[0_15px_40px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center transition-transform hover:-translate-y-[5px]">
              {" "}
              <div className="w-[60px] h-[60px] rounded-full bg-[#fbcfe8] text-[#db2777] flex items-center justify-center text-[24px] mb-[20px]">
                {" "}
                <i className="fa-regular fa-credit-card"></i>{" "}
              </div>{" "}
              <h3 className="text-white text-[20px] font-bold font-sora mb-[10px]">
                IBAN No
              </h3>{" "}
              <p className="font-manrope font-[400] text-white text-[16px] leading-[26px] break-all">
                BH51BIBB00100000139583
              </p>{" "}
            </div>{" "}
            {/* Card 4 */}{" "}
            <div className="bg-[#5b1a8c] rounded-[24px] p-[20px_16px] text-center shadow-[0_15px_40px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center transition-transform hover:-translate-y-[5px]">
              {" "}
              <div className="w-[60px] h-[60px] rounded-full bg-[#fbcfe8] text-[#db2777] flex items-center justify-center text-[24px] mb-[20px]">
                {" "}
                <i className="fa-solid fa-globe"></i>{" "}
              </div>{" "}
              <h3 className="text-white text-[20px] font-bold font-sora mb-[10px]">
                Swift Code
              </h3>{" "}
              <p className="font-manrope font-[400] text-white text-[16px] leading-[26px]">
                BIBBHBMINV
              </p>{" "}
            </div>{" "}
            {/* Card 5 */}{" "}
            <div className="bg-[#5b1a8c] rounded-[24px] p-[20px_16px] text-center shadow-[0_15px_40px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center transition-transform hover:-translate-y-[5px]">
              {" "}
              <div className="w-[60px] h-[60px] rounded-full bg-[#fbcfe8] text-[#db2777] flex items-center justify-center text-[24px] mb-[20px]">
                {" "}
                <i className="fa-solid fa-building-columns"></i>{" "}
              </div>{" "}
              <h3 className="text-white text-[20px] font-bold font-sora mb-[10px]">
                Bank Name
              </h3>{" "}
              <p className="font-manrope font-[400] text-white text-[16px] leading-[26px]">
                Bahrain Islamic Bank
              </p>{" "}
            </div>{" "}
            {/* Card 6 */}{" "}
            <div className="bg-[#5b1a8c] rounded-[24px] p-[20px_16px] text-center shadow-[0_15px_40px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center transition-transform hover:-translate-y-[5px]">
              {" "}
              <div className="w-[60px] h-[60px] rounded-full bg-[#fbcfe8] text-[#db2777] flex items-center justify-center text-[24px] mb-[20px]">
                {" "}
                <i className="fa-solid fa-location-dot"></i>{" "}
              </div>{" "}
              <h3 className="text-white text-[20px] font-bold font-sora mb-[10px]">
                Bank Address
              </h3>{" "}
              <p className="font-manrope font-[400] text-white text-[16px] leading-[26px]">
                Building 722, Al Salam Tower P.O. Box 5240 Manama,
                <br />
                Kingdom of Bahrain
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </main>
  );
};
export default Banking;
