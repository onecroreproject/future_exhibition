import React from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
const Visitors = () => {
  return (
    <main>
      <SEO title="Visitors" description="Explore the Visitors page of SMART EDU EXPO - your premier educational exhibition and conference." />
      {" "}
      {/* Hero Section */}{" "}
      <section
        className="relative py-[100px] md:py-[150px] text-white overflow-hidden text-left bg-cover bg-center min-h-[500px] flex items-center"
        style={{ backgroundImage: "url('/visitors.webp')" }}
      >
        {" "}
        <div className="container relative z-10">
          {" "}
          <div className="max-w-[750px]">
            {" "}
            <h1 className="text-[58px] leading-[75px] font-sora font-semibold text-white mb-[24px]">
              {" "}
              Discover the
              <br />
              Future of Education{" "}
            </h1>{" "}
            <p className="text-[16px] md:text-[18px] text-white leading-[1.6] mb-[40px] max-w-[700px]">
              {" "}
              Explore leading educational institutions, EdTech innovations, and
              career pathways — all in one place, over 4 days at Exhibition
              World Bahrain.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Stats Bar */}{" "}
      <div className="bg-[#ffedf5] pt-[30px] pb-[40px]">
        {" "}
        <div className="container mx-auto">
          {" "}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[30px] lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-pink-200">
            {" "}
            <div className="flex items-center gap-[16px] px-[20px] w-full lg:w-1/4">
              {" "}
              <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] shrink-0">
                <i className="fa-solid fa-users"></i>
              </div>{" "}
              <div>
                {" "}
                <h3 className="text-[18px] font-bold text-[#1e1b4b] mb-[2px] font-sora">
                  3000+
                </h3>{" "}
                <p className="text-[12px] text-gray-500 leading-[1.4] font-medium">
                  Students and educators from
                  <br />
                  schools & institutes
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex items-center gap-[16px] px-[20px] w-full lg:w-1/4 pt-[15px] lg:pt-0">
              {" "}
              <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] shrink-0">
                <i className="fa-solid fa-layer-group"></i>
              </div>{" "}
              <div>
                {" "}
                <h3 className="text-[18px] font-bold text-[#1e1b4b] mb-[2px] font-sora">
                  3,000+ sqm
                </h3>{" "}
                <p className="text-[12px] text-gray-500 leading-[1.4] font-medium">
                  Exhibition Area
                  <br />
                  Spanning 3,000+ sqm
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex items-center gap-[16px] px-[20px] w-full lg:w-1/4 pt-[15px] lg:pt-0">
              {" "}
              <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] shrink-0">
                <i className="fa-regular fa-calendar-check"></i>
              </div>{" "}
              <div>
                {" "}
                <h3 className="text-[18px] font-bold text-[#1e1b4b] mb-[2px] font-sora">
                  4 Days
                </h3>{" "}
                <p className="text-[12px] text-gray-500 leading-[1.4] font-medium">
                  A grand event on Education +<br />
                  Technology = Future
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex items-center gap-[16px] px-[20px] w-full lg:w-1/4 pt-[15px] lg:pt-0">
              {" "}
              <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] shrink-0">
                <i className="fa-solid fa-location-dot"></i>
              </div>{" "}
              <div>
                {" "}
                <h3 className="text-[18px] font-bold text-[#1e1b4b] mb-[2px] font-sora">
                  Regional Platform
                </h3>{" "}
                <p className="text-[12px] text-gray-500 leading-[1.4] font-medium">
                  Visitors from Bahrain, KSA, the
                  <br />
                  Eastern Province, the GCC &<br />
                  beyond
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Value Prop Section */}{" "}
      <section className="py-[80px] bg-[#ffedf5]">
        {" "}
        <div className="container mx-auto">
          {" "}
          <div className="text-center mb-[60px]">
            {" "}
            <h2 className="text-[35px] leading-[46px] font-sora font-semibold text-[#5b1a8c] mb-[15px]">
              One Visit, Endless Opportunities
            </h2>{" "}
            <div className="flex items-center justify-center gap-[4px] mx-auto mb-[25px]">
              {" "}
              <div className="h-[2px] w-[90px] bg-[#632591]"></div>{" "}
              <div className="h-[2px] w-[12px] bg-[#632591]"></div>{" "}
            </div>{" "}
            <p className="text-[14px] text-[#6b7280] max-w-[800px] mx-auto leading-[1.6]">
              {" "}
              Whether you're a student exploring your next steps, a parent
              researching options, or an educator scouting new tools — SMART EDU
              EXPO brings the full education ecosystem under one roof.{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
            {" "}
            <div className="text-center">
              {" "}
              <div className="w-[60px] h-[60px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[24px] mx-auto mb-[20px] shadow-[0_5px_15px_rgba(219,39,119,0.2)]">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>{" "}
              <h3 className="font-sora font-[500] text-[#632591] text-[18px] leading-[23px] mb-[12px]">
                Meet Institutions
              </h3>{" "}
              <p className="font-manrope font-[400] text-[#6b7280] text-[16px] leading-[26px] max-w-[300px] mx-auto">
                Speak directly with universities, schools, and training centres
                about programs and admissions.
              </p>{" "}
            </div>{" "}
            <div className="text-center">
              {" "}
              <div className="w-[60px] h-[60px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[24px] mx-auto mb-[20px] shadow-[0_5px_15px_rgba(219,39,119,0.2)]">
                <i className="fa-regular fa-lightbulb"></i>
              </div>{" "}
              <h3 className="font-sora font-[500] text-[#632591] text-[18px] leading-[23px] mb-[12px]">
                Explore EdTech
              </h3>{" "}
              <p className="font-manrope font-[400] text-[#6b7280] text-[16px] leading-[26px] max-w-[300px] mx-auto">
                See the latest learning technologies, digital tools, and smart
                classroom solutions in action.
              </p>{" "}
            </div>{" "}
            <div className="text-center">
              {" "}
              <div className="w-[60px] h-[60px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[24px] mx-auto mb-[20px] shadow-[0_5px_15px_rgba(219,39,119,0.2)]">
                <i className="fa-regular fa-compass"></i>
              </div>{" "}
              <h3 className="font-sora font-[500] text-[#632591] text-[18px] leading-[23px] mb-[12px]">
                Plan Your Path
              </h3>{" "}
              <p className="font-manrope font-[400] text-[#6b7280] text-[16px] leading-[26px] max-w-[300px] mx-auto">
                Get guidance on academic and career pathways from experts and
                educators on-site.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Profiles Section */}{" "}
      <section className="py-[80px] bg-[#3b0764] text-white">
        {" "}
        <div className="container mx-auto">
          {" "}
          <div className="text-center mb-[50px]">
            {" "}
            <div className="text-[#db2777] text-[12px] font-bold uppercase tracking-[1px] mb-[10px]">
              VISITOR PROFILES
            </div>{" "}
            <h2 className="text-[35px] leading-[46px] font-sora font-semibold text-white">
              Built for Every Kind of Learner
            </h2>{" "}
            <div className="h-[2px] w-[40px] bg-[#db2777] mx-auto mt-[14px]"></div>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {" "}
            <div className="bg-[#ffedf5] rounded-[16px] p-[40px_20px] text-center transition-transform hover:-translate-y-[5px] shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
              {" "}
              <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] mx-auto mb-[20px]">
                <i className="fa-solid fa-user-graduate"></i>
              </div>{" "}
              <h4 className="font-sora font-[500] text-[#632591] text-[18px] leading-[23px] mb-[10px]">
                Students
              </h4>{" "}
              <p className="font-manrope font-[400] text-[#6b7280] text-[16px] leading-[26px]">
                Discover schools, universities, and career-ready skills
                programs.
              </p>{" "}
            </div>{" "}
            <div className="bg-[#ffedf5] rounded-[16px] p-[40px_20px] text-center transition-transform hover:-translate-y-[5px] shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
              {" "}
              <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] mx-auto mb-[20px]">
                <i className="fa-solid fa-people-roof"></i>
              </div>{" "}
              <h4 className="font-sora font-[500] text-[#632591] text-[18px] leading-[23px] mb-[10px]">
                Parents
              </h4>{" "}
              <p className="font-manrope font-[400] text-[#6b7280] text-[16px] leading-[26px]">
                Compare institutions and make informed decisions for your
                children's future.
              </p>{" "}
            </div>{" "}
            <div className="bg-[#ffedf5] rounded-[16px] p-[40px_20px] text-center transition-transform hover:-translate-y-[5px] shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
              {" "}
              <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] mx-auto mb-[20px]">
                <i className="fa-solid fa-chalkboard-user"></i>
              </div>{" "}
              <h4 className="font-sora font-[500] text-[#632591] text-[18px] leading-[23px] mb-[10px]">
                Educators
              </h4>{" "}
              <p className="font-manrope font-[400] text-[#6b7280] text-[16px] leading-[26px]">
                Explore new teaching tools, technology, and professional
                development resources.
              </p>{" "}
            </div>{" "}
            <div className="bg-[#ffedf5] rounded-[16px] p-[40px_20px] text-center transition-transform hover:-translate-y-[5px] shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
              {" "}
              <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] mx-auto mb-[20px]">
                <i className="fa-solid fa-briefcase"></i>
              </div>{" "}
              <h4 className="font-sora font-[500] text-[#632591] text-[18px] leading-[23px] mb-[10px]">
                Institutions & Buyers
              </h4>{" "}
              <p className="font-manrope font-[400] text-[#6b7280] text-[16px] leading-[26px]">
                Source EdTech solutions, furniture, and classroom equipment.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Floorplan & Support */}{" "}
      <section className="py-[80px] bg-[#3b0764] text-white">
        {" "}
        <div className="container mx-auto">
          {" "}
          <div className="text-center mb-[50px]">
            {" "}
            <div className="text-[#db2777] text-[12px] font-bold uppercase tracking-[1px] mb-[10px]">
              PLAN YOUR VISIT
            </div>{" "}
            <h2 className="text-[35px] leading-[46px] font-sora font-semibold text-white">
              Everything You Need to Know
            </h2>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] items-stretch">
            {" "}
            {/* Left: Floor Plan Image */}{" "}
            <div className="bg-[#ffedf5] rounded-[24px] p-[20px] flex items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
              {" "}
              <img
                src="/floor-plan.webp"
                alt="Exhibition Floor Plan"
                className="w-full h-auto rounded-[12px]"
              />{" "}
            </div>{" "}
            {/* Right: Support Info */}{" "}
            <div className="bg-[#ffedf5] rounded-[24px] p-[40px] md:p-[50px] flex flex-col justify-center shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
              {" "}
              <h3 className="text-[#632591] text-[26px] md:text-[32px] font-sora font-bold mb-[40px] leading-[1.3]">
                Everything You Need to
                <br />
                Know
              </h3>{" "}
              <div className="flex flex-col gap-[30px]">
                {" "}
                <div className="flex gap-[20px] items-start">
                  {" "}
                  <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] shrink-0">
                    {" "}
                    <i className="fa-solid fa-headset"></i>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="text-[18px] font-bold text-[#632591] mb-[6px] font-sora">
                      General Enquiries
                    </h4>{" "}
                    <p className="text-[14px] text-[#6b7280] leading-[1.6]">
                      Questions about the event, schedule, or exhibitors.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex gap-[20px] items-start">
                  {" "}
                  <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] shrink-0">
                    {" "}
                    <i className="fa-solid fa-car"></i>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="text-[18px] font-bold text-[#632591] mb-[6px] font-sora">
                      Getting There
                    </h4>{" "}
                    <p className="text-[14px] text-[#6b7280] leading-[1.6]">
                      Directions, parking, and transport information.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex gap-[20px] items-start">
                  {" "}
                  <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] shrink-0">
                    {" "}
                    <i className="fa-solid fa-wheelchair"></i>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="text-[18px] font-bold text-[#632591] mb-[6px] font-sora">
                      Accessibility Support
                    </h4>{" "}
                    <p className="text-[14px] text-[#6b7280] leading-[1.6]">
                      Assistance for visitors with accessibility needs.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Register Section */}{" "}
      <section className="relative py-[80px] bg-[#ffedf5] overflow-hidden">
        {" "}
        <div className="container relative z-10 mx-auto">
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
            {" "}
            <div>
              {" "}
              <div className="text-[#db2777] text-[12px] font-bold uppercase tracking-[1px] mb-[10px]">
                PLAN YOUR VISIT
              </div>{" "}
              <h2 className="text-[35px] leading-[46px] font-sora font-semibold text-[#5b1a8c] mb-[20px]">
                Register to Visit
              </h2>{" "}
              <p className="text-[16px] text-[#6b7280] leading-[1.6] mb-[30px]">
                {" "}
                Registration is free and takes less than a minute.
                <br />
                Reserve your spot to skip the queue on arrival.{" "}
              </p>{" "}
              <div className="flex flex-col gap-[16px]">
                {" "}
                <div className="flex items-center gap-[16px] text-[15px] font-bold text-[#1e1b4b]">
                  {" "}
                  <div className="w-[40px] h-[40px] rounded-full bg-[#fae0ed] flex items-center justify-center text-[#db2777]">
                    <i className="fa-solid fa-phone"></i>
                  </div>{" "}
                  <span>+973 17311212</span>{" "}
                </div>{" "}
                <div className="flex items-center gap-[16px] text-[15px] font-bold text-[#1e1b4b]">
                  {" "}
                  <div className="w-[40px] h-[40px] rounded-full bg-[#fae0ed] flex items-center justify-center text-[#db2777]">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>{" "}
                  <span>WhatsApp +973 36004542</span>{" "}
                </div>{" "}
                <div className="flex items-center gap-[16px] text-[15px] font-bold text-[#1e1b4b]">
                  {" "}
                  <div className="w-[40px] h-[40px] rounded-full bg-[#fae0ed] flex items-center justify-center text-[#db2777]">
                    <i className="fa-regular fa-envelope"></i>
                  </div>{" "}
                  <span>futureexhibitions@gmail.com</span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="bg-[#4c1d95] rounded-[24px] p-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
              {" "}
              <form
                action="#"
                method="POST"
                className="flex flex-col gap-[20px]"
              >
                {" "}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  {" "}
                  <div className="flex flex-col gap-[8px]">
                    {" "}
                    <label
                      htmlFor="name"
                      className="text-[13px] font-bold text-white"
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
                      className="text-[13px] font-bold text-white"
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
                    className="text-[13px] font-bold text-white"
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
                    htmlFor="type"
                    className="text-[13px] font-bold text-white"
                  >
                    Visitor Type
                  </label>{" "}
                  <select
                    id="type"
                    className="w-full h-[50px] px-[16px] border-none rounded-[8px] bg-white focus:ring-2 focus:ring-[#db2777] outline-none transition-all appearance-none cursor-pointer text-[#1e1b4b]"
                  >
                    {" "}
                    <option value="">Select Visitor Type</option>{" "}
                    <option value="student">Student</option>{" "}
                    <option value="parent">Parent</option>{" "}
                    <option value="educator">Educator</option>{" "}
                    <option value="professional">
                      Professional / Buyer
                    </option>{" "}
                  </select>{" "}
                </div>{" "}
                <div className="flex flex-col gap-[8px]">
                  {" "}
                  <label
                    htmlFor="org"
                    className="text-[13px] font-bold text-white"
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
                  className="mt-[10px] w-full bg-[#3b82f6] text-white rounded-[8px] h-[54px] font-bold text-[15px] transition-transform duration-300 shadow-[0_8px_20px_rgba(59,130,246,0.3)] hover:-translate-y-[2px]"
                >
                  {" "}
                  Register Now{" "}
                </button>{" "}
              </form>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </main>
  );
};
export default Visitors;
