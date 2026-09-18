import React from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
const Exhibitors = () => {
  return (
    <main>
      <SEO title="Exhibitors" description="Explore the Exhibitors page of SMART EDU EXPO - your premier educational exhibition and conference." />
      {" "}
      {/* Hero Section */}{" "}
      <section
        className="relative py-[120px] md:py-[150px] text-white overflow-hidden text-left bg-cover bg-center min-h-[600px] flex items-center"
        style={{ backgroundImage: "url('/exibitor.png')" }}
      >
        {" "}
        <div className="container relative z-10">
          <div className="max-w-[750px]">
            {" "}
            <h1 className="text-[58px] leading-[75px] font-sora font-semibold text-white mb-[24px]">
              {" "}
              Exhibit at
              <br />
              SMART EDU Expo 2026{" "}
            </h1>{" "}
            <p className="font-manrope font-[400] text-white text-[16px] leading-[26px] md:text-[18px] mb-[40px] max-w-[700px]">
              {" "}
              Showcase your institution, technology, or services to 3,000+
              students, educators, and industry decision-makers from Bahrain,
              Saudi Arabia's Eastern Province, and the GCC.{" "}
            </p>{" "}

          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Stats Bar */}{" "}
      <section className="bg-[#ffedf5] py-[25px]">
        {" "}
        <div className="container mx-auto">
          {" "}
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {" "}
            {/* Item 1 */}{" "}
            <div className="flex-1 flex items-center gap-[16px] p-[15px] lg:px-[25px]">
              {" "}
              <div className="w-[45px] h-[45px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[18px] shrink-0">
                {" "}
                <i className="fa-solid fa-users"></i>{" "}
              </div>{" "}
              <div>
                {" "}
                <h3 className="text-[15px] font-bold text-[#111827] mb-[4px]">
                  3000+
                </h3>{" "}
                <p className="font-manrope font-[400] text-black text-[16px] leading-[26px]">
                  Students and Educators
                  <br />
                  from schools & institutes
                </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* Item 2 */}{" "}
            <div className="flex-1 flex items-center gap-[16px] p-[15px] lg:px-[25px]">
              {" "}
              <div className="w-[45px] h-[45px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[18px] shrink-0">
                {" "}
                <i className="fa-solid fa-layer-group"></i>{" "}
              </div>{" "}
              <div>
                {" "}
                <h3 className="text-[15px] font-bold text-[#111827] mb-[4px]">
                  3,000+ sqm
                </h3>{" "}
                <p className="font-manrope font-[400] text-black text-[16px] leading-[26px]">
                  Exhibition Area
                  <br />
                  Spanning 3,000+ sqm
                </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* Item 3 */}{" "}
            <div className="flex-1 flex items-center gap-[16px] p-[15px] lg:px-[25px]">
              {" "}
              <div className="w-[45px] h-[45px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[18px] shrink-0">
                {" "}
                <i className="fa-regular fa-calendar-days"></i>{" "}
              </div>{" "}
              <div>
                {" "}
                <h3 className="text-[15px] font-bold text-[#111827] mb-[4px]">
                  4 Days
                </h3>{" "}
                <p className="font-manrope font-[400] text-black text-[16px] leading-[26px]">
                  A grand event on Education • Technology •<br />
                  Future
                </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* Item 4 */}{" "}
            <div className="flex-1 flex items-center gap-[16px] p-[15px] lg:px-[25px]">
              {" "}
              <div className="w-[45px] h-[45px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[18px] shrink-0">
                {" "}
                <i className="fa-solid fa-location-dot"></i>{" "}
              </div>{" "}
              <div>
                {" "}
                <h3 className="text-[15px] font-bold text-[#111827] mb-[4px]">
                  Regional Platform
                </h3>{" "}
                <p className="font-manrope font-[400] text-black text-[16px] leading-[26px]">
                  Visitors from Bahrain, KSA, the Eastern
                  <br />
                  Province, the GCC & beyond
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Exhibition Spaces */}{" "}
      <section className="py-[80px] text-white bg-[#5b1a8c]">
        {" "}
        <div className="container mx-auto">
          {" "}
          <div className="mb-[60px] flex flex-col items-center text-center">
            {" "}
            <div className="flex items-center justify-center gap-[6px] mb-[10px]">
              {" "}
              <div className="w-[6px] h-[6px] rounded-full bg-[#06b6d4]"></div>{" "}
              <div className="text-white text-[12px] font-bold uppercase tracking-[1px]">
                PARTICIPATION OPTIONS
              </div>{" "}
            </div>{" "}
            <h2 className="font-sora font-[600] text-[#faf6fd] text-[35px] leading-[46px] max-w-[800px] mb-[20px]">
              Your Space to Reach the Right Audience
            </h2>{" "}
            <div className="flex items-center justify-center gap-[6px]">
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
              <div className="relative pt-[16px] px-[16px] pb-[8px] bg-white h-[200px] flex items-center justify-center">
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
              <div className="p-[16px] flex flex-col flex-grow bg-white">
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
              <div className="relative pt-[16px] px-[16px] pb-[8px] bg-white h-[200px] flex items-center justify-center">
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
              <div className="p-[16px] flex flex-col flex-grow bg-white">
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
              <div className="relative pt-[16px] px-[16px] pb-[8px] bg-white h-[200px] flex items-center justify-center">
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
              <div className="p-[16px] flex flex-col flex-grow bg-white">
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
                  <p className="font-manrope font-[400] text-black text-[16px] leading-[26px]">
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
                  <p className="font-manrope font-[400] text-black text-[16px] leading-[26px]">
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
              <div className="relative pt-[16px] px-[16px] pb-[8px] bg-white h-[200px] flex items-center justify-center">
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
              <div className="p-[16px] flex flex-col flex-grow bg-white">
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
                  <p className="font-manrope font-[400] text-black text-[16px] leading-[26px]">
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
      {/* Value Prop Section */}{" "}
      <section className="py-[80px] bg-[#ffedf5]">
        {" "}
        <div className="container mx-auto">
          {" "}
          <div className="text-center mb-[60px]">
            {" "}
            <h2 className="font-sora font-[600] text-[#faf6fd] text-[35px] leading-[46px] mb-[15px]">
              Your Space to Reach the Right Audience
            </h2>{" "}
            <div className="flex items-center justify-center gap-[4px] mx-auto mb-[25px]">
              {" "}
              <div className="h-[2px] w-[90px] bg-[#632591]"></div>{" "}
              <div className="h-[2px] w-[12px] bg-[#632591]"></div>{" "}
            </div>{" "}
            <p className="font-manrope font-[400] text-black text-[16px] leading-[26px] max-w-[800px] mx-auto">
              SMART EDU EXPO 2026 gives exhibitors a dedicated platform to
              connect directly with schools, universities, EdTech buyers, and
              education-sector decision-makers — all under one roof, across 4
              days.
            </p>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            {" "}
            <div className="text-center p-[24px_16px] rounded-[16px] bg-[#632591] shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-[5px]">
              {" "}
              <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] mx-auto mb-[20px]">
                <i className="fa-solid fa-globe"></i>
              </div>{" "}
              <h3 className="font-sora font-[500] text-[#faf6fd] text-[18px] leading-[23px] mb-[12px]">
                Prime Booth Locations
              </h3>{" "}
              <p className="font-manrope font-[400] text-white text-[16px] leading-[26px]">
                Choose from Space Only, Shell Scheme, or fully designed Stand
                Booths across a 3,000+ sqm exhibition floor.
              </p>{" "}
            </div>{" "}
            <div className="text-center p-[24px_16px] rounded-[16px] bg-[#632591] shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-[5px]">
              {" "}
              <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] mx-auto mb-[20px]">
                <i className="fa-solid fa-gear"></i>
              </div>{" "}
              <h3 className="font-sora font-[500] text-[#faf6fd] text-[18px] leading-[23px] mb-[12px]">
                Turnkey Setup
              </h3>{" "}
              <p className="font-manrope font-[400] text-white text-[16px] leading-[26px]">
                Every booth comes with carpeting, furniture, lighting, and
                signage — ready before doors open.
              </p>{" "}
            </div>{" "}
            <div className="text-center p-[24px_16px] rounded-[16px] bg-[#632591] shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-[5px]">
              {" "}
              <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] mx-auto mb-[20px]">
                <i className="fa-solid fa-bullhorn"></i>
              </div>{" "}
              <h3 className="font-sora font-[500] text-[#faf6fd] text-[18px] leading-[23px] mb-[12px]">
                Marketing Exposure
              </h3>{" "}
              <p className="font-manrope font-[400] text-white text-[16px] leading-[26px]">
                Your brand featured across the official brochure, website,
                social media, and press coverage.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Floorplan & Support */}{" "}
      <section className="py-[80px] bg-[#3b0764]">
        {" "}
        <div className="container mx-auto">
          {" "}
          <div className="text-center mb-[50px]">
            {" "}
            <h2 className="font-sora font-[600] text-[#faf6fd] text-[35px] leading-[46px] mb-[15px]">
              Everything You Need to Know
            </h2>{" "}
            <p className="font-manrope font-[400] text-white text-[16px] leading-[26px] max-w-[800px] mx-auto">
              {" "}
              Explore the full exhibition layout across Hall 2 — including booth
              numbering, the main stage, and entry/exit points — to choose a
              location that fits your goals.{" "}
            </p>{" "}
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
            {/* Right: Operational Partner */}{" "}
            <div className="bg-[#ffedf5] rounded-[24px] p-[40px] md:p-[50px] flex flex-col justify-center shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
              {" "}
              <h3 className="text-white text-[26px] md:text-[32px] font-sora font-bold mb-[40px] leading-[1.3]">
                Your Operational Partner,
                <br />
                On Site
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
                    <h4 className="text-[18px] font-bold text-[#632591] mb-[6px]">
                      Booking Assistance
                    </h4>{" "}
                    <p className="font-manrope font-[400] text-black text-[16px] leading-[26px]">
                      Help with reservations, documentation, and booth
                      requirements before the event.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex gap-[20px] items-start">
                  {" "}
                  <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] shrink-0">
                    {" "}
                    <i className="fa-solid fa-truck-fast"></i>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="text-[18px] font-bold text-[#632591] mb-[6px]">
                      On-Site Logistics
                    </h4>{" "}
                    <p className="font-manrope font-[400] text-black text-[16px] leading-[26px]">
                      Delivery coordination, setup support, and technical
                      assistance during move-in.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex gap-[20px] items-start">
                  {" "}
                  <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] shrink-0">
                    {" "}
                    <i className="fa-solid fa-palette"></i>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="text-[18px] font-bold text-[#632591] mb-[6px]">
                      Booth Design Support
                    </h4>{" "}
                    <p className="font-manrope font-[400] text-black text-[16px] leading-[26px]">
                      Guidance on artwork sizing, layout, and custom booth
                      themes.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </main>
  );
};
export default Exhibitors;
