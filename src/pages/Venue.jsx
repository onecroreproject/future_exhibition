import React from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
const Venue = () => {
  return (
    <main>
      <SEO title="Venue" description="Explore the Venue page of SMART EDU EXPO - your premier educational exhibition and conference." />
      {" "}
      {/* Venue Hero Section */}{" "}
      <section
        className="relative py-[120px] md:py-[150px] text-white overflow-hidden text-left bg-cover bg-center min-h-[600px] flex items-center"
        style={{ backgroundImage: "url('/venue.webp')" }}
      >
        {" "}
        {" "}
        <div className="container relative z-10">
          {" "}
          <div className="max-w-[750px]">
            {" "}
            <h1 className="text-[58px] leading-[75px] font-sora font-semibold text-white mb-[24px]">
              {" "}
              Exhibition World Bahrain — Hall 2{" "}
            </h1>{" "}
            <p className="font-manrope font-[400] text-white text-[16px] leading-[26px] md:text-[18px] mb-[40px] max-w-[700px]">
              {" "}
              A world-class venue in Block 1062, Road 6204, Sakhir, Bahrain, offering the
              ideal setting to connect, exhibit, and showcase innovation.{" "}
            </p>{" "}
            <div>
              {" "}
              <Link
                to="#"
                className="inline-flex items-center justify-center gap-[10px] bg-gradient-to-r from-[#4f46e5] to-[#38bdf8] text-white px-[40px] py-[16px] rounded-full font-manrope font-semibold text-[14px] leading-[14px] shadow-[0_4px_15px_rgba(79,70,229,0.25)] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(79,70,229,0.35)] transition-all duration-300 tracking-[0.5px] uppercase"
              >
                {" "}
                BOOK YOUR SPACE &rarr;{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Features Section */}{" "}
      <section className="py-[80px] bg-[#ffedf5]">
        {" "}
        <div className="container mx-auto px-[20px]">
          {" "}
          <div className="text-center mb-[60px]">
            {" "}
            <div className="text-[#db2777] text-[12px] font-bold uppercase tracking-[1px] mb-[10px]">
              THE VENUE
            </div>{" "}
            <h2 className="font-sora font-[600] text-[#faf6fd] text-[35px] leading-[46px] mb-[16px]">
              A Modern, Accessible Setting
            </h2>{" "}
            <div className="flex justify-center items-center mb-[20px]">
              {" "}
              <div className="h-[2px] w-[30px] bg-gradient-to-r from-transparent to-[#db2777]"></div>{" "}
              <i className="fa-solid fa-diamond text-[#db2777] text-[10px] mx-[10px]"></i>{" "}
              <div className="h-[2px] w-[30px] bg-gradient-to-l from-transparent to-[#db2777]"></div>{" "}
            </div>{" "}
            <p className="font-manrope font-[400] text-white text-[16px] leading-[26px] max-w-[700px] mx-auto">
              {" "}
              Exhibition World Bahrain provides state-of-the-art facilities
              purpose-built for large-scale exhibitions, positioned as a gateway
              connecting Bahrain to regional and global markets.{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
            {" "}
            <div className="flex gap-[20px] items-start">
              {" "}
              <div className="w-[50px] h-[50px] shrink-0 rounded-full bg-[#fae0ed] flex items-center justify-center text-[20px] text-[#db2777]">
                {" "}
                <i className="fa-solid fa-location-dot"></i>{" "}
              </div>{" "}
              <div>
                {" "}
                <h3 className="text-[18px] font-bold text-[#632591] mb-[8px] font-sora">
                  Prime Location
                </h3>{" "}
                <p className="font-manrope font-[400] text-white text-[16px] leading-[26px]">
                  Block 1062, Road 6204, Sakhir, Bahrain, easily accessible from Manama and
                  neighboring GCC routes.
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex gap-[20px] items-start">
              {" "}
              <div className="w-[50px] h-[50px] shrink-0 rounded-full bg-[#fae0ed] flex items-center justify-center text-[20px] text-[#db2777]">
                {" "}
                <i className="fa-regular fa-building"></i>{" "}
              </div>{" "}
              <div>
                {" "}
                <h3 className="text-[18px] font-bold text-[#632591] mb-[8px] font-sora">
                  Modern Facilities
                </h3>{" "}
                <p className="font-manrope font-[400] text-black text-[16px] leading-[26px]">
                  Spacious, climate-controlled halls with modern infrastructure.
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex gap-[20px] items-start">
              {" "}
              <div className="w-[50px] h-[50px] shrink-0 rounded-full bg-[#fae0ed] flex items-center justify-center text-[20px] text-[#db2777]">
                {" "}
                <i className="fa-solid fa-car-side"></i>{" "}
              </div>{" "}
              <div>
                {" "}
                <h3 className="text-[18px] font-bold text-[#632591] mb-[8px] font-sora">
                  Easy Access
                </h3>{" "}
                <p className="font-manrope font-[400] text-black text-[16px] leading-[26px]">
                  On-site parking and clear entry/exit points for smooth visitor
                  flow.
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Info & Map Section */}{" "}
      <section className="py-[80px] bg-[#3b0764]">
        {" "}
        <div className="container mx-auto px-[20px]">
          {" "}
          {/* Top Info Cards */}{" "}
          <div className="text-center mb-[40px]">
            {" "}
            <div className="text-[#db2777] text-[12px] font-bold uppercase tracking-[1px] mb-[10px]">
              VENUE INFORMATION
            </div>{" "}
            <h2 className="font-sora font-[600] text-[#faf6fd] text-[35px] leading-[46px] mb-[30px]">
              Everything You Need to Know
            </h2>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] mb-[80px]">
            {" "}
            <div className="bg-[#ffedf5] rounded-[16px] p-[30px_20px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              {" "}
              <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] mx-auto mb-[16px]">
                {" "}
                <i className="fa-solid fa-building-columns"></i>{" "}
              </div>{" "}
              <h4 className="text-[18px] font-bold text-[#632591] mb-[12px]">
                Hall
              </h4>{" "}
              <p className="font-manrope font-[400] text-white text-[16px] leading-[26px]">
                Hall 2,
                <br />
                Exhibition World Bahrain
              </p>{" "}
            </div>{" "}
            <div className="bg-[#ffedf5] rounded-[16px] p-[30px_20px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              {" "}
              <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] mx-auto mb-[16px]">
                {" "}
                <i className="fa-regular fa-calendar-check"></i>{" "}
              </div>{" "}
              <h4 className="text-[18px] font-bold text-[#632591] mb-[12px]">
                Dates
              </h4>{" "}
              <p className="font-manrope font-[400] text-black text-[16px] leading-[26px]">
                Sep 29–30 &<br />
                Oct 1–2, 2026
              </p>{" "}
            </div>{" "}
            <div className="bg-[#ffedf5] rounded-[16px] p-[30px_20px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              {" "}
              <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] mx-auto mb-[16px]">
                {" "}
                <i className="fa-regular fa-clock"></i>{" "}
              </div>{" "}
              <h4 className="text-[18px] font-bold text-[#632591] mb-[12px]">
                Hours
              </h4>{" "}
              <p className="font-manrope font-[400] text-black text-[16px] leading-[26px]">
                9:00 AM –<br />
                9:00 PM daily
              </p>{" "}
            </div>{" "}
            <div className="bg-[#ffedf5] rounded-[16px] p-[30px_20px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              {" "}
              <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] mx-auto mb-[16px]">
                {" "}
                <i className="fa-solid fa-expand"></i>{" "}
              </div>{" "}
              <h4 className="text-[18px] font-bold text-[#632591] mb-[12px]">
                Exhibition Area
              </h4>{" "}
              <p className="font-manrope font-[400] text-black text-[16px] leading-[26px]">
                Starting from
                <br />
                3,000 sqm (expandable)
              </p>{" "}
            </div>{" "}
          </div>{" "}
          {/* Bottom Map & Facilities */}{" "}
          <div className="text-center mb-[40px]">
            {" "}
            <h2 className="font-sora font-[600] text-[#faf6fd] text-[35px] leading-[46px] mb-[16px]">
              Find Your Way to Exhibition World Bahrain
            </h2>{" "}
            <p className="font-manrope font-[400] text-black text-[16px] leading-[26px] max-w-[600px] mx-auto">
              {" "}
              Located in Sakhir, the venue is well-connected by road with
              dedicated parking for exhibitors and visitors.{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {" "}
            {/* Left Col - Map */}{" "}
            <div className="bg-[#ffedf5] rounded-[24px] p-[20px] shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
              {" "}
              <div className="rounded-[16px] overflow-hidden mb-[24px] border border-gray-200 h-[300px]">
                {" "}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14336.98048633767!2d50.4996!3d26.0594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e48530058b76c07%3A0x6b8eb7c52670edce!2sExhibition%20World%20Bahrain!5e0!3m2!1sen!2sbh!4v1700000000000!5m2!1sen!2sbh"
                  className="w-full h-full border-none"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Exhibition World Bahrain Map"
                ></iframe>{" "}
              </div>{" "}
              <div className="flex flex-col gap-[16px] px-[10px]">
                {" "}
                <div className="flex gap-[16px] items-center">
                  {" "}
                  <div className="w-[36px] h-[36px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>{" "}
                  <p className="font-manrope font-[400] text-white text-[16px] leading-[26px]">
                    Exhibition World Bahrain, Hall 2, Block 1062, Road 6204, Sakhir, Bahrain
                  </p>{" "}
                </div>{" "}
                <div className="flex gap-[16px] items-center">
                  {" "}
                  <div className="w-[36px] h-[36px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-car"></i>
                  </div>{" "}
                  <p className="font-manrope font-[400] text-black text-[16px] leading-[26px]">
                    On-site parking is available
                  </p>{" "}
                </div>{" "}
                <div className="flex gap-[16px] items-center">
                  {" "}
                  <div className="w-[36px] h-[36px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-taxi"></i>
                  </div>{" "}
                  <p className="font-manrope font-[400] text-black text-[16px] leading-[26px]">
                    Taxi and ride-share drop-off point at main entrance
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {/* Right Col - Facilities */}{" "}
            <div className="bg-[#ffedf5] rounded-[24px] p-[40px] shadow-[0_15px_40px_rgba(0,0,0,0.3)] flex flex-col justify-center">
              {" "}
              <h3 className="text-[28px] font-bold text-[#632591] font-sora mb-[40px]">
                On-Site Facilities
              </h3>{" "}
              <div className="flex flex-col gap-[30px]">
                {" "}
                <div className="flex gap-[20px] items-start">
                  {" "}
                  <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] shrink-0">
                    <i className="fa-solid fa-wheelchair"></i>
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="text-[18px] font-bold text-[#632591] mb-[6px] font-sora">
                      Accessibility
                    </h4>{" "}
                    <p className="font-manrope font-[400] text-black text-[16px] leading-[26px]">
                      Ramps and accessible facilities throughout the venue.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex gap-[20px] items-start">
                  {" "}
                  <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] shrink-0">
                    <i className="fa-solid fa-mug-hot"></i>
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="text-[18px] font-bold text-[#632591] mb-[6px] font-sora">
                      Café Area
                    </h4>{" "}
                    <p className="font-manrope font-[400] text-black text-[16px] leading-[26px]">
                      On-site dining and refreshment options.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex gap-[20px] items-start">
                  {" "}
                  <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] shrink-0">
                    <i className="fa-solid fa-bag-shopping"></i>
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="text-[18px] font-bold text-[#632591] mb-[6px] font-sora">
                      Cloakroom & Info Desk
                    </h4>{" "}
                    <p className="font-manrope font-[400] text-black text-[16px] leading-[26px]">
                      Assistance and storage available near the entrance.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Floor Plan Section */}{" "}
      <section className="py-[80px] bg-[#ffedf5]">
        {" "}
        <div className="container mx-auto px-[20px]">
          {" "}
          <div className="text-center mb-[40px]">
            {" "}
            <div className="text-[#db2777] text-[12px] font-bold uppercase tracking-[1px] mb-[10px]">
              EXPLORE THE LAYOUT
            </div>{" "}
            <h2 className="font-sora font-[600] text-[#faf6fd] text-[35px] leading-[46px] mb-[16px]">
              Exhibition Floor Plan
            </h2>{" "}
            <div className="flex justify-center items-center mb-[20px]">
              {" "}
              <div className="h-[2px] w-[30px] bg-gradient-to-r from-transparent to-[#db2777]"></div>{" "}
              <i className="fa-solid fa-diamond text-[#db2777] text-[10px] mx-[10px]"></i>{" "}
              <div className="h-[2px] w-[30px] bg-gradient-to-l from-transparent to-[#db2777]"></div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex justify-center">
            {" "}
            <img
              src="/floor-plan.webp"
              alt="Exhibition Floor Plan"
              className="max-w-full h-auto drop-shadow-xl rounded-[16px]"
            />{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* CTA Banner */}{" "}
      <section className="pb-[80px] bg-[#ffedf5]">
        {" "}
        <div className="container mx-auto px-[20px]">
          {" "}
          <div className="bg-[#4c1d95] rounded-[24px] p-[60px] text-center shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
            {" "}
            <h2 className="font-sora font-[600] text-[#faf6fd] text-[35px] leading-[46px] mb-[20px]">
              Visit Us at Exhibition World Bahrain
            </h2>{" "}
            <p className="font-manrope font-[400] text-white text-[16px] leading-[26px] mb-[40px]">
              {" "}
              Sep 29 – 30 & Oct 1 – 2, 2026 • Hall 2, Block 1062, Road 6204, Sakhir, Bahrain{" "}
            </p>{" "}
            <Link
              to="#"
              className="inline-flex items-center justify-center gap-[10px] bg-gradient-to-r from-[#4f46e5] to-[#38bdf8] text-white px-[40px] py-[16px] rounded-full font-manrope font-semibold text-[14px] leading-[14px] shadow-[0_4px_15px_rgba(79,70,229,0.25)] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(79,70,229,0.35)] transition-all duration-300 tracking-[0.5px] uppercase"
            >
              {" "}
              BOOK YOUR SPACE &rarr;{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </main>
  );
};
export default Venue;
