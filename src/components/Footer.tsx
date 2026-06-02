interface FooterProps {
  onScrollTo: (id: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  return (
    <footer className="bg-primary text-white py-12 border-t border-white/5 relative">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center px-6 md:px-12 py-6 w-full max-w-7xl mx-auto gap-8">
        
        {/* Right side: White inverted logo */}
        <div className="shrink-0 cursor-pointer" onClick={() => onScrollTo("hero")}>
          <img
            alt="Lavida Properties Inverted Logo"
            referrerPolicy="no-referrer"
            className="h-10 object-contain brightness-0 invert"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvGVh0fCaMCg2MP3nVvZXvzBJNaeoo67JBzQG3lY_Zy6cw26jjvraqVqpr5NqX-C9KcAJjvhUg6BYRCfaApVmuS1yVd7G4X5_eo2att-0IQDEW_hCcZZPmP8V-wwGMKxCdDlovPguFzYA9nx29Jqtf9i_4WGhyOR0b5OTnPXw5MqhOQmzLmTSCfNyFZ-8jr4Sin38feJUHwDK1LHsZoPj8zj2rBt7YH5r-vm3hZplsqIKtILpcW-dSNnlkpfdZJOjIiMoj74KuVQ"
          />
        </div>

        {/* Center: Legal RTL anchor links */}
        <div className="flex flex-col sm:flex-row-reverse items-center gap-6 sm:gap-8 text-on-primary-container font-sans text-xs">
          <a href="#privacy" className="hover:text-secondary-fixed transition-colors">
            سياسة الخصوصية
          </a>
          <a href="#terms" className="hover:text-secondary-fixed transition-colors">
            الشروط والأحكام
          </a>
          <a href="#sitemap" className="hover:text-secondary-fixed transition-colors">
            خريطة الموقع
          </a>
        </div>

        {/* Left side: Copyrights */}
        <p className="font-sans text-xs text-on-primary-container/60 text-center md:text-left">
          © {new Date().getFullYear()} لافيدا العقارية. جميع الحقوق محفوظة.
        </p>

      </div>
    </footer>
  );
}
