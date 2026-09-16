import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    
    return (
        <footer className="bg-[#0b0c2a] text-white pt-[60px]">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] lg:gap-[20px] mb-[60px]">
                    {/* Column 1 */}
                    <div className="flex flex-col">
                        <Link to="/" className="inline-block mb-[25px]">
                            <img src="/logo-smart-edu-2.png" alt="Smart EDU Expo 2026" className="h-[150px] max-w-full object-contain bg-[#fde4f1] p-[10px] rounded-[10px]" />
                        </Link>
                        <h3 className="font-sora font-semibold text-[20px] leading-[26px] text-[#33d6e1] uppercase tracking-[0.5px] mb-[5px]">SMART EDU EXPO 2026</h3>
                        <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#e8e8e8] max-w-[260px]">Organised by Future Ex &mdash; Company for Exhibitions and Conferences</p>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col">
                        <h4 className="text-white text-[20px] leading-[28px] font-sora font-semibold mb-[20px]">Quick Links</h4>
                        <div className="flex flex-col gap-[10px]">
                            {['Home', 'About Us', 'Exhibitors', 'Visitors', 'Media', 'Venue', 'Contact Us'].map((text) => {
                                const path = `/${text === 'Home' ? '' : text.toLowerCase().replace(' ', '')}`;
                                const isActive = location.pathname === path || (path === '/' && location.pathname === '');
                                
                                return (
                                    <Link key={text} to={path} className={`group flex items-center gap-[10px] font-manrope font-normal text-[16px] leading-[26px] transition-colors ${isActive ? 'text-white font-medium' : 'text-[#e8e8e8] hover:text-white'}`}>
                                        <i className="fa-solid fa-arrow-right text-[#06b6d4] text-[14px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ WebkitTextStroke: '1px currentColor' }}></i>
                                        <span className="group-hover:translate-x-[2px] transition-transform">{text}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col">
                        <h4 className="text-white text-[20px] leading-[28px] font-sora font-semibold mb-[20px]">Contact Us</h4>
                        <ul className="flex flex-col gap-[10px]">
                            <li className="flex items-center gap-[12px] text-[#e8e8e8] font-manrope font-normal text-[16px] leading-[26px]"><i className="fa-solid fa-phone text-[#06b6d4] text-[16px] w-[20px] text-center"></i> +973 17311212</li>
                            <li className="flex items-center gap-[12px] text-[#e8e8e8] font-manrope font-normal text-[16px] leading-[26px]"><i className="fa-solid fa-phone text-[#06b6d4] text-[16px] w-[20px] text-center"></i> +973 36004542</li>
                            <li className="flex items-center gap-[12px] text-[#e8e8e8] font-manrope font-normal text-[16px] leading-[26px]"><i className="fa-solid fa-phone text-[#06b6d4] text-[16px] w-[20px] text-center"></i> +973 36746660</li>
                            <li className="flex items-center gap-[12px] text-[#e8e8e8] font-manrope font-normal text-[16px] leading-[26px]"><i className="fa-brands fa-whatsapp text-[#06b6d4] text-[16px] w-[20px] text-center"></i> WhatsApp +973 36004542</li>
                            <li className="flex items-center gap-[12px] text-[#e8e8e8] font-manrope font-normal text-[16px] leading-[26px]"><i className="fa-brands fa-whatsapp text-[#06b6d4] text-[16px] w-[20px] text-center"></i> WhatsApp +973 36734442</li>
                            <li className="flex items-center gap-[12px] text-[#e8e8e8] font-manrope font-normal text-[16px] leading-[26px]"><i className="fa-solid fa-envelope text-[#06b6d4] text-[16px] w-[20px] text-center"></i> futureexhibitions@gmail.com</li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col">
                        <h4 className="text-white text-[20px] leading-[28px] font-sora font-semibold mb-[20px]">Event Details</h4>
                        <div className="flex flex-col gap-[12px] text-[#e8e8e8] font-manrope font-normal text-[16px] leading-[26px]">
                            <p>Sep 29 &ndash; 30 &amp; Oct 1 &ndash; 2, 2026<br />9:00 AM &ndash; 9:00 PM</p>
                            <p>Exhibition World Bahrain &mdash; Hall 2, Block 1062,<br />Road 6204, Sakhir, Bahrain</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container py-[15px] flex flex-col md:flex-row items-center justify-between gap-[20px]">
                    
                    {/* Left: Empty Space for Alignment */}
                    <div className="hidden md:block w-[150px]"></div>
                    
                    {/* Center: Copyright */}
                    <div className="text-[#33d6e1] font-manrope font-medium text-[16px] leading-[26px] uppercase tracking-[0.5px] text-center">
                        &copy; 2026 SMART EDU EXPO. ALL RIGHTS RESERVED
                    </div>
                    
                    {/* Right: Booking & WhatsApp */}
                    <div className="flex items-center relative">
                        <Link to="/exhibitors" className="bg-gradient-to-r from-[#4f46e5] to-[#38bdf8] text-white px-[24px] py-[10px] rounded-full font-manrope font-semibold text-[13px] leading-[14px] z-10 shadow-[0_4px_15px_rgba(79,70,229,0.25)] pr-[35px] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(79,70,229,0.35)] transition-all uppercase">
                            Book Your Space
                        </Link>
                        <a href="https://wa.me/97336004542" aria-label="WhatsApp" className="w-[46px] h-[46px] bg-[#25D366] rounded-full flex items-center justify-center text-white text-[24px] z-20 shadow-lg border-[3px] border-[#0b0c2a] absolute right-[-20px] hover:scale-105 transition-transform">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;
