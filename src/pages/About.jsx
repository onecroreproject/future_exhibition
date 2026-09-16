import React from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <main>
      <SEO title="About" description="Explore the About page of SMART EDU EXPO - your premier educational exhibition and conference." />
      {" "}
      {/* Hero Section */}{" "}
      <section
        className="relative py-[100px] md:py-[150px] text-white overflow-hidden text-left bg-cover bg-center min-h-[500px] flex items-center"
        style={{ backgroundImage: "url('/about us.webp')" }}
      >
        {" "}
        <div className="container relative z-10">
          <div className="max-w-[750px]">
            {" "}
            <h1 className="text-[58px] leading-[75px] font-sora font-semibold text-white mb-[24px]">
              {" "}
              About SMART EDU
              <br />
              Expo 2026{" "}
            </h1>{" "}
            <p className="text-[16px] md:text-[18px] text-white leading-[1.6] mb-[40px] max-w-[700px]">
              {" "}
              SMART EDU Expo 2026 is the region's focused education exhibition,
              bringing together ideas, solutions and meaningful
              connections.{" "}
            </p>{" "}
            <div className="flex flex-wrap justify-start gap-[16px]">
              {" "}
              <Link
                to="/exhibitors"
                className="inline-flex items-center justify-center gap-[10px] bg-gradient-to-r from-[#4f46e5] to-[#38bdf8] text-white px-[40px] py-[16px] rounded-full font-manrope font-semibold text-[14px] leading-[14px] shadow-[0_4px_15px_rgba(79,70,229,0.25)] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(79,70,229,0.35)] transition-all duration-300 tracking-[0.5px] uppercase"
              >
                {" "}
                BOOK MY SPACE &rarr;{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Built to Deliver */}{" "}
      <section className="py-[80px] bg-[#ffedf5]">
        {" "}
        <div className="container mx-auto">
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] items-center mb-[60px]">
            {" "}
            <div>
              {" "}
              <h2 className="text-[35px] leading-[46px] font-sora font-semibold text-[#5b1a8c] mb-[15px]">
                Built to Deliver Exceptional Events
              </h2>{" "}
              <div className="flex items-center gap-[4px] mb-[30px]">
                {" "}
                <div className="h-[2px] w-[90px] bg-[#632591]"></div>{" "}
                <div className="h-[2px] w-[12px] bg-[#632591]"></div>{" "}
              </div>{" "}
              <p className="text-[#64748b] text-[14px] md:text-[15px] leading-[1.7] font-medium mb-[24px]">
                {" "}
                SMART EDU EXPO 2026 is a focused education exhibition bringing
                together universities, schools, training institutions, EdTech
                companies, and education service providers under one
                platform.{" "}
              </p>{" "}
              <p className="text-[#64748b] text-[14px] md:text-[15px] leading-[1.7] font-medium">
                {" "}
                The exhibition creates opportunities to connect with knowledge,
                discover innovative education solutions, explore future learning
                opportunities, and build meaningful connections across the
                education community.{" "}
              </p>{" "}
            </div>{" "}
            <div>
              {" "}
              <img
                src="/exceptional-events.webp"
                alt="Built to Deliver Exceptional Events"
                className="rounded-[12px] shadow-[0_15px_35px_rgba(0,0,0,0.08)] w-full object-cover"
              />{" "}
            </div>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
            {" "}
            {/* Card 1 */}{" "}
            <div className="flex gap-[16px] items-start p-[25px_20px] rounded-[12px] bg-[#632591] shadow-[0_10px_30px_rgba(91,33,182,0.15)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_15px_35px_rgba(91,33,182,0.25)]">
              {" "}
              <div className="w-[45px] h-[45px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[18px] shrink-0 shadow-[0_4px_10px_rgba(251,207,232,0.3)]">
                {" "}
                <i className="fa-solid fa-globe"></i>{" "}
              </div>{" "}
              <div>
                {" "}
                <h4 className="font-sora font-[500] text-[#faf6fd] text-[18px] leading-[23px] mb-[8px]">
                  Regional Expertise
                </h4>{" "}
                <p className="font-manrope font-[400] text-[#ffffff] text-[16px] leading-[26px]">
                  We have a deep understanding of regional markets and audiences
                  to position your brand for success.
                </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* Card 2 */}{" "}
            <div className="flex gap-[16px] items-start p-[25px_20px] rounded-[12px] bg-[#632591] shadow-[0_10px_30px_rgba(91,33,182,0.15)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_15px_35px_rgba(91,33,182,0.25)]">
              {" "}
              <div className="w-[45px] h-[45px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[18px] shrink-0 shadow-[0_4px_10px_rgba(251,207,232,0.3)]">
                {" "}
                <i className="fa-solid fa-clipboard-check"></i>{" "}
              </div>{" "}
              <div>
                {" "}
                <h4 className="font-sora font-[500] text-[#faf6fd] text-[18px] leading-[23px] mb-[8px]">
                  End-to-End Delivery
                </h4>{" "}
                <p className="font-manrope font-[400] text-[#ffffff] text-[16px] leading-[26px]">
                  Concept, planning, operations, and on-site management are
                  handled by one experienced team.
                </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* Card 3 */}{" "}
            <div className="flex gap-[16px] items-start p-[25px_20px] rounded-[12px] bg-[#632591] shadow-[0_10px_30px_rgba(91,33,182,0.15)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_15px_35px_rgba(91,33,182,0.25)]">
              {" "}
              <div className="w-[45px] h-[45px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[18px] shrink-0 shadow-[0_4px_10px_rgba(251,207,232,0.3)]">
                {" "}
                <i className="fa-solid fa-users"></i>{" "}
              </div>{" "}
              <div>
                {" "}
                <h4 className="font-sora font-[500] text-[#faf6fd] text-[18px] leading-[23px] mb-[8px]">
                  Exhibitions & Conferences
                </h4>{" "}
                <p className="font-manrope font-[400] text-[#ffffff] text-[16px] leading-[26px]">
                  Proven track record across diverse industries, with expertise
                  in exhibition and conference formats.
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Explore Universe */}{" "}
      <section className="py-[80px] bg-[#ffedf5]">
        {" "}
        <div className="container mx-auto">
          {" "}
          <div className="text-center mb-[50px]">
            {" "}
            <h2 className="text-[35px] leading-[46px] font-sora font-semibold text-[#5b1a8c] mb-[15px]">
              Explore the Smart EDU Universe
            </h2>{" "}
            <div className="flex items-center justify-center gap-[4px] mx-auto">
              {" "}
              <div className="h-[2px] w-[90px] bg-[#632591]"></div>{" "}
              <div className="h-[2px] w-[12px] bg-[#632591]"></div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[20px]">
            {" "}
            {/* Card 1 */}{" "}
            <div className="bg-[#632591] p-[35px_20px] rounded-[12px] text-center shadow-[0_10px_30px_rgba(91,33,182,0.15)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_15px_35px_rgba(91,33,182,0.25)] flex flex-col items-center">
              {" "}
              <div className="w-[45px] h-[45px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[18px] mb-[20px] shadow-[0_4px_10px_rgba(251,207,232,0.3)]">
                {" "}
                <i className="fa-solid fa-store"></i>{" "}
              </div>{" "}
              <h4 className="font-sora font-[500] text-[#faf6fd] text-[18px] leading-[23px] mb-[12px]">
                Booth Options
              </h4>{" "}
              <p className="font-manrope font-[400] text-[#ffffff] text-[16px] leading-[26px]">
                A range of booth sizes and layouts to match your objectives and
                budget.
              </p>{" "}
            </div>{" "}
            {/* Card 2 */}{" "}
            <div className="bg-[#632591] p-[35px_20px] rounded-[12px] text-center shadow-[0_10px_30px_rgba(91,33,182,0.15)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_15px_35px_rgba(91,33,182,0.25)] flex flex-col items-center">
              {" "}
              <div className="w-[45px] h-[45px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[18px] mb-[20px] shadow-[0_4px_10px_rgba(251,207,232,0.3)]">
                {" "}
                <i className="fa-solid fa-hammer"></i>{" "}
              </div>{" "}
              <h4 className="font-sora font-[500] text-[#faf6fd] text-[18px] leading-[23px] mb-[12px]">
                Construction & Fit-Out
              </h4>{" "}
              <p className="font-manrope font-[400] text-[#ffffff] text-[16px] leading-[26px]">
                Professional build and fit-out solutions tailored to your brand
                and requirements.
              </p>{" "}
            </div>{" "}
            {/* Card 3 */}{" "}
            <div className="bg-[#632591] p-[35px_20px] rounded-[12px] text-center shadow-[0_10px_30px_rgba(91,33,182,0.15)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_15px_35px_rgba(91,33,182,0.25)] flex flex-col items-center">
              {" "}
              <div className="w-[45px] h-[45px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[18px] mb-[20px] shadow-[0_4px_10px_rgba(251,207,232,0.3)]">
                {" "}
                <i className="fa-solid fa-bullhorn"></i>{" "}
              </div>{" "}
              <h4 className="font-sora font-[500] text-[#faf6fd] text-[18px] leading-[23px] mb-[12px]">
                Marketing Support
              </h4>{" "}
              <p className="font-manrope font-[400] text-[#ffffff] text-[16px] leading-[26px]">
                Pre-event promotion and co-marketing opportunities to increase
                your visibility.
              </p>{" "}
            </div>{" "}
            {/* Card 4 */}{" "}
            <div className="bg-[#632591] p-[35px_20px] rounded-[12px] text-center shadow-[0_10px_30px_rgba(91,33,182,0.15)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_15px_35px_rgba(91,33,182,0.25)] flex flex-col items-center">
              {" "}
              <div className="w-[45px] h-[45px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[18px] mb-[20px] shadow-[0_4px_10px_rgba(251,207,232,0.3)]">
                {" "}
                <i className="fa-solid fa-box-open"></i>{" "}
              </div>{" "}
              <h4 className="font-sora font-[500] text-[#faf6fd] text-[18px] leading-[23px] mb-[12px]">
                On-Site Logistics
              </h4>{" "}
              <p className="font-manrope font-[400] text-[#ffffff] text-[16px] leading-[26px]">
                Efficient logistics, technical support and services throughout
                the event.
              </p>{" "}
            </div>{" "}
            {/* Card 5 */}{" "}
            <div className="bg-[#632591] p-[35px_20px] rounded-[12px] text-center shadow-[0_10px_30px_rgba(91,33,182,0.15)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_15px_35px_rgba(91,33,182,0.25)] flex flex-col items-center">
              {" "}
              <div className="w-[45px] h-[45px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[18px] mb-[20px] shadow-[0_4px_10px_rgba(251,207,232,0.3)]">
                {" "}
                <i className="fa-solid fa-scissors"></i>{" "}
              </div>{" "}
              <h4 className="font-sora font-[500] text-[#faf6fd] text-[18px] leading-[23px] mb-[12px]">
                Opening Ceremony
              </h4>{" "}
              <p className="font-manrope font-[400] text-[#ffffff] text-[16px] leading-[26px]">
                Prominent exposure during the official opening ceremony and
                media coverage.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Operational Partner Section */}{" "}
      <section className="py-[80px] bg-[#632591]">
        {" "}
        <div className="container mx-auto">
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
            {" "}
            {/* Left Side Text */}{" "}
            <div>
              {" "}
              <h2 className="text-[35px] leading-[46px] font-sora font-semibold text-[#5b1a8c] mb-[20px]">
                Your Operational Partner,
                <br />
                On Site
              </h2>{" "}
              <p className="text-[14px] md:text-[15px] text-[#e2e8f0] leading-[1.7] mb-[30px] max-w-[500px]">
                {" "}
                Our experienced operations team is your practical point of
                contact before, during and after the event. We work closely with
                exhibitors and sponsors to ensure smooth coordination, timely
                communication and an excellent experience on the show
                floor.{" "}
              </p>{" "}
              <div className="flex flex-col gap-[16px]">
                {" "}
                <div className="flex items-start gap-[12px]">
                  {" "}
                  <i className="fa-regular fa-circle-check text-[#ec4899] text-[18px] mt-[2px]"></i>{" "}
                  <span className="text-[14px] font-medium text-[#e2e8f0]">
                    Dedicated support from planning to breakdown
                  </span>{" "}
                </div>{" "}
                <div className="flex items-start gap-[12px]">
                  {" "}
                  <i className="fa-regular fa-circle-check text-[#ec4899] text-[18px] mt-[2px]"></i>{" "}
                  <span className="text-[14px] font-medium text-[#e2e8f0]">
                    Rapid response to operational needs
                  </span>{" "}
                </div>{" "}
                <div className="flex items-start gap-[12px]">
                  {" "}
                  <i className="fa-regular fa-circle-check text-[#ec4899] text-[18px] mt-[2px]"></i>{" "}
                  <span className="text-[14px] font-medium text-[#e2e8f0]">
                    Clear guidance and communication at every step
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {/* Right Side Card */}
            <div className="bg-[#fcf0f5] rounded-[16px] p-[40px] md:p-[50px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] relative overflow-hidden">
              <h3 className="text-[#632591] text-[22px] md:text-[24px] font-sora font-bold mb-[30px]">
                Exhibition Operations Desk
              </h3>{" "}
              <div className="flex flex-col gap-[30px]">
                {" "}
                <div className="flex gap-[20px] items-start">
                  {" "}
                  <div className="w-[45px] h-[45px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[18px] shrink-0">
                    {" "}
                    <i className="fa-solid fa-user-tie"></i>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="font-sora font-[500] text-[#632591] text-[18px] leading-[23px] mb-[6px]">
                      Exhibitor Support
                    </h4>{" "}
                    <p className="font-manrope font-[400] text-[#6b7280] text-[16px] leading-[26px]">
                      Assistance with bookings, documentation, booth
                      requirements and on-site queries.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex gap-[20px] items-start">
                  {" "}
                  <div className="w-[45px] h-[45px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[18px] shrink-0">
                    {" "}
                    <i className="fa-solid fa-users"></i>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="font-sora font-[500] text-[#632591] text-[18px] leading-[23px] mb-[6px]">
                      Sponsor Coordination
                    </h4>{" "}
                    <p className="font-manrope font-[400] text-[#6b7280] text-[16px] leading-[26px]">
                      Dedicated liaison for sponsors on branding, deliverables
                      and activation support.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex gap-[20px] items-start">
                  {" "}
                  <div className="w-[45px] h-[45px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[18px] shrink-0">
                    {" "}
                    <i className="fa-solid fa-truck-fast"></i>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="font-sora font-[500] text-[#632591] text-[18px] leading-[23px] mb-[6px]">
                      Event Logistics
                    </h4>{" "}
                    <p className="font-manrope font-[400] text-[#6b7280] text-[16px] leading-[26px]">
                      Logistics planning, delivery coordination and on-site
                      operational services.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* What We Offer Exhibitors */}{" "}
      <section className="py-[80px] bg-[#ffedf5]">
        {" "}
        <div className="container mx-auto">
          {" "}
          <div className="text-center mb-[60px]">
            {" "}
            <h2 className="text-[35px] leading-[46px] font-sora font-semibold text-[#5b1a8c] mb-[15px]">
              What We Offer Exhibitors
            </h2>{" "}
            <div className="flex items-center justify-center gap-[4px] mx-auto">
              {" "}
              <div className="h-[2px] w-[90px] bg-[#632591]"></div>{" "}
              <div className="h-[2px] w-[12px] bg-[#632591]"></div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px]">
            {" "}
            <div className="text-center">
              {" "}
              <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] mx-auto mb-[20px]">
                {" "}
                <i className="fa-solid fa-bullseye"></i>{" "}
              </div>{" "}
              <h4 className="font-sora font-[500] text-[#632591] text-[18px] leading-[23px] mb-[12px]">
                Reach the Right Audience
              </h4>{" "}
              <p className="font-manrope font-[400] text-[#64748b] text-[16px] leading-[26px]">
                Connect with qualified professionals, decision-makers and buyers
                from across the region.
              </p>{" "}
            </div>{" "}
            <div className="text-center">
              {" "}
              <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] mx-auto mb-[20px]">
                {" "}
                <i className="fa-solid fa-users"></i>{" "}
              </div>{" "}
              <h4 className="font-sora font-[500] text-[#632591] text-[18px] leading-[23px] mb-[12px]">
                High Footfall
              </h4>{" "}
              <p className="font-manrope font-[400] text-[#64748b] text-[16px] leading-[26px]">
                Well-promoted event with strong visitor attendance and quality
                engagement.
              </p>{" "}
            </div>{" "}
            <div className="text-center">
              {" "}
              <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] mx-auto mb-[20px]">
                {" "}
                <i className="fa-solid fa-map-location-dot"></i>{" "}
              </div>{" "}
              <h4 className="font-sora font-[500] text-[#632591] text-[18px] leading-[23px] mb-[12px]">
                Regional Positioning
              </h4>{" "}
              <p className="font-manrope font-[400] text-[#64748b] text-[16px] leading-[26px]">
                Strategically positioned event that strengthens your presence in
                the region.
              </p>{" "}
            </div>{" "}
            <div className="text-center">
              {" "}
              <div className="w-[50px] h-[50px] rounded-full bg-[#fae0ed] text-[#db2777] flex items-center justify-center text-[20px] mx-auto mb-[20px]">
                {" "}
                <i className="fa-solid fa-thumbs-up"></i>{" "}
              </div>{" "}
              <h4 className="font-sora font-[500] text-[#632591] text-[18px] leading-[23px] mb-[12px]">
                A Seamless Experience
              </h4>{" "}
              <p className="font-manrope font-[400] text-[#64748b] text-[16px] leading-[26px]">
                Professional operations and attentive support so you can focus
                on your objectives.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* CTA Banner */}{" "}
      <section className="py-[60px] bg-[#ffedf5] pb-[100px]">
        {" "}
        <div className="container mx-auto">
          {" "}
          <div className="bg-gradient-to-r from-[#6b21a8] to-[#4c1d95] rounded-[20px] p-[50px_20px] md:p-[70px_40px] text-center text-white shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
            {" "}
            <h2 className="text-[35px] leading-[46px] font-sora font-semibold text-white mb-[20px]">
              Secure Your Place at SMART EDU EXPO 2026
            </h2>{" "}
            <p className="text-[14px] md:text-[16px] text-[#e2e8f0] mb-[35px] max-w-[600px] mx-auto font-medium">
              {" "}
              Join leading organisations and showcase your solutions to the
              region.{" "}
            </p>{" "}
            <div className="flex justify-center">
              {" "}
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
    </main>
  );
};
export default About;
