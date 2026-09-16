import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-[#fde4f1] sticky top-0 z-[100] shadow-sm">
            <div className="container flex items-center justify-between gap-[10px]">
                <Link to="/" className="py-[10px] flex items-center gap-[2px] lg:gap-[4px] no-underline shrink-0">
                    <img src="/logo-smart-edu-2.png" alt="Smart EDU Expo 2026 Logo" className="h-[55px] lg:h-[75px] max-w-full object-contain" />
                    <div className="w-[2px] h-[55px] lg:h-[75px] bg-[#8b5cf6]"></div>
                    <div className="flex flex-col justify-center gap-[2px] lg:gap-[4px]">
                        <div className="font-sora font-bold text-[12px] lg:text-[16px] text-[#172b6b] leading-[1.2] uppercase tracking-[0.5px] whitespace-nowrap">SMART EDU EXPO 2026</div>
                        <div className="font-sora font-bold text-[10px] lg:text-[14px] text-[#d39a32] leading-[1.2] whitespace-nowrap">Connect with knowledge</div>
                        <div className="font-manrope font-[700] text-[12px] lg:text-[14px] text-[#5b1a8c] leading-[23px] whitespace-nowrap">Bahrain 2026</div>
                    </div>
                </Link>
                <nav className="flex gap-[6px] md:gap-[10px] lg:gap-[14px] xl:gap-[18px] items-center shrink-0">
                    {["/", "/about", "/exhibitors", "/visitors", "/media", "/banking", "/venue", "/participants", "/contact"].map((path) => {
                        const labels = { "/": "HOME", "/about": "ABOUT US", "/exhibitors": "EXHIBITORS", "/visitors": "VISITORS", "/media": "MEDIA", "/banking": "BANKING", "/venue": "VENUE", "/participants": "PARTICIPANTS", "/contact": "CONTACT US" };
                        return (
                            <NavLink key={path} to={path} className={({ isActive }) => `whitespace-nowrap font-manrope text-[10px] md:text-[11px] xl:text-[13px] leading-[13px] font-bold uppercase tracking-[0.5px] py-[6px] border-b-[3px] transition-all duration-300 ${isActive ? 'text-[#33d6e1] border-[#33d6e1]' : 'text-[#1e1b4b] border-transparent hover:text-[#33d6e1] hover:border-[#33d6e1]'}`}>
                                {labels[path]}
                            </NavLink>
                        );
                    })}
                </nav>
                <Link to="/exhibitors" className="shrink-0 bg-gradient-to-r from-[#4f46e5] to-[#38bdf8] text-white px-[16px] xl:px-[28px] py-[10px] xl:py-[12px] rounded-full font-manrope font-semibold text-[12px] xl:text-[14px] leading-[14px] shadow-[0_4px_15px_rgba(79,70,229,0.25)] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(79,70,229,0.35)] transition-all duration-300 inline-block tracking-[0.5px] whitespace-nowrap">
                    BOOK YOUR SPACE
                </Link>
            </div>
        </header>
    );
};

export default Header;
