import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onAdminToggle?: () => void;
  showAdminPortal?: boolean;
}

export default function Header({ onAdminToggle, showAdminPortal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "services", "projects", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { id: "hero", label: "الرئيسية" },
    { id: "services", label: "خدماتنا" },
    { id: "projects", label: "المشاريع" },
    { id: "about", label: "من نحن" },
  ];

  return (
    <header id="app-header" className="bg-surface/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/30 shadow-sm transition-all duration-300">
      <div className="flex flex-row justify-between items-center w-full px-4 md:px-12 py-4 max-w-7xl mx-auto">
        
        {/* Right side: Logo (strictly RTL aligned) */}
        <div className="flex items-center cursor-pointer" onClick={() => handleScrollTo("hero")}>
          <img
            alt="Lavida Properties"
            referrerPolicy="no-referrer"
            className="h-10 md:h-12 object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvGVh0fCaMCg2MP3nVvZXvzBJNaeoo67JBzQG3lY_Zy6cw26jjvraqVqpr5NqX-C9KcAJjvhUg6BYRCfaApVmuS1yVd7G4X5_eo2att-0IQDEW_hCcZZPmP8V-wwGMKxCdDlovPguFzYA9nx29Jqtf9i_4WGhyOR0b5OTnPXw5MqhOQmzLmTSCfNyFZ-8jr4Sin38feJUHwDK1LHsZoPj8zj2rBt7YH5r-vm3hZplsqIKtILpcW-dSNnlkpfdZJOjIiMoj74KuVQ"
          />
        </div>

        {/* Center: Navigation Links for Desktop (RTL layout: links ordered correctly) */}
        <nav className="hidden md:flex flex-row gap-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className={`font-display text-base font-semibold py-1 transition-all duration-300 border-b-2 hover:text-secondary ${
                activeSection === link.id
                  ? "text-secondary border-secondary"
                  : "text-on-surface border-transparent"
              }`}
            >
              {link.label}
            </button>
          ))}
          {onAdminToggle && (
            <button
              onClick={onAdminToggle}
              className={`font-display text-sm font-semibold px-3 py-1 rounded transition-all duration-300 border border-secondary/30 ${
                showAdminPortal
                  ? "bg-secondary text-white"
                  : "text-secondary hover:bg-secondary/10"
              }`}
            >
              بوابة الإدارة
            </button>
          )}
        </nav>

        {/* Left side: CTA Button & Burger toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleScrollTo("contact")}
            className="bg-primary text-white hover:bg-primary-container px-6 py-2.5 rounded-lg font-display text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            اتصل بنا
          </button>

          {/* Hamburger Menu Toggle for Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-on-surface hover:text-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-[72px] right-0 w-full bg-surface border-b border-outline-variant/30 shadow-lg py-6 px-6 animate-fade-in z-40">
          <nav className="flex flex-col gap-4 text-right">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`font-display text-lg font-semibold py-2 block border-r-4 pr-3 ${
                  activeSection === link.id
                    ? "text-secondary border-secondary bg-secondary/5"
                    : "text-on-surface border-transparent"
                }`}
              >
                {link.label}
              </button>
            ))}
            {onAdminToggle && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onAdminToggle();
                }}
                className="font-display text-base font-semibold py-2 border-r-4 border-transparent text-secondary pr-3 text-right"
              >
                بوابة الإدارة (الطلبات)
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
