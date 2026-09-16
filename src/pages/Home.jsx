import React, { useState, useEffect } from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
const heroSlides = [
  {
    title: (
      <>
        World of Ideas in
        <br />
        One Place
      </>
    ),
    description:
      "The leading regional educational platform showcasing smart education, innovative technologies, future skills and academic opportunities.",
  },
  {
    title: (
      <>
        A Regional Hub for
        <br />
        Smart Education
      </>
    ),
    description:
      "Explore innovative solutions, future-ready skills, academic opportunities, and meaningful partnerships shaping education across Bahrain and the region.",
  },
  {
    title: (
      <>
        Shaping the Future
        <br />
        of Education
      </>
    ),
    description:
      "Connect with leading educational institutions, technology providers, educators, and industry leaders driving the next generation of learning.",
  },
];
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <main>
      <SEO title="Home" description="Explore the Home page of SMART EDU EXPO - your premier educational exhibition and conference." />
      {" "}
      {/* Hero */}{" "}
      <section className="relative h-[90vh] min-h-[500px] flex items-center justify-start overflow-hidden py-[100px]">
        {" "}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
        >
          {" "}
          <source src="hero-bg.webm" type="video/webm" />{" "}
        </video>{" "}
        <div className="absolute top-0 left-0 w-full h-full bg-[#1e1b4b]/30 mix-blend-multiply z-[2]"></div>{" "}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#0f172a]/60 via-[#0f172a]/30 to-transparent z-[2]"></div>{" "}
        <div className="container relative z-[3]">
          {" "}
          <div className="max-w-[700px]">
            {" "}
            <h2 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[58px] leading-[1.2] lg:leading-[75px] font-sora font-semibold text-[#d39a32] uppercase tracking-[1px] mb-[15px] drop-shadow-md whitespace-nowrap">
              {" "}
              SMART EDU EXPO 2026{" "}
            </h2>{" "}
            <h1
              key={`title-${currentSlide}`}
              className="text-[42px] md:text-[55px] lg:text-[64px] leading-[1.15] mb-[20px] text-white font-sora font-bold drop-shadow-lg animate-[fadeSlideUp_0.5s_ease-out_forwards]"
            >
              {" "}
              {heroSlides[currentSlide].title}{" "}
            </h1>{" "}
            <p
              key={`desc-${currentSlide}`}
              className="text-[16px] font-manrope font-medium text-white leading-[26px] mb-[40px] max-w-[600px] drop-shadow-md animate-[fadeSlideUp_0.5s_ease-out_0.2s_forwards] opacity-0"
            >
              {" "}
              {heroSlides[currentSlide].description}{" "}
            </p>{" "}
            <div className="flex">
              {" "}
              <Link
                to="/exhibitors"
                className="inline-flex items-center justify-center gap-[10px] bg-gradient-to-r from-[#4f46e5] to-[#38bdf8] text-white px-[40px] py-[16px] rounded-full font-manrope font-semibold text-[14px] leading-[14px] shadow-[0_4px_15px_rgba(79,70,229,0.25)] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(79,70,229,0.35)] transition-all duration-300 tracking-[0.5px] uppercase"
              >
                {" "}
                BOOK YOUR SPACE &rarr;{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Stats Bar */}{" "}
      <div className="relative z-20 h-0 w-full">
        {" "}
        <div className="absolute top-0 left-0 w-full -translate-y-[30%]">
          {" "}
          <div className="container">
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#ffedf5] rounded-[20px] py-[15px] px-[15px] shadow-[0_20px_40px_rgba(0,0,0,0.2)] divide-y md:divide-y-0 md:divide-x divide-[rgba(124,58,237,0.15)]">
              {" "}
              <div className="flex items-center gap-[16px] py-[10px] px-[15px] lg:px-[25px]">
                {" "}
                <div className="w-[50px] h-[50px] rounded-full bg-[#f3e8ff] border-[1px] border-[#a855f7] flex items-center justify-center text-[#7c3aed] text-[20px] shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.1)]">
                  {" "}
                  <i className="fa-solid fa-users"></i>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <h3 className="text-[20px] font-bold leading-none mb-0 text-[#0f172a] font-sora">
                    3000+
                  </h3>{" "}
                  <p className="font-manrope font-[600] text-[#172b6b] text-[14px] leading-[23px]">
                    Expected Students
                    <br />
                    From schools & institutions
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex items-center gap-[16px] py-[10px] px-[15px] lg:px-[25px]">
                {" "}
                <div className="w-[50px] h-[50px] rounded-full bg-[#f3e8ff] border-[1px] border-[#a855f7] flex items-center justify-center text-[#7c3aed] text-[20px] shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.1)]">
                  {" "}
                  <i className="fa-solid fa-layer-group"></i>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <h3 className="text-[20px] font-bold leading-none mb-0 text-[#0f172a] font-sora">
                    3,000+ sqm
                  </h3>{" "}
                  <p className="font-manrope font-[600] text-[#172b6b] text-[14px] leading-[23px]">
                    Exhibition Area
                    <br />
                    Starting from 3,000 sqm
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex items-center gap-[16px] py-[10px] px-[15px] lg:px-[25px]">
                {" "}
                <div className="w-[50px] h-[50px] rounded-full bg-[#f3e8ff] border-[1px] border-[#a855f7] flex items-center justify-center text-[#7c3aed] text-[20px] shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.1)]">
                  {" "}
                  <i className="fa-regular fa-calendar"></i>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <h3 className="text-[20px] font-bold leading-none mb-0 text-[#0f172a] font-sora">
                    4 Days
                  </h3>{" "}
                  <p className="font-manrope font-[600] text-[#172b6b] text-[14px] leading-[23px]">
                    Days of Innovation
                    <br />
                    Education • Technology • Future
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex items-center gap-[16px] py-[10px] px-[15px] lg:px-[25px]">
                {" "}
                <div className="w-[50px] h-[50px] rounded-full bg-[#f3e8ff] border-[1px] border-[#a855f7] flex items-center justify-center text-[#7c3aed] text-[20px] shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.1)]">
                  {" "}
                  <i className="fa-solid fa-location-dot"></i>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <h3 className="text-[20px] font-bold leading-none mb-0 text-[#0f172a] font-sora">
                    Regional Platform
                  </h3>{" "}
                  <p className="font-manrope font-[600] text-[#172b6b] text-[14px] leading-[23px]">
                    Visitors from Bahrain, KSA, Eastern
                    <br />
                    Province, GCC & Beyond
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Overview */}{" "}
      <section
        className="pt-[140px] pb-[100px] text-white relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/galaxy-bg.webp')" }}
      >
        {" "}
        <div className="absolute inset-0 bg-black/40 z-0"></div>{" "}
        <div className="max-w-[1100px] w-full mx-auto px-[15px] relative z-10">
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-[60px] items-center">
            {" "}
            {/* Card */}{" "}
            <div className="bg-[#fef0f9] rounded-[24px] p-[24px_20px] text-center shadow-[0_10px_40px_rgba(0,0,0,0.1)] relative overflow-hidden border border-[#fae8ff]">
              {" "}
              {/* Background gradient hint */}{" "}
              <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-[#f3e8ff]/50 to-transparent"></div>{" "}

              <h3 className="font-jakarta font-[800] text-[#7444e5] text-[17px] leading-[22px] uppercase tracking-[1px] mb-[30px] relative z-10">
                MEET THE EXHIBITION MANAGER
              </h3>{" "}

              <div className="relative w-[180px] h-[180px] mx-auto mb-[30px]">
                {" "}
                {/* Thin overlapping circles behind the image */}{" "}
                <div className="absolute top-[-15px] left-[-20px] w-[160px] h-[160px] rounded-full border-[1px] border-white/80 z-0"></div>{" "}
                <div className="absolute bottom-[-20px] right-[-15px] w-[180px] h-[180px] rounded-full border-[1px] border-[#06b6d4]/30 z-0"></div>{" "}

                {/* Floating Dots */}{" "}
                <div className="absolute top-[10px] right-[-10px] w-[10px] h-[10px] rounded-full bg-[#cffafe] shadow-[0_0_12px_#22d3ee] z-0"></div>{" "}
                <div className="absolute bottom-[20px] left-[-15px] w-[12px] h-[12px] rounded-full bg-[#8b5cf6] shadow-[0_0_15px_#8b5cf6] z-0"></div>{" "}

                {/* Image container with gradient border */}{" "}
                <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-[#0ea5e9] via-[#8b5cf6] to-[#0ea5e9] p-[3px] z-10 shadow-[0_10px_25px_rgba(139,92,246,0.25)]">
                  {" "}
                  <div className="w-full h-full rounded-full bg-white p-[3px]">
                    <img
                      src="/hanadi-khafaji.webp"
                      alt="Hanadi Khafaji"
                      className="w-full h-full object-cover rounded-full"
                    />{" "}
                  </div>
                </div>{" "}
              </div>{" "}

              <h4 className="font-jakarta font-[800] text-[#6335b8] text-[30px] leading-[36px] mb-[6px] relative z-10 tracking-[0.5px]">
                Hanadi Khafaji
              </h4>{" "}
              <div className="font-jakarta font-[800] text-[#2875d6] text-[16px] leading-[22px] mb-[20px] relative z-10">
                Smart Education Exhibition Manager
              </div>{" "}
              <div className="font-jakarta font-[600] text-[#563b91] text-[15px] leading-[25px] mb-[30px] relative z-10">
                Future Ex – Company for Exhibitions
                <br />
                and Conferences
              </div>{" "}
              <div className="relative inline-block text-[22px] font-bold text-[#6335a8] font-serif italic leading-[30px] px-[25px] z-10">
                {" "}
                <span className="absolute top-[-10px] left-[-5px] text-[40px] text-[#7c3aed] font-serif leading-none italic">
                  “
                </span>{" "}
                Dedicated to shaping
                <br />
                the future of education.{" "}
                <span className="absolute bottom-[-20px] right-[-5px] text-[40px] text-[#7c3aed] font-serif leading-none italic">
                  ”
                </span>{" "}
              </div>{" "}
            </div>{" "}
            {/* Text Content */}{" "}
            <div className="px-[15px] md:px-[30px] lg:px-0 lg:pl-[30px]">
              {" "}
              <h2 className="text-[35px] leading-[46px] font-sora font-[600] text-white mb-[15px]">
                An overview of SMART EDU
                <br />
                EXPO 2026
              </h2>{" "}
              <div className="flex items-center gap-[6px] mb-[30px]">
                {" "}
                <div className="h-[2px] w-[100px] bg-[#3b82f6]"></div>{" "}
                <div className="h-[3px] w-[3px] rounded-full bg-[#3b82f6]"></div>{" "}
                <div className="h-[3px] w-[3px] rounded-full bg-[#3b82f6]"></div>{" "}
              </div>{" "}
              <p className="font-manrope font-[500] text-white text-[16px] leading-[26px] text-justify mb-[24px]">
                {" "}
                The SMART EDU EXPO is organized by Future Ex - Company for
                Exhibitions and Conferences. The exhibition serves as a leading
                regional educational platform and a strategic milestone in
                positioning the Kingdom of Bahrain as a regional hub for smart
                education, innovation, and future-ready learning - focused on
                the future of education, educational innovation, and the
                development of smart education systems in line with digital
                transformation and future skills requirements.{" "}
              </p>{" "}
              <p className="font-manrope font-[500] text-white text-[16px] leading-[26px] text-justify mb-[40px]">
                {" "}
                The Expo will take place from Sep 29 - 30 & Oct 1 - 2, 2026 at
                Exhibition World Bahrain, with the participation of leading
                educational institutions, educational technology providers and
                key stakeholders in the education sector, within an integrated
                regional framework that promotes collaboration, knowledge
                exchange, and sustainable educational partnerships.{" "}
              </p>{" "}
              <Link
                to="/about"
                className="inline-flex items-center gap-[10px] bg-gradient-to-r from-[#4f46e5] to-[#0ea5e9] text-white px-[36px] py-[14px] rounded-full font-bold text-[13px] shadow-[0_8px_20px_rgba(6,182,212,0.3)] hover:-translate-y-[2px] transition-transform duration-300 tracking-[1px]"
              >
                {" "}
                READ MORE &rarr;{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Golden Partners */}{" "}
      <section className="py-[70px] bg-white">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center mb-[40px]">
            {" "}
            <h2 className="text-[35px] leading-[46px] font-sora font-semibold text-[#5b1a8c] ">
              Our Golden Partners
            </h2>{" "}
            <div className="flex items-center justify-center gap-[6px] mt-[12px]">
              {" "}
              <div className="h-[2px] w-[100px] bg-[#3b82f6]"></div>{" "}
              <div className="h-[3px] w-[3px] rounded-full bg-[#3b82f6]"></div>{" "}
              <div className="h-[3px] w-[3px] rounded-full bg-[#3b82f6]"></div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex justify-center mt-[30px]">
            {" "}
            <img
              src="/our golden partner.webp"
              alt="Our Golden Partners"
              className="max-w-[250px] md:max-w-[320px] w-full h-auto object-contain border-[4px] border-white rounded-[12px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:scale-105 transition-transform duration-500"
            />{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* EDU Universe */}
      <section className="py-[70px] bg-white">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center mb-[50px]">
            {" "}
            <h2 className="text-[35px] leading-[46px] font-sora font-semibold text-[#5b1a8c] ">
              Explore the SMART EDU EXPO Universe
            </h2>{" "}
            <div className="flex items-center justify-center gap-[6px] mt-[12px]">
              {" "}
              <div className="h-[2px] w-[100px] bg-[#3b82f6]"></div>{" "}
              <div className="h-[3px] w-[3px] rounded-full bg-[#3b82f6]"></div>{" "}
              <div className="h-[3px] w-[3px] rounded-full bg-[#3b82f6]"></div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[20px] md:gap-[30px] mt-[40px]">
            {" "}
            <div className="text-center group cursor-pointer">
              {" "}
              <div className="w-full aspect-square max-w-[160px] mx-auto mb-[20px] transition-transform duration-500 group-hover:-translate-y-[8px]">
                {" "}
                <img
                  src="/icon1/smart education.webp"
                  alt="Smart Education"
                  className="w-full h-full object-contain"
                />{" "}
              </div>{" "}
              <h4 className="font-manrope text-[14px] font-bold text-[#7c3aed] transition-colors duration-300 group-hover:text-[#4f46e5]">
                Smart Education
              </h4>{" "}
            </div>{" "}
            <div className="text-center group cursor-pointer">
              {" "}
              <div className="w-full aspect-square max-w-[160px] mx-auto mb-[20px] transition-transform duration-500 group-hover:-translate-y-[8px]">
                {" "}
                <img
                  src="/icon1/EdTech Solutions.webp"
                  alt="EdTech Solutions"
                  className="w-full h-full object-contain"
                />{" "}
              </div>{" "}
              <h4 className="font-manrope text-[14px] font-bold text-[#7c3aed] transition-colors duration-300 group-hover:text-[#4f46e5]">
                EdTech Solutions
              </h4>{" "}
            </div>{" "}
            <div className="text-center group cursor-pointer">
              {" "}
              <div className="w-full aspect-square max-w-[160px] mx-auto mb-[20px] transition-transform duration-500 group-hover:-translate-y-[8px]">
                {" "}
                <img
                  src="/icon1/Learning Resources.webp"
                  alt="Learning Resources"
                  className="w-full h-full object-contain"
                />{" "}
              </div>{" "}
              <h4 className="font-manrope text-[14px] font-bold text-[#7c3aed] transition-colors duration-300 group-hover:text-[#4f46e5]">
                Learning Resources
              </h4>{" "}
            </div>{" "}
            <div className="text-center group cursor-pointer">
              {" "}
              <div className="w-full aspect-square max-w-[160px] mx-auto mb-[20px] transition-transform duration-500 group-hover:-translate-y-[8px]">
                {" "}
                <img
                  src="/icon1/Future Skills.webp"
                  alt="Future Skills"
                  className="w-full h-full object-contain"
                />{" "}
              </div>{" "}
              <h4 className="font-manrope text-[14px] font-bold text-[#7c3aed] transition-colors duration-300 group-hover:text-[#4f46e5]">
                Future Skills
              </h4>{" "}
            </div>{" "}
            <div className="text-center group cursor-pointer">
              {" "}
              <div className="w-full aspect-square max-w-[160px] mx-auto mb-[20px] transition-transform duration-500 group-hover:-translate-y-[8px]">
                {" "}
                <img
                  src="/icon1/Innovation.webp"
                  alt="Innovation"
                  className="w-full h-full object-contain"
                />{" "}
              </div>{" "}
              <h4 className="font-manrope text-[14px] font-bold text-[#7c3aed] transition-colors duration-300 group-hover:text-[#4f46e5]">
                Innovation
              </h4>{" "}
            </div>{" "}
            <div className="text-center group cursor-pointer">
              {" "}
              <div className="w-full aspect-square max-w-[160px] mx-auto mb-[20px] transition-transform duration-500 group-hover:-translate-y-[8px]">
                {" "}
                <img
                  src="/icon1/Global Connections.webp"
                  alt="Global Connections"
                  className="w-full h-full object-contain"
                />{" "}
              </div>{" "}
              <h4 className="font-manrope text-[14px] font-bold text-[#7c3aed] transition-colors duration-300 group-hover:text-[#4f46e5]">
                Global Connections
              </h4>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </section>{" "}
      {/* Exhibition Spaces */}{" "}
      <section
        className="py-[80px] text-white relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/galaxy-bg.webp')" }}
      >
        {" "}
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="container relative z-10">
          {" "}
          <div className="mb-[50px]">
            {" "}
            <div className="flex items-center gap-[6px] mb-[10px]">
              {" "}
              <div className="w-[6px] h-[6px] rounded-full bg-[#06b6d4]"></div>{" "}
              <div className="text-white text-[12px] font-bold uppercase tracking-[1px]">
                PARTICIPATION OPTIONS
              </div>{" "}
            </div>{" "}
            <h2 className="text-[35px] leading-[46px] font-sora font-semibold text-white max-w-[600px] mb-[20px]">
              Choose Your Perfect Exhibition Space
            </h2>{" "}
            <div className="flex items-center gap-[6px]">
              {" "}
              <div className="h-[2px] w-[80px] bg-[#3b82f6]"></div>{" "}
              <div className="h-[3px] w-[3px] rounded-full bg-[#3b82f6]"></div>{" "}
              <div className="h-[3px] w-[3px] rounded-full bg-[#3b82f6]"></div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] font-sora">
            {" "}
            {/* Space Only */}{" "}
            <div className="bg-white rounded-[16px] overflow-hidden flex flex-col relative shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:-translate-y-[6px] transition-transform duration-300">
              {" "}
              <div className="relative pt-[30px] px-[20px] pb-[10px] bg-white h-[200px] flex items-center justify-center">
                {" "}
                <img
                  src="/icon2/Space Only.webp"
                  alt="Space Only"
                  className="max-h-[160px] object-contain"
                />{" "}
                <div className="absolute top-[15px] right-[15px] bg-[#7c3aed] text-white px-[12px] py-[4px] rounded-full text-[10px] font-bold uppercase flex items-center gap-[4px]">
                  {" "}
                  <div className="w-[4px] h-[4px] rounded-full bg-white"></div>{" "}
                  SPACE ONLY{" "}
                </div>{" "}
              </div>{" "}
              <div className="p-[24px] flex flex-col flex-grow bg-white">
                {" "}
                <h4 className="text-[22px] font-bold text-[#1e1b4b] mb-[4px] font-sora">
                  Space Only
                </h4>{" "}
                <div className="font-sora font-[700] text-[#5b1a8c] text-[13px] leading-[21px] mb-[20px] uppercase">
                  3X3 M (9 SQM)
                </div>{" "}
                <div className="flex items-baseline gap-[6px] mb-[20px]">
                  {" "}
                  <span className="text-[28px] font-extrabold text-[#1e3a8a]">
                    270 BHD
                  </span>{" "}
                  <span className="font-sora font-medium text-[16px] leading-[26px] text-[#54595f]">
                    / Equivalent 717$
                  </span>{" "}
                </div>{" "}
                <ul className="space-y-[12px] mb-[20px] flex-grow">
                  {" "}
                  <li className="flex items-start gap-[8px] font-sora font-[500] text-[#54595f] text-[16px] leading-[26px]">
                    {" "}
                    <i className="fa-solid fa-check text-[#7c3aed] mt-[3px]"></i>{" "}
                    3 × 3 m (9 sqm) exhibition space{" "}
                  </li>{" "}
                  <li className="flex items-start gap-[8px] font-sora font-[500] text-[#54595f] text-[16px] leading-[26px]">
                    {" "}
                    <i className="fa-solid fa-check text-[#7c3aed] mt-[3px]"></i>{" "}
                    Floor space only{" "}
                  </li>{" "}
                </ul>{" "}
                <Link
                  to="/contact"
                  className="w-full block text-center bg-gradient-to-r from-[#4f46e5] to-[#38bdf8] text-white font-bold py-[12px] rounded-[30px] hover:shadow-[0_8px_20px_rgba(79,70,229,0.3)] transition-all duration-300 mt-auto"
                >
                  {" "}
                  Reserve this option &rarr;{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
            {/* Option A */}{" "}
            <div className="bg-white rounded-[16px] overflow-hidden flex flex-col relative shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:-translate-y-[6px] transition-transform duration-300">
              {" "}
              <div className="relative pt-[30px] px-[20px] pb-[10px] bg-white h-[200px] flex items-center justify-center">
                {" "}
                <img
                  src="/icon2/Shell Scheme Booth.webp"
                  alt="Shell Scheme Booth"
                  className="max-h-[160px] object-contain"
                />{" "}
                <div className="absolute top-[15px] right-[15px] bg-[#7c3aed] text-white px-[12px] py-[4px] rounded-full text-[10px] font-bold uppercase flex items-center gap-[4px]">
                  {" "}
                  <div className="w-[4px] h-[4px] rounded-full bg-white"></div>{" "}
                  OPTION A{" "}
                </div>{" "}
              </div>{" "}
              <div className="p-[24px] flex flex-col flex-grow bg-white">
                {" "}
                <h4 className="text-[22px] font-bold text-[#1e1b4b] mb-[4px] font-sora">
                  Shell Scheme Booth
                </h4>{" "}
                <div className="font-sora font-[700] text-[#5b1a8c] text-[13px] leading-[21px] mb-[20px] uppercase">
                  3X3 M (9 SQM)
                </div>{" "}
                <div className="flex items-baseline gap-[6px] mb-[20px]">
                  {" "}
                  <span className="text-[28px] font-extrabold text-[#1e3a8a]">
                    432 BHD
                  </span>{" "}
                  <span className="font-sora font-medium text-[16px] leading-[26px] text-[#54595f]">
                    / Equivalent 1,152$
                  </span>{" "}
                </div>{" "}
                <ul className="space-y-[12px] mb-[20px] flex-grow">
                  {" "}
                  <li className="flex items-start gap-[8px] font-sora font-[500] text-[#54595f] text-[16px] leading-[26px]">
                    {" "}
                    <i className="fa-solid fa-check text-[#7c3aed] mt-[3px]"></i>{" "}
                    Reception desk with one chair{" "}
                  </li>{" "}
                  <li className="flex items-start gap-[8px] font-sora font-[500] text-[#54595f] text-[16px] leading-[26px]">
                    {" "}
                    <i className="fa-solid fa-check text-[#7c3aed] mt-[3px]"></i>{" "}
                    Company name & logo on fascia panel{" "}
                  </li>{" "}
                  <li className="flex items-start gap-[8px] font-sora font-[500] text-[#54595f] text-[16px] leading-[26px]">
                    {" "}
                    <i className="fa-solid fa-check text-[#7c3aed] mt-[3px]"></i>{" "}
                    Basic lighting & electricity supply{" "}
                  </li>{" "}
                </ul>{" "}
                <Link
                  to="/contact"
                  className="w-full block text-center bg-gradient-to-r from-[#4f46e5] to-[#38bdf8] text-white font-bold py-[12px] rounded-[30px] hover:shadow-[0_8px_20px_rgba(79,70,229,0.3)] transition-all duration-300 mt-auto"
                >
                  {" "}
                  Reserve this option &rarr;{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
            {/* Option B */}{" "}
            <div className="bg-white rounded-[16px] overflow-hidden flex flex-col relative shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:-translate-y-[6px] transition-transform duration-300">
              {" "}
              <div className="relative pt-[30px] px-[20px] pb-[10px] bg-white h-[200px] flex items-center justify-center">
                {" "}
                <img
                  src="/icon2/Stand Booth.webp"
                  alt="Stand Booth Option B"
                  className="max-h-[160px] object-contain"
                />{" "}
                <div className="absolute top-[15px] right-[15px] bg-[#7c3aed] text-white px-[12px] py-[4px] rounded-full text-[10px] font-bold uppercase flex items-center gap-[4px]">
                  {" "}
                  <div className="w-[4px] h-[4px] rounded-full bg-white"></div>{" "}
                  OPTION B{" "}
                </div>{" "}
              </div>{" "}
              <div className="p-[24px] flex flex-col flex-grow bg-white">
                {" "}
                <h4 className="text-[22px] font-bold text-[#1e1b4b] mb-[4px] font-sora">
                  Stand Booth
                </h4>{" "}
                <div className="font-sora font-[700] text-[#5b1a8c] text-[13px] leading-[21px] mb-[20px] uppercase">
                  3X3 M (9 SQM)
                </div>{" "}
                <div className="flex items-baseline gap-[6px] mb-[20px]">
                  {" "}
                  <span className="text-[28px] font-extrabold text-[#1e3a8a]">
                    540 BHD
                  </span>{" "}
                  <span className="font-sora font-medium text-[16px] leading-[26px] text-[#54595f]">
                    / Equivalent 1,440$
                  </span>{" "}
                </div>{" "}
                <ul className="space-y-[12px] mb-[20px] flex-grow">
                  {" "}
                  <li className="flex items-start gap-[8px] font-sora font-[500] text-[#54595f] text-[16px] leading-[26px]">
                    {" "}
                    <i className="fa-solid fa-check text-[#7c3aed] mt-[3px]"></i>{" "}
                    Participant's name displayed on top of the booth{" "}
                  </li>{" "}
                  <li className="flex items-start gap-[8px] font-sora font-[500] text-[#54595f] text-[16px] leading-[26px]">
                    {" "}
                    <i className="fa-solid fa-check text-[#7c3aed] mt-[3px]"></i>{" "}
                    One round meeting table + two chairs{" "}
                  </li>{" "}
                  <li className="flex items-start gap-[8px] font-sora font-[500] text-[#54595f] text-[16px] leading-[26px]">
                    {" "}
                    <i className="fa-solid fa-check text-[#7c3aed] mt-[3px]"></i>{" "}
                    Front reception desk with company logo{" "}
                  </li>{" "}
                  <li className="flex items-start gap-[8px] font-sora font-[500] text-[#54595f] text-[16px] leading-[26px]">
                    {" "}
                    <i className="fa-solid fa-check text-[#7c3aed] mt-[3px]"></i>{" "}
                    One chair for the receptionist{" "}
                  </li>{" "}
                </ul>{" "}
                <div className="mb-[20px]">
                  {" "}
                  <h5 className="font-sora font-[600] text-black text-[15px] leading-[25px] mb-[4px]">
                    Optional add-on :
                  </h5>{" "}
                  <p className="font-sora font-[500] text-[#54595f] text-[16px] leading-[26px]">
                    {" "}
                    55-inch display screen
                    <br /> (Additional charge: $200){" "}
                  </p>{" "}
                </div>{" "}
                <div className="mb-[20px]">
                  {" "}
                  <h5 className="font-sora font-[600] text-black text-[15px] leading-[25px] mb-[4px]">
                    Required artwork size:
                  </h5>{" "}
                  <p className="font-sora font-[500] text-[#54595f] text-[16px] leading-[26px]">
                    {" "}
                    width: 253 cm / height: 197 cm{" "}
                  </p>{" "}
                </div>{" "}
                <div className="border border-[#4b5563] rounded-[8px] p-[12px_16px] mb-[20px]">
                  {" "}
                  <div className="font-sora font-[600] text-black text-[15px] leading-[25px]">
                    3X3m = 160$/sqm
                  </div>{" "}
                  <div className="font-sora font-[600] text-black text-[15px] leading-[25px]">
                    Equivalent=60BHD/sqm
                  </div>{" "}
                </div>{" "}
                <Link
                  to="/contact"
                  className="w-full block text-center bg-gradient-to-r from-[#4f46e5] to-[#38bdf8] text-white font-bold py-[12px] rounded-[30px] hover:shadow-[0_8px_20px_rgba(79,70,229,0.3)] transition-all duration-300"
                >
                  {" "}
                  Reserve this option &rarr;{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
            {/* Option C */}{" "}
            <div className="bg-white rounded-[16px] overflow-hidden flex flex-col relative shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:-translate-y-[6px] transition-transform duration-300">
              {" "}
              <div className="relative pt-[30px] px-[20px] pb-[10px] bg-white h-[200px] flex items-center justify-center">
                {" "}
                <img
                  src="/icon2/Stand Booth option c.webp"
                  alt="Stand Booth Option C"
                  className="max-h-[160px] object-contain"
                />{" "}
                <div className="absolute top-[15px] right-[15px] bg-[#7c3aed] text-white px-[12px] py-[4px] rounded-full text-[10px] font-bold uppercase flex items-center gap-[4px]">
                  {" "}
                  <div className="w-[4px] h-[4px] rounded-full bg-white"></div>{" "}
                  OPTION C{" "}
                </div>{" "}
              </div>{" "}
              <div className="p-[24px] flex flex-col flex-grow bg-white">
                {" "}
                <h4 className="text-[22px] font-bold text-[#1e1b4b] mb-[4px] font-sora">
                  Stand Booth
                </h4>{" "}
                <div className="font-sora font-[700] text-[#5b1a8c] text-[13px] leading-[21px] mb-[20px] uppercase">
                  3X3 M (9 SQM)
                </div>{" "}
                <div className="flex items-baseline gap-[6px] mb-[20px]">
                  {" "}
                  <span className="text-[28px] font-extrabold text-[#1e3a8a]">
                    720 BHD
                  </span>{" "}
                  <span className="font-sora font-medium text-[16px] leading-[26px] text-[#54595f]">
                    / Equivalent 1,908$
                  </span>{" "}
                </div>{" "}
                <ul className="space-y-[12px] mb-[20px] flex-grow">
                  {" "}
                  <li className="flex items-start gap-[8px] font-sora font-[500] text-[#54595f] text-[16px] leading-[26px]">
                    {" "}
                    <i className="fa-solid fa-check text-[#7c3aed] mt-[3px]"></i>{" "}
                    Backdrop size: 2 m × 2.5 m (Height){" "}
                  </li>{" "}
                  <li className="flex items-start gap-[8px] font-sora font-[500] text-[#54595f] text-[16px] leading-[26px]">
                    {" "}
                    <i className="fa-solid fa-check text-[#7c3aed] mt-[3px]"></i>{" "}
                    Front wooden stand with 55-inch TV screen{" "}
                  </li>{" "}
                  <li className="flex items-start gap-[8px] font-sora font-[500] text-[#54595f] text-[16px] leading-[26px]">
                    {" "}
                    <i className="fa-solid fa-check text-[#7c3aed] mt-[3px]"></i>{" "}
                    Strip lighting / spotlights for booth illumination{" "}
                  </li>{" "}
                  <li className="flex items-start gap-[8px] font-sora font-[500] text-[#54595f] text-[16px] leading-[26px]">
                    {" "}
                    <i className="fa-solid fa-check text-[#7c3aed] mt-[3px]"></i>{" "}
                    One round meeting table + 2 chairs{" "}
                  </li>{" "}
                  <li className="flex items-start gap-[8px] font-sora font-[500] text-[#54595f] text-[16px] leading-[26px]">
                    {" "}
                    <i className="fa-solid fa-check text-[#7c3aed] mt-[3px]"></i>{" "}
                    Welcoming reception desk + 1 chair{" "}
                  </li>{" "}
                </ul>{" "}
                <div className="mb-[20px]">
                  {" "}
                  <h5 className="font-sora font-[600] text-black text-[15px] leading-[25px] mb-[4px]">
                    Artwork dimensions:
                  </h5>{" "}
                  <p className="font-sora font-[500] text-[#54595f] text-[16px] leading-[26px]">
                    {" "}
                    Side wall:
                    <br /> width: 285 cm / height: 245 cm
                    <br /> Back wall:
                    <br /> width: 95 cm / height: 245 cm
                    <br /> Light box:
                    <br /> width: 120 cm / height: 100 cm{" "}
                  </p>{" "}
                </div>{" "}
                <div className="border border-[#4b5563] rounded-[8px] p-[12px_16px] mb-[20px]">
                  {" "}
                  <div className="font-sora font-[600] text-black text-[15px] leading-[25px]">
                    3x3 m = 212$/sqm
                  </div>{" "}
                  <div className="font-sora font-[600] text-black text-[15px] leading-[25px]">
                    Equivalent=80BHD/sqm
                  </div>{" "}
                </div>{" "}
                <Link
                  to="/contact"
                  className="w-full block text-center bg-gradient-to-r from-[#4f46e5] to-[#38bdf8] text-white font-bold py-[12px] rounded-[30px] hover:shadow-[0_8px_20px_rgba(79,70,229,0.3)] transition-all duration-300"
                >
                  {" "}
                  Reserve this option &rarr;{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Why Section */}{" "}
      <section className="py-[80px] bg-[#632591]">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center mb-[50px]">
            {" "}
            <h2 className="text-[35px] leading-[46px] font-sora font-semibold text-white mb-[15px]">
              Why SMART EDU EXPO ?
            </h2>{" "}
            <div className="flex items-center justify-center gap-[6px]">
              {" "}
              <div className="h-[2px] w-[100px] bg-[#3b82f6]"></div>{" "}
              <div className="h-[3px] w-[3px] rounded-full bg-[#3b82f6]"></div>{" "}
              <div className="h-[3px] w-[3px] rounded-full bg-[#3b82f6]"></div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[20px]">
            {" "}
            {/* Card 1 */}{" "}
            <div className="bg-white text-center p-[30px_16px] rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:-translate-y-[6px]">
              {" "}
              <div className="w-[66px] h-[66px] mx-auto mb-[20px] rounded-full bg-[#fae0ed] flex items-center justify-center text-[26px] text-[#ec4899]">
                {" "}
                <i className="fa-solid fa-graduation-cap"></i>{" "}
              </div>{" "}
              <h4 className="font-sora text-[20px] font-semibold text-[#5b1a8c] mb-[12px] leading-[26px]">
                Smart
                <br />
                Education
              </h4>{" "}
              <p className="font-manrope text-[16px] text-[#000000] leading-[26px] font-semibold">
                Innovative learning solutions shaping the future of education.
              </p>{" "}
            </div>{" "}
            {/* Card 2 */}{" "}
            <div className="bg-white text-center p-[30px_16px] rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:-translate-y-[6px]">
              {" "}
              <div className="w-[66px] h-[66px] mx-auto mb-[20px] rounded-full bg-[#fae0ed] flex items-center justify-center text-[26px] text-[#ec4899]">
                {" "}
                <i className="fa-solid fa-desktop"></i>{" "}
              </div>{" "}
              <h4 className="font-sora text-[20px] font-semibold text-[#5b1a8c] mb-[12px] leading-[26px]">
                Educational Technology
              </h4>{" "}
              <p className="font-manrope text-[16px] text-[#000000] leading-[26px] font-semibold">
                Discover the latest digital tools and technologies transforming
                education.
              </p>{" "}
            </div>{" "}
            {/* Card 3 */}{" "}
            <div className="bg-white text-center p-[30px_16px] rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:-translate-y-[6px]">
              {" "}
              <div className="w-[66px] h-[66px] mx-auto mb-[20px] rounded-full bg-[#fae0ed] flex items-center justify-center text-[26px] text-[#ec4899]">
                {" "}
                <i className="fa-solid fa-rocket"></i>{" "}
              </div>{" "}
              <h4 className="font-sora text-[20px] font-semibold text-[#5b1a8c] mb-[12px] leading-[26px]">
                Future
                <br />
                Skills
              </h4>{" "}
              <p className="font-manrope text-[16px] text-[#000000] leading-[26px] font-semibold">
                Preparing students and professionals with the skills needed for
                tomorrow's world.
              </p>{" "}
            </div>{" "}
            {/* Card 4 */}{" "}
            <div className="bg-white text-center p-[30px_16px] rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:-translate-y-[6px]">
              {" "}
              <div className="w-[66px] h-[66px] mx-auto mb-[20px] rounded-full bg-[#fae0ed] flex items-center justify-center text-[26px] text-[#ec4899]">
                {" "}
                <i className="fa-solid fa-envelope-open-text"></i>{" "}
              </div>{" "}
              <h4 className="font-sora text-[20px] font-semibold text-[#5b1a8c] mb-[12px] leading-[26px]">
                Academic Opportunities
              </h4>{" "}
              <p className="font-manrope text-[16px] text-[#000000] leading-[26px] font-semibold">
                Connecting learners with the right academic pathways and
                opportunities.
              </p>{" "}
            </div>{" "}
            {/* Card 5 */}{" "}
            <div className="bg-white text-center p-[30px_16px] rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:-translate-y-[6px]">
              {" "}
              <div className="w-[66px] h-[66px] mx-auto mb-[20px] rounded-full bg-[#fae0ed] flex items-center justify-center text-[26px] text-[#ec4899]">
                {" "}
                <i className="fa-solid fa-users-viewfinder"></i>{" "}
              </div>{" "}
              <h4 className="font-sora text-[20px] font-semibold text-[#5b1a8c] mb-[12px] leading-[26px]">
                Regional
                <br />
                Partnerships
              </h4>{" "}
              <p className="font-manrope text-[16px] text-[#000000] leading-[26px] font-semibold">
                Building meaningful collaborations across the education
                community and region.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Sponsorship */}{" "}
      <section
        className="py-[100px] text-white relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/galaxy-bg.webp')" }}
      >
        {" "}
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="container relative z-10">
          {" "}
          <div className="mb-[50px] flex flex-col items-center">
            {" "}
            <div className="flex items-center gap-[6px] mb-[10px]">
              {" "}
              <div className="w-[6px] h-[6px] rounded-full bg-[#06b6d4]"></div>{" "}
              <div className="text-white text-[12px] font-bold uppercase tracking-[1px]">
                SPONSORSHIP
              </div>{" "}
            </div>{" "}
            <h2 className="text-[35px] leading-[46px] font-sora font-semibold text-white mb-[20px] text-center">
              Sponsorship Categories & Benefits
            </h2>{" "}
            <div className="flex items-center gap-[6px]">
              {" "}
              <div className="h-[2px] w-[80px] bg-[#3b82f6]"></div>{" "}
              <div className="h-[3px] w-[3px] rounded-full bg-[#3b82f6]"></div>{" "}
              <div className="h-[3px] w-[3px] rounded-full bg-[#3b82f6]"></div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] mt-[60px]">
            {" "}
            {/* OFFICIAL SPONSOR */}{" "}
            <div className="bg-[#632591] rounded-[16px] p-[50px_20px_30px] flex flex-col relative border-[2px] border-[#f5b800] shadow-[0_0_20px_rgba(250,204,21,0.2)] transition-all duration-300 hover:-translate-y-[5px]">
              {" "}
              <div className="absolute top-[-45px] left-1/2 transform -translate-x-1/2 w-[90px] h-[90px] rounded-full bg-[#111827] border-[3px] border-[#f5b800] flex items-center justify-center text-[44px] text-[#f5b800] shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                {" "}
                <i className="fa-solid fa-crown"></i>{" "}
              </div>{" "}
              <div className="text-center mb-[25px]">
                {" "}
                <h3 className="font-sora font-[600] text-[#f5b800] text-[23px] leading-[30px] mb-[10px] uppercase tracking-[1px]">
                  Official Sponsor
                </h3>{" "}
                <div className="font-sora text-[32px] font-extrabold text-[#f5b800]">
                  8,000 BHD
                </div>{" "}
              </div>{" "}
              <div className="flex-grow flex flex-col gap-[14px] mb-[30px]">
                {" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-circle-check text-[#f5b800] mt-[3px] shrink-0"></i>{" "}
                  Exclusive title: "Exclusive Official Sponsor of SMART EDU
                  EXPO"{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-circle-check text-[#f5b800] mt-[3px] shrink-0"></i>{" "}
                  Prominent & large logo placement on all promotional
                  materials{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-circle-check text-[#f5b800] mt-[3px] shrink-0"></i>{" "}
                  Logo on the event website{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-circle-check text-[#f5b800] mt-[3px] shrink-0"></i>{" "}
                  Mention in press releases & media coverage{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-circle-check text-[#f5b800] mt-[3px] shrink-0"></i>{" "}
                  Premium location exhibition booth (36 sqm){" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-circle-check text-[#f5b800] mt-[3px] shrink-0"></i>{" "}
                  Logo display on main stage screen{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-circle-check text-[#f5b800] mt-[3px] shrink-0"></i>{" "}
                  Speaking opportunity during opening ceremony (5 minutes){" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-circle-check text-[#f5b800] mt-[3px] shrink-0"></i>{" "}
                  Social media promotion (2-4 posts){" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-circle-check text-[#f5b800] mt-[3px] shrink-0"></i>{" "}
                  10 VIP invitations{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-circle-check text-[#f5b800] mt-[3px] shrink-0"></i>{" "}
                  Special recognition on stage during the event{" "}
                </div>{" "}
              </div>{" "}
              <Link
                to="/contact"
                className="w-full block text-center bg-[#f5b800] text-[#111827] font-bold py-[12px] rounded-[30px] hover:bg-[#eab308] transition-colors mt-auto"
              >
                {" "}
                Become a Official Sponsor{" "}
              </Link>{" "}
            </div>{" "}
            {/* GOLD SPONSOR */}{" "}
            <div className="bg-[#632591] border border-white rounded-[16px] p-[40px_20px_30px] flex flex-col transition-all duration-300 hover:-translate-y-[5px]">
              {" "}
              <div className="text-center mb-[25px]">
                {" "}
                <img
                  src="/icon3/gold.png"
                  alt="Gold Medal"
                  className="w-[70px] h-[70px] mx-auto mb-[15px] object-contain"
                />{" "}
                <h3 className="font-sora font-[600] text-[#f5b800] text-[23px] leading-[30px] mb-[10px] tracking-[0.5px]">
                  Gold Sponsor
                </h3>{" "}
                <div className="font-sora text-[32px] font-extrabold text-[#f5b800]">
                  4,000 BHD
                </div>{" "}
              </div>{" "}
              <div className="flex-grow flex flex-col gap-[14px] mb-[30px]">
                {" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-check text-[#f5b800] mt-[3px] shrink-0"></i>{" "}
                  Prominent & large logo placement on all promotional
                  materials{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-check text-[#f5b800] mt-[3px] shrink-0"></i>{" "}
                  Logo on the event website{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-check text-[#f5b800] mt-[3px] shrink-0"></i>{" "}
                  Mention in press releases & media coverage{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-check text-[#f5b800] mt-[3px] shrink-0"></i>{" "}
                  Premium location exhibition booth{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-check text-[#f5b800] mt-[3px] shrink-0"></i>{" "}
                  Logo display on main stage screen{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-check text-[#f5b800] mt-[3px] shrink-0"></i>{" "}
                  Speaking opportunity during the opening ceremony{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-check text-[#f5b800] mt-[3px] shrink-0"></i>{" "}
                  Social media promotion{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-check text-[#f5b800] mt-[3px] shrink-0"></i>{" "}
                  10 VIP invitations{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-check text-[#f5b800] mt-[3px] shrink-0"></i>{" "}
                  Special recognition on stage during the event{" "}
                </div>{" "}
              </div>{" "}
              <Link
                to="/contact"
                className="w-full block text-center bg-[#f5b800] text-[#111827] font-bold py-[12px] rounded-[30px] hover:bg-[#eab308] transition-colors mt-auto"
              >
                {" "}
                Become a Gold Sponsor{" "}
              </Link>{" "}
            </div>{" "}
            {/* SILVER SPONSOR */}{" "}
            <div className="bg-[#632591] border border-white rounded-[16px] p-[40px_20px_30px] flex flex-col transition-all duration-300 hover:-translate-y-[5px]">
              {" "}
              <div className="text-center mb-[25px]">
                {" "}
                <img
                  src="/icon3/silver.png"
                  alt="Silver Medal"
                  className="w-[70px] h-[70px] mx-auto mb-[15px] object-contain"
                />{" "}
                <h3 className="font-sora font-[600] text-white text-[23px] leading-[30px] mb-[10px] tracking-[0.5px]">
                  Silver Sponsor
                </h3>{" "}
                <div className="font-sora text-[32px] font-extrabold text-white">
                  2,000 BHD
                </div>{" "}
              </div>{" "}
              <div className="flex-grow flex flex-col gap-[14px] mb-[30px]">
                {" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-check text-white mt-[3px] shrink-0"></i>{" "}
                  Medium size logo placement on promotional materials{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-check text-white mt-[3px] shrink-0"></i>{" "}
                  Logo on the event website{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-check text-white mt-[3px] shrink-0"></i>{" "}
                  Mention in press releases & media coverage{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-check text-white mt-[3px] shrink-0"></i>{" "}
                  Standard exhibition booth{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-check text-white mt-[3px] shrink-0"></i>{" "}
                  Social media promotion{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-check text-white mt-[3px] shrink-0"></i>{" "}
                  6 VIP invitations{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-check text-white mt-[3px] shrink-0"></i>{" "}
                  Recognition among sponsors during the event{" "}
                </div>{" "}
              </div>{" "}
              <Link
                to="/contact"
                className="w-full block text-center bg-[#e2e8f0] text-[#0f172a] font-bold py-[12px] rounded-[30px] hover:bg-[#cbd5e1] transition-colors mt-auto"
              >
                {" "}
                Become a Silver Sponsor{" "}
              </Link>{" "}
            </div>{" "}
            {/* BRONZE SPONSOR */}{" "}
            <div className="bg-[#632591] border border-white rounded-[16px] p-[40px_20px_30px] flex flex-col transition-all duration-300 hover:-translate-y-[5px]">
              {" "}
              <div className="text-center mb-[25px]">
                {" "}
                <img
                  src="/icon3/bronz.png"
                  alt="Bronze Medal"
                  className="w-[70px] h-[70px] mx-auto mb-[15px] object-contain"
                />{" "}
                <h3 className="font-sora font-[600] text-[#d97706] text-[23px] leading-[30px] mb-[10px] tracking-[0.5px]">
                  Bronze Sponsor
                </h3>{" "}
                <div className="font-sora text-[32px] font-extrabold text-[#d97706]">
                  1,000 BHD
                </div>{" "}
              </div>{" "}
              <div className="flex-grow flex flex-col gap-[14px] mb-[30px]">
                {" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-check text-[#d97706] mt-[3px] shrink-0"></i>{" "}
                  Standard listing on promotional materials{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-check text-[#d97706] mt-[3px] shrink-0"></i>{" "}
                  Logo on the event website{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-check text-[#d97706] mt-[3px] shrink-0"></i>{" "}
                  Limited exhibition space{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-check text-[#d97706] mt-[3px] shrink-0"></i>{" "}
                  Social media promotion{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-check text-[#d97706] mt-[3px] shrink-0"></i>{" "}
                  3 VIP invitations{" "}
                </div>{" "}
                <div className="flex items-start gap-[8px] font-manrope font-[600] text-white text-[16px] leading-[26px]">
                  {" "}
                  <i className="fa-solid fa-check text-[#d97706] mt-[3px] shrink-0"></i>{" "}
                  Sponsor listing during the event{" "}
                </div>{" "}
              </div>{" "}
              <Link
                to="/contact"
                className="w-full block text-center bg-[#b45309] text-white font-bold py-[12px] rounded-[30px] hover:bg-[#92400e] transition-colors mt-auto"
              >
                {" "}
                Become a Bronze Sponsor{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Backed by Organisations */}{" "}
      <section className="py-[60px] bg-white">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center mb-[50px]">
            {" "}
            <div className="flex items-center justify-center gap-[6px] mb-[10px]">
              {" "}
              <div className="w-[6px] h-[6px] rounded-full bg-[#06b6d4]"></div>{" "}
              <div className="text-[#0ea5e9] text-[12px] font-bold uppercase tracking-[1px]">
                PARTNERS
              </div>{" "}
            </div>{" "}
            <h2 className="text-[35px] leading-[46px] font-sora font-semibold text-[#5b1a8c] ">
              Backed by leading organisations
            </h2>{" "}
            <div className="flex items-center justify-center gap-[6px] mt-[15px]">
              {" "}
              <div className="h-[2px] w-[80px] bg-[#e2e8f0]"></div>{" "}
              <div className="h-[3px] w-[3px] rounded-full bg-[#e2e8f0]"></div>{" "}
              <div className="h-[3px] w-[3px] rounded-full bg-[#e2e8f0]"></div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[16px]">
            {" "}
            {/* Box 1 */}{" "}
            <div className="bg-white border border-[#e5e7eb] rounded-[6px] p-[25px_15px] flex flex-col items-center h-full shadow-[0_2px_15px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              {" "}
              <div className="text-[11px] font-extrabold text-[#1e3a8a] uppercase tracking-[0.5px] mb-[20px] text-center w-full">
                ORGANISED BY
              </div>{" "}
              <div className="h-[90px] w-full bg-[#f0fdfa] rounded-[6px] flex items-center justify-center p-[10px] mb-[25px] border border-[#ccfbf1]">
                {" "}
                <img
                  src="/icon4/logo2.png"
                  alt="Future Ex"
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                />{" "}
              </div>{" "}
              <div className="mt-auto flex flex-col items-center w-full">
                {" "}
                <div className="text-[14px] font-bold text-[#1e3a8a] text-center mb-[4px]">
                  Future Ex
                </div>{" "}
                <div className="text-[11px] text-[#6b7280] font-medium text-center leading-[1.3]">
                  Exhibitions & Conferences Organizing
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {/* Box 2 */}{" "}
            <div className="bg-white border border-[#e5e7eb] rounded-[6px] p-[25px_15px] flex flex-col items-center h-full shadow-[0_2px_15px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              {" "}
              <div className="text-[11px] font-extrabold text-[#1e3a8a] uppercase tracking-[0.5px] mb-[20px] text-center w-full">
                STRATEGIC SPONSOR
              </div>{" "}
              <div className="h-[90px] w-full flex items-center justify-center mb-[25px]">
                {" "}
                <img
                  src="/icon4/logo1.webp"
                  alt="Spiritania"
                  className="h-full w-full object-contain rounded-[6px]"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/icon4/logo4.svg";
                    e.target.className = "max-h-full max-w-full object-contain";
                  }}
                />{" "}
              </div>{" "}
              <div className="mt-auto flex flex-col items-center w-full">
                {" "}
                <div className="text-[14px] font-bold text-[#1e3a8a] text-center mb-[4px]">
                  Spiritania
                </div>{" "}
                <div className="text-[11px] text-[#6b7280] font-medium text-center leading-[1.3]">
                  Strategic partner
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {/* Box 3 */}{" "}
            <div className="bg-white border border-[#e5e7eb] rounded-[6px] p-[25px_15px] flex flex-col items-center h-full shadow-[0_2px_15px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              {" "}
              <div className="text-[11px] font-extrabold text-[#1e3a8a] uppercase tracking-[0.5px] mb-[20px] text-center w-full">
                MEDIA SPONSOR
              </div>{" "}
              <div className="h-[90px] w-full bg-[#f0fdfa] rounded-[6px] flex items-center justify-center p-[5px] mb-[25px] border border-[#ccfbf1]">
                {" "}
                <img
                  src="/icon4/logo5.webp"
                  alt="Al Ayam"
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                  onError={(e) => (e.target.src = "/icon4/logo7.webp")}
                />{" "}
              </div>{" "}
              <div className="mt-auto flex flex-col items-center w-full">
                {" "}
                <div className="text-[14px] font-bold text-[#1e3a8a] text-center mb-[4px]">
                  Al Ayam
                </div>{" "}
                <div className="text-[11px] text-[#6b7280] font-medium text-center leading-[1.3]">
                  Official media partner
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {/* Box 4 */}{" "}
            <div className="bg-white border border-[#e5e7eb] rounded-[6px] p-[25px_15px] flex flex-col items-center h-full shadow-[0_2px_15px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              {" "}
              <div className="text-[11px] font-extrabold text-[#1e3a8a] uppercase tracking-[0.5px] mb-[20px] text-center w-full">
                MEDIA SPONSOR
              </div>{" "}
              <div className="h-[90px] w-full bg-[#f0fdfa] rounded-[6px] flex items-center justify-center p-[10px] mb-[25px] border border-[#ccfbf1]">
                {" "}
                <img
                  src="/icon4/logo6.jpg"
                  alt="Al Ayam"
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                />{" "}
              </div>{" "}
              <div className="mt-auto flex flex-col items-center w-full">
                {" "}
                <div className="text-[14px] font-bold text-[#1e3a8a] text-center mb-[4px]">
                  Al Ayam
                </div>{" "}
                <div className="text-[11px] text-[#6b7280] font-medium text-center leading-[1.3]">
                  Official media partner
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {/* Box 5 */}{" "}
            <div className="bg-white border border-[#e5e7eb] rounded-[6px] p-[25px_15px] flex flex-col items-center h-full shadow-[0_2px_15px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              {" "}
              <div className="text-[11px] font-extrabold text-[#1e3a8a] uppercase tracking-[0.5px] mb-[20px] text-center w-full">
                SUPPORTING PARTNER
              </div>{" "}
              <div className="h-[90px] w-full bg-[#f0fdfa] rounded-[6px] flex items-center justify-center p-[15px] mb-[25px] border border-[#ccfbf1]">
                {" "}
                <img
                  src="/icon4/logo3.webp"
                  alt="Global Connexions"
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                />{" "}
              </div>{" "}
              <div className="mt-auto flex flex-col items-center w-full">
                {" "}
                <div className="text-[14px] font-bold text-[#1e3a8a] text-center mb-[4px]">
                  Global Connexions
                </div>{" "}
                <div className="text-[11px] text-[#6b7280] font-medium text-center leading-[1.3]">
                  Supporting partner
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* Navigation Dots */}{" "}
          <div className="flex items-center justify-center gap-[8px] mt-[40px]">
            {" "}
            <div className="w-[24px] h-[4px] rounded-full bg-[#06b6d4]"></div>{" "}
            <div className="w-[4px] h-[4px] rounded-full bg-[#06b6d4]"></div>{" "}
            <div className="w-[4px] h-[4px] rounded-full bg-[#06b6d4]"></div>{" "}
            <div className="w-[4px] h-[4px] rounded-full bg-[#06b6d4]"></div>{" "}
            <div className="w-[4px] h-[4px] rounded-full bg-[#06b6d4]"></div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Venue */}{" "}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat min-h-[450px] flex items-center py-[60px]"
        style={{ backgroundImage: "url('/venue-bg.webp')" }}
      >
        {" "}
        <div className="container relative z-10 flex justify-end">
          {" "}
          <div className="w-full lg:w-1/2 lg:pl-[40px]">
            {" "}
            <h2 className="text-[35px] leading-[46px] font-sora font-bold text-[#07226a] mb-[15px] max-w-[500px]">
              The Perfect Venue for SMART EDU EXPO 2026
            </h2>{" "}
            <div className="flex items-center gap-[6px] mb-[25px]">
              {" "}
              <div className="h-[2px] w-[60px] bg-[#93c5fd]"></div>{" "}
              <div className="h-[3px] w-[3px] rounded-full bg-[#93c5fd]"></div>{" "}
              <div className="h-[3px] w-[3px] rounded-full bg-[#93c5fd]"></div>{" "}
            </div>{" "}
            <p className="font-manrope text-[16px] font-semibold text-[#000000] leading-[26px] mb-[30px] max-w-[550px]">
              {" "}
              Exhibition World Bahrain - Hall 2 offers a world-class environment
              to connect, exhibit, and grow. Its modern facilities and spacious
              exhibition setting provide the ideal platform to showcase
              innovation and create valuable connections.{" "}
            </p>{" "}
            <div className="flex flex-col gap-[15px]">
              {" "}
              <div className="flex items-start gap-[12px]">
                {" "}
                <i className="fa-solid fa-location-dot text-[#7c3aed] text-[18px] mt-[3px]"></i>{" "}
                <span className="font-manrope font-bold text-[17px] leading-[28px] text-[#07226a]">
                  Exhibition World Bahrain — Hall 2, Block 1062, Road 6204, Sakhir, Bahrain
                </span>{" "}
              </div>{" "}
              <div className="flex items-start gap-[12px]">
                {" "}
                <i className="fa-regular fa-calendar text-[#7c3aed] text-[18px] mt-[3px]"></i>{" "}
                <span className="font-manrope font-bold text-[17px] leading-[28px] text-[#07226a]">
                  Sep 29 - 30 & Oct 1 - 2, 2026
                </span>{" "}
              </div>{" "}
              <div className="flex items-start gap-[12px]">
                {" "}
                <i className="fa-solid fa-clock text-[#7c3aed] text-[18px] mt-[3px]"></i>{" "}
                <span className="font-manrope font-bold text-[17px] leading-[28px] text-[#07226a]">
                  9:00 AM – 9:00 PM
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* CTA */}{" "}
      <section className="py-[60px] bg-[#ffedf5]">
        {" "}
        <div className="container">
          {" "}
          <div className="bg-[#0f1123] rounded-[24px] p-[60px_20px] md:p-[80px_40px] text-center text-white relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
            {" "}
            {/* Decorative Globe Wireframe */}{" "}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-[20%] w-[350px] md:w-[500px] h-[350px] md:h-[500px] opacity-[0.07] pointer-events-none">
              {" "}
              <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                {" "}
                <circle
                  cx="50"
                  cy="50"
                  r="49"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />{" "}
                <ellipse
                  cx="50"
                  cy="50"
                  rx="20"
                  ry="49"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />{" "}
                <ellipse
                  cx="50"
                  cy="50"
                  rx="49"
                  ry="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />{" "}
                <path
                  d="M 15,15 Q 50,50 85,85"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />{" "}
                <path
                  d="M 15,85 Q 50,50 85,15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />{" "}
              </svg>{" "}
            </div>{" "}
            <div className="relative z-[2] max-w-[700px] mx-auto">
              {" "}
              <h2 className="text-[35px] leading-[46px] font-sora font-semibold text-[#5b1a8c] mb-[20px]">
                Be Part of the Future of Education
              </h2>{" "}
              <p className="text-[14px] md:text-[16px] text-[#e2e8f0] mb-[40px] max-w-[550px] mx-auto leading-[1.6] font-medium">
                {" "}
                Connect with knowledge, ideas, and opportunities while engaging
                with students, educators, and industry leaders.{" "}
              </p>{" "}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-[10px] bg-gradient-to-r from-[#4f46e5] to-[#38bdf8] text-white px-[40px] py-[16px] rounded-full font-manrope font-semibold text-[14px] leading-[14px] shadow-[0_4px_15px_rgba(79,70,229,0.25)] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(79,70,229,0.35)] transition-all duration-300 tracking-[0.5px] uppercase"
              >
                {" "}
                BOOK YOUR SPACE &rarr;{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Footer */}{" "}
    </main>
  );
};
export default Home;
