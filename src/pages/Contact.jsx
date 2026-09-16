import React from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <main>
      <SEO title="Contact" description="Explore the Contact page of SMART EDU EXPO - your premier educational exhibition and conference." />
      {" "}
      {/* Hero Section */}{" "}
      <section
        className="relative py-[100px] md:py-[150px] text-white overflow-hidden text-center bg-cover bg-center min-h-[500px] flex items-center"
        style={{ backgroundImage: "url('/contact us.webp')" }}
      >
        {" "}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0f1035] to-transparent pointer-events-none opacity-80"></div>{" "}
        <div className="container relative z-10 flex flex-col items-center">
          {" "}
          <div className="max-w-[750px]">
            {" "}
            <h1 className="text-[58px] leading-[75px] font-sora font-semibold text-white mb-[24px]">
              {" "}
              Get in Touch{" "}
            </h1>{" "}
            <p className="text-[16px] md:text-[18px] text-white leading-[1.6] mb-[40px] max-w-[700px]">
              {" "}
              Have a question about exhibiting, visiting, sponsorship, or media
              coverage? Our team is ready to help.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Content */}{" "}
      <div className="relative z-10 -mt-[40px] pb-[80px] bg-[#ffedf5]">
        {" "}
        <div className="container mx-auto px-[20px]">
          {" "}
          {/* Contact Cards */}{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] mb-[60px] pt-[20px]">
            {" "}
            <div className="bg-[#5b1a8c] rounded-[24px] p-[40px_20px] text-center shadow-[0_15px_40px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-[5px]">
              {" "}
              <div className="w-[60px] h-[60px] rounded-full bg-[#fbcfe8] text-[#db2777] flex items-center justify-center text-[24px] mb-[20px] shadow-sm">
                <i className="fa-solid fa-phone-volume"></i>
              </div>{" "}
              <h3 className="text-[20px] font-bold text-white mb-[16px] font-sora">
                Call Us
              </h3>{" "}
              <p className="text-[14px] text-[#e2e8f0] leading-[1.8]">
                +973 17311212
                <br />
                +973 36004542
                <br />
                +973 36746660
              </p>{" "}
            </div>{" "}
            <div className="bg-[#5b1a8c] rounded-[24px] p-[40px_20px] text-center shadow-[0_15px_40px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-[5px]">
              {" "}
              <div className="w-[60px] h-[60px] rounded-full bg-[#fbcfe8] text-[#db2777] flex items-center justify-center text-[24px] mb-[20px] shadow-sm">
                <i className="fa-brands fa-whatsapp"></i>
              </div>{" "}
              <h3 className="text-[20px] font-bold text-white mb-[16px] font-sora">
                WhatsApp
              </h3>{" "}
              <p className="text-[14px] text-[#e2e8f0] leading-[1.8]">
                +973 36004542
                <br />
                +973 36734442
              </p>{" "}
            </div>{" "}
            <div className="bg-[#5b1a8c] rounded-[24px] p-[40px_20px] text-center shadow-[0_15px_40px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-[5px]">
              {" "}
              <div className="w-[60px] h-[60px] rounded-full bg-[#fbcfe8] text-[#db2777] flex items-center justify-center text-[24px] mb-[20px] shadow-sm">
                <i className="fa-regular fa-envelope"></i>
              </div>{" "}
              <h3 className="text-[20px] font-bold text-white mb-[16px] font-sora">
                Email
              </h3>{" "}
              <p className="text-[14px] text-[#e2e8f0] leading-[1.8]">
                futureexhibitions@
                <br />
                gmail.com
              </p>{" "}
            </div>{" "}
            <div className="bg-[#5b1a8c] rounded-[24px] p-[40px_20px] text-center shadow-[0_15px_40px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-[5px]">
              {" "}
              <div className="w-[60px] h-[60px] rounded-full bg-[#fbcfe8] text-[#db2777] flex items-center justify-center text-[24px] mb-[20px] shadow-sm">
                <i className="fa-solid fa-location-dot"></i>
              </div>{" "}
              <h3 className="text-[20px] font-bold text-white mb-[16px] font-sora">
                Visit Us
              </h3>{" "}
              <p className="text-[14px] text-[#e2e8f0] leading-[1.8]">
                Exhibition World Bahrain,
                <br />
                Hall 2, Block 1062,
                <br />
                Road 6204, Sakhir, Bahrain
              </p>{" "}
            </div>{" "}
          </div>{" "}
          {/* Main Content (Form & Map) */}{" "}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px]">
            {" "}
            {/* Form Section */}{" "}
            <div className="bg-[#5b1a8c] rounded-[24px] p-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              {" "}
              <form
                action="#"
                method="POST"
                className="flex flex-col gap-[20px]"
              >
                {" "}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                  {" "}
                  <div className="flex flex-col gap-[8px]">
                    {" "}
                    <label
                      htmlFor="name"
                      className="text-[14px] font-bold text-white"
                    >
                      Full Name
                    </label>{" "}
                    <input
                      type="text"
                      id="name"
                      className="w-full h-[50px] px-[16px] border-none rounded-[8px] bg-white focus:ring-2 focus:ring-[#db2777] outline-none transition-all text-[#1e1b4b]"
                    />{" "}
                  </div>{" "}
                  <div className="flex flex-col gap-[8px]">
                    {" "}
                    <label
                      htmlFor="email"
                      className="text-[14px] font-bold text-white"
                    >
                      Email
                    </label>{" "}
                    <input
                      type="email"
                      id="email"
                      className="w-full h-[50px] px-[16px] border-none rounded-[8px] bg-white focus:ring-2 focus:ring-[#db2777] outline-none transition-all text-[#1e1b4b]"
                    />{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex flex-col gap-[8px]">
                  {" "}
                  <label
                    htmlFor="phone"
                    className="text-[14px] font-bold text-white"
                  >
                    Phone / WhatsApp
                  </label>{" "}
                  <input
                    type="tel"
                    id="phone"
                    className="w-full h-[50px] px-[16px] border-none rounded-[8px] bg-white focus:ring-2 focus:ring-[#db2777] outline-none transition-all text-[#1e1b4b]"
                  />{" "}
                </div>{" "}
                <div className="flex flex-col gap-[8px]">
                  {" "}
                  <label
                    htmlFor="visitorType"
                    className="text-[14px] font-bold text-white"
                  >
                    Visitor Type
                  </label>{" "}
                  <select
                    id="visitorType"
                    className="w-full h-[50px] px-[16px] border-none rounded-[8px] bg-white focus:ring-2 focus:ring-[#db2777] outline-none transition-all appearance-none cursor-pointer text-[#1e1b4b]"
                  >
                    {" "}
                    <option value="">Select Visitor Type</option>{" "}
                    <option value="student">Student</option>{" "}
                    <option value="professional">Professional</option>{" "}
                    <option value="educator">Educator</option>{" "}
                    <option value="exhibitor">Exhibitor</option>{" "}
                  </select>{" "}
                </div>{" "}
                <div className="flex flex-col gap-[8px]">
                  {" "}
                  <label
                    htmlFor="org"
                    className="text-[14px] font-bold text-white"
                  >
                    School / Organization (Optional)
                  </label>{" "}
                  <input
                    type="text"
                    id="org"
                    className="w-full h-[50px] px-[16px] border-none rounded-[8px] bg-white focus:ring-2 focus:ring-[#db2777] outline-none transition-all text-[#1e1b4b]"
                  />{" "}
                </div>{" "}
                <button
                  type="submit"
                  className="mt-[20px] w-full bg-gradient-to-r from-[#4f46e5] to-[#38bdf8] text-white rounded-full h-[54px] font-bold text-[15px] transition-transform duration-300 shadow-[0_8px_20px_rgba(79,70,229,0.3)] hover:-translate-y-[2px] tracking-[0.5px]"
                >
                  {" "}
                  Register Now{" "}
                </button>{" "}
              </form>{" "}
            </div>{" "}
            {/* Map Section */}{" "}
            <div className="flex flex-col gap-[30px] h-full">
              {" "}
              <div className="rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] flex-grow min-h-[350px]">
                {" "}
                {/* Embedded Google Map targeting Zallaq / Exhibition World Bahrain */}{" "}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14336.98048633767!2d50.4996!3d26.0594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e48530058b76c07%3A0x6b8eb7c52670edce!2sExhibition%20World%20Bahrain!5e0!3m2!1sen!2sbh!4v1700000000000!5m2!1sen!2sbh"
                  className="w-full h-full border-none"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Exhibition World Bahrain Map"
                ></iframe>{" "}
              </div>{" "}
              <div className="bg-[#5b1a8c] rounded-[24px] p-[30px] text-white flex gap-[20px] items-center shadow-[0_15px_30px_rgba(0,0,0,0.15)]">
                {" "}
                <div className="w-[50px] h-[50px] rounded-full bg-[#fbcfe8] flex items-center justify-center text-[24px] text-[#db2777] shrink-0">
                  {" "}
                  <i className="fa-regular fa-envelope"></i>{" "}
                </div>{" "}
                <div className="relative z-10">
                  {" "}
                  <h3 className="text-[20px] font-bold text-white mb-[4px] font-sora">
                    Exhibition World Bahrain, Hall 2
                  </h3>{" "}
                  <p className="text-[14px] text-[#e2e8f0] mb-[12px]">
                    Block 1062, Road 6204, Sakhir, Bahrain
                  </p>{" "}
                  <p className="text-[14px] text-[#c4b5fd] leading-[1.6] mb-[20px]">
                    We are located in the heart of Sakhir, easily accessible
                    from Manama and major highways across Bahrain.
                  </p>{" "}
                  <Link
                    to="https://maps.google.com"
                    target="_blank"
                    className="inline-flex items-center gap-[8px] bg-gradient-to-r from-[#4f46e5] to-[#38bdf8] text-white rounded-full px-[24px] py-[10px] font-bold text-[13px] transition-transform duration-300 hover:-translate-y-[2px] shadow-[0_4px_15px_rgba(79,70,229,0.3)] tracking-[0.5px]"
                  >
                    {" "}
                    <i className="fa-solid fa-map-location-dot"></i> Get
                    Directions{" "}
                  </Link>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
};
export default Contact;
