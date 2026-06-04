import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ChevronLeft, MapPin, Layers, Coins, CheckCircle, X, Shield, Star, Award } from "lucide-react";
import { Project } from "../types";
import { useLang } from "../LangContext";
import { t } from "../i18n";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { lang } = useLang();

  const projects: Project[] = [
    {
      id: "residential",
      title: t(lang, "project1_title"),
      category: t(lang, "project1_category"),
      description: t(lang, "project1_desc"),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwFHe8whi0rCeTETSk0WjwmlQGokSNHHOXNmO3DS2NyAdNcBOLvVHPBspXZ-4Byg_i_IlTomvL2RhCKB2KJZREgDvrt_EzoYzbNevUdJMaIUne4Mc2iAE4Oz-j4T1XC8XzWosFRL_C0_ZQojBCZKSUB2dhxThm5halC9Ndie2SX5yt1rbBRmaJUVyEuOVjGqRzM96EYu12_AxGS0hdl9PR5GTkhR9NxVfDdRVKjqggyUBNiV8O-yQIJs-xj7rFJ2A84VLw8nWDww",
      location: t(lang, "project1_location"),
      priceStart: t(lang, "project1_price"),
      details: lang === "ar" ? [
        "Ø´Ù‚Ù‚ ÙÙ†Ø¯Ù‚ÙŠØ© Ù…ØªÙ…ÙŠØ²Ø© ÙˆØ¨Ù†ØªÙ‡Ø§ÙˆØ³ Ø¨ØªØ´Ø·ÙŠØ¨Ø§Øª ÙˆØªØµÙ…ÙŠÙ…Ø§Øª Ø£ÙˆØ±ÙˆØ¨ÙŠØ© Ø¨Ø§Ù„ÙƒØ§Ù…Ù„.",
        "Ø£Ù†Ø¸Ù…Ø© Ø¥Ø¯Ø§Ø±Ø© Ø°ÙƒÙŠØ© ÙˆØ®Ø¯Ù…Ø© ÙƒÙˆÙ†Ø³ÙŠØ±Ø¬ Ø¹Ù„Ù‰ Ù…Ø¯Ø§Ø± Ø§Ù„Ø³Ø§Ø¹Ø©.",
        "Ø§Ù„ÙˆØµÙˆÙ„ Ø§Ù„Ø­ØµØ±ÙŠ Ù„Ù†Ø§Ø¯ÙŠ Ø§Ù„Ù†Ø®Ø¨Ø© Ø§Ù„Ø±ÙŠØ§Ø¶ÙŠ ÙˆØ§Ù„Ù…Ù†ØªØ¬Ø¹ Ø§Ù„ØµØ­ÙŠ.",
        "Ù‚Ø±ÙŠØ¨Ø© Ù…Ù† Ø§Ù„Ù…Ø±Ø§ÙÙ‚ Ø§Ù„ØªØ¹Ù„ÙŠÙ…ÙŠØ© ÙˆØ§Ù„ØªØ¬Ø§Ø±ÙŠØ© Ø§Ù„Ø£Ø³Ø§Ø³ÙŠØ©."
      ] : [
        "Premium hotel apartments and penthouses with full European finishes.",
        "Smart management systems and 24/7 concierge service.",
        "Exclusive access to elite sports club and wellness resort.",
        "Close to essential educational and commercial facilities."
      ],
      features: lang === "ar" ? [
        "ØªÙƒÙŠÙŠÙ Ù…Ø±ÙƒØ²ÙŠ Ù…ØªÙƒØ§Ù…Ù„",
        "Ø­Ø±Ø§Ø³Ø© ÙˆÙƒØ§Ù…ÙŠØ±Ø§Øª Ù…Ø±Ø§Ù‚Ø¨Ø© 24/7",
        "ØµØ§Ù„Ø© Ø£Ù„Ø¹Ø§Ø¨ Ø±ÙŠØ§Ø¶ÙŠØ© ÙˆØ³Ø¨Ø§ Ø¨Ø±ÙŠÙ…ÙŠÙˆÙ…",
        "Ù…Ø³Ø§Ø­Ø§Øª Ø®Ø¶Ø±Ø§Ø¡ Ø´Ø§Ø³Ø¹Ø© ÙˆÙ„Ø§Ù†Ø¯ Ø¹Ø§Ø¦Ù„ÙŠ",
        "Ù…ØµØ§Ø¹Ø¯ Ø¨Ø§Ù†ÙˆØ±Ø§Ù…ÙŠØ© Ø°ÙƒÙŠØ©"
      ] : [
        "Integrated central AC",
        "24/7 security & surveillance",
        "Premium gym & spa",
        "Vast green spaces & family land",
        "Smart panoramic elevators"
      ]
    },
    {
      id: "commercial",
      title: t(lang, "project2_title"),
      category: t(lang, "project2_category"),
      description: t(lang, "project2_desc"),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtFAv2u3n41TS04MI7zd_M9Su30YiGBwg2x9CiislCTkZe1FUe4h7K8_WsbYUxDjgWbaDKL32jhGAUP5VHNGsE3xof2rkNYV_MpB63ltRM4Cf4JVa6kVLtRPhlXjY25nQKmfDXTYu26EKOEL6iFNaTYG8Fm_C0uqb7AHcr8Y6LVt97PBo5lr8EHYEjNayF6hzy5eA38Ur87P_NWOHf5SC80FItCrnRVZcHO091qj4RVdOfzAnqIK5WYJ35gPHP6tHxFheJyuwvSQ",
      location: t(lang, "project2_location"),
      priceStart: t(lang, "project2_price"),
      details: lang === "ar" ? [
        "ÙˆØ§Ø¬Ù‡Ø§Øª Ø²Ø¬Ø§Ø¬ÙŠØ© Ù…Ø²Ø¯ÙˆØ¬Ø© Ù…Ø¹Ø²ÙˆÙ„Ø© Ø¹Ø§ÙƒØ³Ø© Ù„Ù„ØµÙˆØª ÙˆØ§Ù„Ø­Ø±Ø§Ø±Ø©.",
        "Ø¨Ù†ÙŠØ© ØªØ­ØªÙŠØ© Ù…ØªÙƒØ§Ù…Ù„Ø© Ù„Ø´Ø¨ÙƒØ§Øª Ø§Ù„Ø£Ù„ÙŠØ§Ù Ø§Ù„Ø¶ÙˆØ¦ÙŠØ© ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„Ø·Ø§Ù‚Ø© Ø§Ù„Ø¨Ø¯ÙŠÙ„Ø©.",
        "Ø¹ÙŠØ§Ø¯Ø§Øª Ù…Ø¬Ù‡Ø²Ø© Ø¨Ø§Ù„ÙƒØ§Ù…Ù„ Ø¨Ù…Ø¹Ø§ÙŠÙŠØ± Ù…ÙƒØ§ÙØ­Ø© Ø§Ù„Ø¹Ø¯ÙˆÙ‰ Ø§Ù„Ø¹Ø§Ù„Ù…ÙŠØ©.",
        "Ø¬Ø±Ø§Ø¬Ø§Øª ØªØ­Øª Ø§Ù„Ø£Ø±Ø¶ ØªØ³Ø¹ Ù„Ø£ÙƒØ«Ø± Ù…Ù† 1500 Ø³ÙŠØ§Ø±Ø© Ù…Ø³ØªÙ‚Ù„Ø©."
      ] : [
        "Double-glazed insulated facades reflecting sound and heat.",
        "Integrated fiber optic and alternative energy infrastructure.",
        "Fully equipped clinics with international infection control standards.",
        "Underground garages with capacity for over 1,500 cars."
      ],
      features: lang === "ar" ? [
        "Ø£Ù†Ø¸Ù…Ø© ØªÙƒÙŠÙŠÙ Ù…ØªØ·ÙˆØ±Ø© ØµØ¯ÙŠÙ‚Ø© Ù„Ù„Ø¨ÙŠØ¦Ø© VRV",
        "Ù‚Ø§Ø¹Ø§Øª Ù…Ø¤ØªÙ…Ø±Ø§Øª Ù…Ø´ØªØ±ÙƒØ© Ù…Ø¬Ù‡Ø²Ø© Ø¨Ø£Ø­Ø¯Ø« Ø§Ù„ØµÙˆØªÙŠØ§Øª",
        "Ø£Ù†Ø¸Ù…Ø© Ù…ØªÙƒØ§Ù…Ù„Ø© Ù„Ù„Ø¥Ù†Ø°Ø§Ø± ÙˆÙ…ÙƒØ§ÙØ­Ø© Ø§Ù„Ø­Ø±ÙŠÙ‚ Ø§Ù„Ø°ÙƒÙŠ",
        "Ø´Ø±ÙƒØ© ØµÙŠØ§Ù†Ø© Ø¹Ø§Ù„Ù…ÙŠØ© Ù…Ø³Ø¤ÙˆÙ„Ø© Ø¹Ù† Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ù…Ø±ÙÙ‚",
        "Ù…Ø­Ø·Ø§Øª Ø´Ø­Ù† Ø³ÙŠØ§Ø±Ø§Øª ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ©"
      ] : [
        "Advanced eco-friendly VRV AC systems",
        "Shared conference halls with latest acoustics",
        "Integrated smart fire alarm & suppression systems",
        "International facility management company",
        "EV charging stations"
      ]
    },
    {
      id: "coastal",
      title: t(lang, "project3_title"),
      category: t(lang, "project3_category"),
      description: t(lang, "project3_desc"),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD71JQvqIMbWrrA_prXpeR3GRWIeiiQzHAd1fJJxjXbBp6qkWHdrZIQoKxCzbwJh8UmghRLwDaHqmpGIf8KWmcUxNBdy9qhtl6IwO2sLNWz_sE2-pAx7fDI1eI_YCVr58ZPXp1AsiZIKXQhNbMh3IGeLXKCfZUpUzUQK6ATTYYRG8cSkU_Cxi9AmXGNvGbOm9DGCgJt_fYENsGf52DxFou9CooHzmDKq_VGqvxzxTrG0qCCoBuSjAoZd_34G6-ejFd3PDaHAiyfRg",
      location: t(lang, "project3_location"),
      priceStart: t(lang, "project3_price"),
      details: lang === "ar" ? [
        "ÙÙŠÙ„Ø§Øª ÙØ§Ø®Ø±Ø© Ù…Ù†ÙØµÙ„Ø© ÙˆØ´Ø§Ù„ÙŠÙ‡Ø§Øª ØªØ·Ù„ Ø¨Ø§Ù„ÙƒØ§Ù…Ù„ Ø¹Ù„Ù‰ Ø§Ù„Ø¨Ø­Ø± Ø¨Ø´ÙƒÙ„ Ù…Ø¨Ø§Ø´Ø±.",
        "ÙƒÙ„ Ù„Ø§Ù†Ø¯ Ø³ÙƒÙŠØ¨ Ù…ØµÙ…Ù… Ø¨Ù…ÙÙ‡ÙˆÙ… ØµØ¯ÙŠÙ‚ Ù„Ù„Ø¨ÙŠØ¦Ø© Ù…Ø¹ Ø­Ø±Ø§Ø³Ø© Ø°ÙƒÙŠØ©.",
        "Ù‚Ø±ÙŠØ¨ Ù…Ù† ÙƒØ¨Ø±Ù‰ Ù…Ù†Ø§Ø·Ù‚ Ø§Ù„Ø£Ù†Ø´Ø·Ø© Ø§Ù„Ø¨Ø­Ø±ÙŠØ© ÙˆÙ…Ø­Ø·Ø§Øª Ø§Ù„ÙŠØ®ÙˆØª Ø§Ù„Ø¹Ø§Ù„Ù…ÙŠØ©.",
        "Ø­Ù…Ø§Ù…Ø§Øª Ø³Ø¨Ø§Ø­Ø© Ø®Ø§ØµØ© ÙˆÙ…ØªØ¹Ø¯Ø¯Ø© ØªÙ†Ø§Ø³Ø¨ Ø§Ù„Ø¨Ø§Ù„ØºÙŠÙ† ÙˆØ§Ù„Ø¹Ø§Ø¦Ù„Ø§Øª."
      ] : [
        "Luxury standalone villas and chalets with full direct sea views.",
        "Eco-friendly landscaping with smart security.",
        "Close to major water sports areas and international yacht marinas.",
        "Multiple private swimming pools for adults and families."
      ],
      features: lang === "ar" ? [
        "Ø´Ø§Ø·Ø¦ Ø±Ù…Ù„ÙŠ Ù…Ù…Ù‡Ø¯ Ø®Ø§Øµ Ø¨Ø§Ù„Ù…Ù†ØªØ¬Ø¹",
        "Ø­Ù…Ø§Ù…Ø§Øª Ø³Ø¨Ø§Ø­Ø© Ø§Ù†ÙÙŠÙ†ÙŠØªÙŠ ÙØ±ÙŠØ¯Ø©",
        "Ù…Ù…Ø´Ù‰ Ø³ÙŠØ§Ø­ÙŠ ÙˆÙÙˆØ¯ ÙƒÙˆØ±Øª Ø­Ø§Ø¦Ø² Ø¹Ù„Ù‰ ØªÙ‚Ø¯ÙŠØ±Ø§Øª",
        "Ù…Ù„Ø§Ø¹Ø¨ Ø¨Ø§Ø¯Ù„ ÙˆØªÙ†Ø³ Ø´Ø§Ø·Ø¦ÙŠØ© Ù…Ø±Ø®ØµØ©",
        "Ø®Ø¯Ù…Ø© Ù†Ù‚Ù„ Ø¯Ø§Ø®Ù„ÙŠ Ø¨Ø§Ù„Ø³ÙŠØ§Ø±Ø§Øª Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© (Ø¬ÙˆÙ„Ù ÙƒØ§Ø±)"
      ] : [
        "Private sandy beach",
        "Unique infinity pools",
        "Award-winning boardwalk & food court",
        "Licensed padel & beach tennis courts",
        "Golf cart internal transport service"
      ]
    }
  ];

  const categories = [
    { value: "All",        label: t(lang, "projects_all") },
    { value: lang === "ar" ? "Ø³ÙƒÙ†ÙŠ"   : "Residential", label: t(lang, "projects_residential") },
    { value: lang === "ar" ? "ØªØ¬Ø§Ø±ÙŠ"  : "Commercial",  label: t(lang, "projects_commercial") },
    { value: lang === "ar" ? "Ø³Ø§Ø­Ù„ÙŠ"  : "Coastal",     label: t(lang, "projects_coastal") },
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const slideCategory = (step: number) => {
    const currentIndex = categories.findIndex(c => c.value === activeCategory);
    let newIndex = currentIndex + step;
    if (newIndex >= categories.length) newIndex = 0;
    if (newIndex < 0) newIndex = categories.length - 1;
    setActiveCategory(categories[newIndex].value);
  };

  return (
    <section id="projects" className="py-20 bg-surface relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header with Nav elements & styling */}
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 ${lang === "ar" ? "text-right" : "text-left"}`}>
          
          {/* Header Texts */}
          <div className="space-y-2">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
              {t(lang, "projects_title")}
            </h2>
            <p className="font-sans text-sm md:text-base text-on-surface-variant">
              {t(lang, "projects_subtitle")}
            </p>
          </div>

          {/* Slider Chevrons */}
          <div className="flex items-center gap-3 self-center md:self-auto">
            <button
              onClick={() => slideCategory(lang === "ar" ? -1 : 1)}
              className="w-12 h-12 rounded-full border border-outline hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => slideCategory(lang === "ar" ? 1 : -1)}
              className="w-12 h-12 rounded-full border border-outline hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Categories Tab Bar */}
        <div className={`flex flex-row flex-wrap gap-3 mb-10 border-b border-outline-variant/30 pb-4 ${lang === "ar" ? "justify-end" : "justify-start"}`}>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`font-display text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 cursor-pointer ${
                activeCategory === cat.value
                  ? "bg-primary text-white shadow-md shadow-primary/10"
                  : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={p.id}
                className="group relative overflow-hidden rounded-2xl h-[480px] shadow-lg border border-outline-variant/10"
              >
                <img
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={p.title}
                  src={p.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-transparent z-10 transition-opacity duration-300 group-hover:via-primary/65"></div>
                <div className="absolute top-6 right-6 z-20 bg-secondary px-3.5 py-1.5 rounded-lg text-white font-display text-xs font-bold shadow-md">
                  {p.category}
                </div>
                <div className={`absolute bottom-0 left-0 right-0 p-8 z-20 space-y-4 ${lang === "ar" ? "text-right" : "text-left"}`}>
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-white tracking-wide">
                      {p.title}
                    </h3>
                    <p className="font-sans text-sm text-surface-variant line-clamp-2 leading-relaxed opacity-95">
                      {p.description}
                    </p>
                  </div>
                  <div
                    className="w-full bg-secondary/60 text-white py-3 rounded-xl font-display text-sm font-bold shadow-lg flex items-center justify-center gap-2 cursor-default select-none opacity-70"
                  >
                    <span>{t(lang, "projects_details")}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 bg-primary/50 backdrop-blur-md z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                className={`bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto scrollbar-thin shadow-2xl border border-outline-variant/30 flex flex-col ${lang === "ar" ? "text-right" : "text-left"}`}
              >
                <div className="relative h-64 md:h-80 shrink-0">
                  <img referrerPolicy="no-referrer" className="w-full h-full object-cover" alt={selectedProject.title} src={selectedProject.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <button onClick={() => setSelectedProject(null)} className="absolute left-6 top-6 bg-black/40 text-white hover:bg-black/80 rounded-full p-2.5 transition-colors cursor-pointer z-20">
                    <X className="h-5 w-5" />
                  </button>
                  <div className="absolute bottom-6 right-6 text-white space-y-1">                    <span className="bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">{selectedProject.category}</span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold pt-1">{selectedProject.title}</h3>
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-8 flex-1">
                  <div className="grid grid-cols-2 gap-4 border-b border-outline-variant/20 pb-6">
                    <div className={`flex items-center justify-start gap-3 ${lang === "ar" ? "flex-row-reverse" : "flex-row"}`}>
                      <div className="p-2.5 rounded-lg bg-secondary/10 text-secondary"><MapPin className="h-5 w-5" /></div>
                      <div className="font-sans">
                        <span className="text-xs text-on-surface-variant block">{lang === "ar" ? "Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ø§Ù„Ø¬ØºØ±Ø§ÙÙŠ" : "Location"}</span>
                        <span className="text-sm font-semibold text-primary">{selectedProject.location}</span>
                      </div>
                    </div>
                    <div className={`flex items-center justify-start gap-3 ${lang === "ar" ? "flex-row-reverse" : "flex-row"}`}>
                      <div className="p-2.5 rounded-lg bg-secondary/10 text-secondary"><Coins className="h-5 w-5" /></div>
                      <div className="font-sans">
                        <span className="text-xs text-on-surface-variant block">{lang === "ar" ? "Ø£Ø³Ø¹Ø§Ø± Ø§Ù„ÙˆØ­Ø¯Ø§Øª" : "Starting Price"}</span>
                        <span className="text-sm font-bold text-primary">{selectedProject.priceStart}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className={`font-display text-base font-bold text-primary flex items-center gap-2 ${lang === "ar" ? "flex-row-reverse" : "flex-row"}`}>
                      <Award className="h-4 w-4 text-secondary" />
                      <span>{lang === "ar" ? "Ø­ÙˆÙ„ Ø§Ù„Ù…Ø´Ø±ÙˆØ¹" : "About the Project"}</span>
                    </h4>
                    <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                      {lang === "ar"
                        ? "ÙŠØªÙ…ÙŠØ² Ù‡Ø°Ø§ Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ Ø¨ØªØµÙ…ÙŠÙ…Ø§Øª Ù…Ø¹Ù…Ø§Ø±ÙŠØ© ØªØ¬Ù…Ø¹ Ø¨ÙŠÙ† Ø§Ù„ÙØ®Ø§Ù…Ø© Ø§Ù„Ù…Ø¹Ø§ØµØ±Ø© ÙˆØ§Ù„Ø§Ø³ØªØ¯Ø§Ù…Ø© Ø§Ù„ØªØ´ØºÙŠÙ„ÙŠØ©. Ù†ÙˆÙØ± Ø¨Ø§Ù‚Ø© Ø³ÙƒÙ†ÙŠØ© Ø£Ùˆ Ø³ÙŠØ§Ø­ÙŠØ© Ø£Ùˆ ØªØ¬Ø§Ø±ÙŠØ© ÙØ±ÙŠØ¯Ø© ÙˆØ­ØµØ±ÙŠØ© Ù„Ø¹Ù…Ù„Ø§Ø¦Ù†Ø§ ÙÙŠ Ù„Ø§ÙÙŠØ¯Ø§ Ø§Ù„Ø¹Ù‚Ø§Ø±ÙŠØ© Ù„Ø¶Ù…Ø§Ù† Ø§Ø³ØªØ«Ù…Ø§Ø± Ø¢Ù…Ù† ÙˆÙ…ØªÙ…ÙŠØ² Ù„Ù„Ø£Ø¬ÙŠØ§Ù„ Ø§Ù„Ù‚Ø§Ø¯Ù…Ø©."
                        : "This project features architectural designs combining contemporary luxury with operational sustainability. We offer a unique and exclusive residential, hospitality, or commercial package for Lavida Properties clients to ensure a safe and distinguished investment for future generations."}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className={`font-display text-base font-bold text-primary flex items-center gap-2 ${lang === "ar" ? "flex-row-reverse" : "flex-row"}`}>
                      <Layers className="h-4 w-4 text-secondary" />
                      <span>{lang === "ar" ? "Ø§Ù„Ù…ÙˆØ§ØµÙØ§Øª Ø§Ù„Ø¹Ø§Ù…Ø© ÙˆØ§Ù„Ù…Ù…ÙŠØ²Ø§Øª" : "General Specifications & Features"}</span>
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-2 font-sans text-sm text-on-surface-variant">
                      {selectedProject.details.map((detail, index) => (
                        <li key={index} className={`flex items-start gap-2.5 ${lang === "ar" ? "flex-row-reverse" : "flex-row"}`}>
                          <CheckCircle className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className={`font-display text-base font-bold text-primary flex items-center gap-2 ${lang === "ar" ? "flex-row-reverse" : "flex-row"}`}>
                      <Shield className="h-4 w-4 text-secondary" />
                      <span>{lang === "ar" ? "Ù…Ø±Ø§ÙÙ‚ ÙˆØªØ¬Ù‡ÙŠØ²Ø§Øª Ù…Ø¯Ù…Ø¬Ø©" : "Built-in Facilities & Amenities"}</span>
                    </h4>
                    <div className={`flex flex-wrap gap-2 ${lang === "ar" ? "flex-row-reverse" : "flex-row"}`}>
                      {selectedProject.features.map((feature, ind) => (
                        <span key={ind} className="bg-surface-container-low text-primary border border-outline-variant/30 px-3 py-1.5 rounded-lg text-xs font-semibold">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`pt-6 border-t border-outline-variant/20 flex flex-col gap-4 items-center justify-between ${lang === "ar" ? "sm:flex-row-reverse" : "sm:flex-row"}`}>
                    <span className={`text-xs text-on-surface-variant text-center ${lang === "ar" ? "sm:text-right" : "sm:text-left"}`}>
                      {lang === "ar"
                        ? "* ÙŠØªÙˆÙØ± ØªØ³Ù‡ÙŠÙ„Ø§Øª ÙÙŠ Ø§Ù„Ø³Ø¯Ø§Ø¯ ÙˆØ§Ù„ØªÙ…ÙˆÙŠÙ„ Ø§Ù„Ø¹Ù‚Ø§Ø±ÙŠ ØªØµÙ„ Ø¥Ù„Ù‰ 8 Ø³Ù†ÙˆØ§Øª Ø¨Ø¯ÙˆÙ† ÙÙˆØ§Ø¦Ø¯."
                        : "* Payment facilities and mortgage financing available up to 8 years interest-free."}
                    </span>
                    <button
                      onClick={() => { setSelectedProject(null); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                      className="w-full sm:w-auto bg-primary text-white hover:bg-secondary px-8 py-3 rounded-lg font-display text-xs font-bold transition-all shadow-md cursor-pointer text-center"
                    >
                      {lang === "ar" ? "Ø·Ù„Ø¨ ØªØ³Ø¹ÙŠØ±Ø© Ø£Ùˆ Ù…Ø¹Ø§ÙŠÙ†Ø© Ø®Ø§ØµØ©" : "Request a Quote or Private Tour"}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

