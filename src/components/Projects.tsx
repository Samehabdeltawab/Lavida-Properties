import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ChevronLeft, MapPin, Layers, Coins, CheckCircle, X, Shield, Star, Award } from "lucide-react";
import { Project } from "../types";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "residential",
      title: "سكني - فندقي",
      category: "سكني",
      description: "وحدات سكنية وفندقية فاخرة في أرقى أحياء القاهرة والمدن الجديدة.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwFHe8whi0rCeTETSk0WjwmlQGokSNHHOXNmO3DS2NyAdNcBOLvVHPBspXZ-4Byg_i_IlTomvL2RhCKB2KJZREgDvrt_EzoYzbNevUdJMaIUne4Mc2iAE4Oz-j4T1XC8XzWosFRL_C0_ZQojBCZKSUB2dhxThm5halC9Ndie2SX5yt1rbBRmaJUVyEuOVjGqRzM96EYu12_AxGS0hdl9PR5GTkhR9NxVfDdRVKjqggyUBNiV8O-yQIJs-xj7rFJ2A84VLw8nWDww",
      location: "القاهرة الجديدة & العاصمة الإدارية",
      priceStart: "4,500,000 ج.م",
      details: [
        "شقق فندقية متميزة وبنتهاوس بتشطيبات وتصميمات أوروبية بالكامل.",
        "أنظمة إدارة ذكية وخدمة كونسيرج على مدار الساعة.",
        "الوصول الحصري لنادي النخبة الرياضي والمنتجع الصحي.",
        "قريبة من المرافق التعليمية والتجارية الأساسية."
      ],
      features: [
        "تكييف مركزي متكامل",
        "حراسة وكاميرات مراقبة 24/7",
        "صالة ألعاب رياضية وسبا بريميوم",
        "مساحات خضراء شاسعة ولاند عائلي",
        "مصاعد بانورامية ذكية"
      ]
    },
    {
      id: "commercial",
      title: "تجاري - إداري - طبي",
      category: "تجاري",
      description: "مكاتب ومراكز تجارية وطبية مجهزة بأحدث الوسائل التكنولوجية والإنشائية.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtFAv2u3n41TS04MI7zd_M9Su30YiGBwg2x9CiislCTkZe1FUe4h7K8_WsbYUxDjgWbaDKL32jhGAUP5VHNGsE3xof2rkNYV_MpB63ltRM4Cf4JVa6kVLtRPhlXjY25nQKmfDXTYu26EKOEL6iFNaTYG8Fm_C0uqb7AHcr8Y6LVt97PBo5lr8EHYEjNayF6hzy5eA38Ur87P_NWOHf5SC80FItCrnRVZcHO091qj4RVdOfzAnqIK5WYJ35gPHP6tHxFheJyuwvSQ",
      location: "غرب القاهرة (الشيخ زايد) & التجمع الخامس",
      priceStart: "6,200,000 ج.م",
      details: [
        "واجهات زجاجية مزدوجة معزولة عاكسة للصوت والحرارة.",
        "بنية تحتية متكاملة لشبكات الألياف الضوئية وأنظمة الطاقة البديلة.",
        "عيادات مجهزة بالكامل بمعايير مكافحة العدوى العالمية.",
        "جراجات تحت الأرض تسع لأكثر من 1500 سيارة مستقلة."
      ],
      features: [
        "أنظمة تكييف متطورة صديقة للبيئة VRV",
        "قاعات مؤتمرات مشتركة مجهزة بأحدث الصوتيات",
        "أنظمة متكاملة للإنذار ومكافحة الحريق الذكي",
        "شركة صيانة عالمية مسؤولة عن إدارة المرفق полностью",
        "محطات شحن سيارات كهربائية"
      ]
    },
    {
      id: "coastal",
      title: "ساحلي",
      category: "ساحلي",
      description: "منتجعات وشاليهات ساحلية ساحرة على أجمل شواطئ البحر الأحمر والمتوسط.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD71JQvqIMbWrrA_prXpeR3GRWIeiiQzHAd1fJJxjXbBp6qkWHdrZIQoKxCzbwJh8UmghRLwDaHqmpGIf8KWmcUxNBdy9qhtl6IwO2sLNWz_sE2-pAx7fDI1eI_YCVr58ZPXp1AsiZIKXQhNbMh3IGeLXKCfZUpUzUQK6ATTYYRG8cSkU_Cxi9AmXGNvGbOm9DGCgJt_fYENsGf52DxFou9CooHzmDKq_VGqvxzxTrG0qCCoBuSjAoZd_34G6-ejFd3PDaHAiyfRg",
      location: "رأس الحكمة، الساحل الشمالي & الجونة",
      priceStart: "8,000,000 ج.م",
      details: [
        "فيلات فاخرة منفصلة وشاليهات تطل بالكامل على البحر بشكل مباشر.",
        "كل لاند سكيب مصمم بمفهوم صديق للبيئة مع حراسة ذكية.",
        "قريب من كبرى مناطق الأنشطة البحرية ومحطات اليخوت العالمية.",
        "حمامات سباحة خاصة ومتعددة تناسب البالغين والعائلات."
      ],
      features: [
        "شاطئ رملي ممهد خاص بالمنتجع",
        "حمامات سباحة انفينيتي فريدة",
        "ممشى سياحي وفود كورت حائز على تقديرات",
        "ملاعب بادل وتنس شاطئية مرخصة",
        "خدمة نقل داخلي بالسيارات الكهربائية (جولف كار)"
      ]
    }
  ];

  const categories = [
    { value: "All", label: "الكل" },
    { value: "سكني", label: "سكني وفندقي" },
    { value: "تجاري", label: "تجاري وإداري وطبي" },
    { value: "ساحلي", label: "ساحلي" }
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 text-right">
          
          {/* Header Texts */}
          <div className="space-y-2">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
              مشاريعنا المختارة
            </h2>
            <p className="font-sans text-sm md:text-base text-on-surface-variant">
              تصفح مجموعتنا الحصرية من العقارات الاستثنائية والفريدة في أرقى المواقع الجغرافية بمصر
            </p>
          </div>

          {/* Slider Chevrons */}
          <div className="flex items-center gap-3 self-center md:self-auto">
            <button
              onClick={() => slideCategory(-1)}
              className="w-12 h-12 rounded-full border border-outline hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md"
              aria-label="السابق"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => slideCategory(1)}
              className="w-12 h-12 rounded-full border border-outline hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md"
              aria-label="التالي"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-row flex-wrap justify-end gap-3 mb-10 border-b border-outline-variant/30 pb-4">
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

        {/* Projects Grid Grid layout matched beautifully from screenshot */}
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
                className="group relative overflow-hidden rounded-2xl h-[480px] shadow-lg border border-outline-variant/10 cursor-pointer"
                onClick={() => setSelectedProject(p)}
              >
                {/* Image */}
                <img
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={p.title}
                  src={p.image}
                />
                
                {/* Background Gradient Layer for perfect contrast legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-transparent z-10 transition-opacity duration-300 group-hover:via-primary/65"></div>
                
                {/* Tag Overlay */}
                <div className="absolute top-6 right-6 z-20 bg-secondary px-3.5 py-1.5 rounded-lg text-white font-display text-xs font-bold shadow-md">
                  {p.category}
                </div>

                {/* Text Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-right space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-white tracking-wide">
                      {p.title}
                    </h3>
                    <p className="font-sans text-sm text-surface-variant line-clamp-2 leading-relaxed opacity-95">
                      {p.description}
                    </p>
                  </div>

                  <div className="flex flex-row-reverse items-center gap-2 text-secondary-fixed text-xs font-semibold pb-1">
                    <MapPin className="h-4 w-4" />
                    <span>{p.location}</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(p);
                    }}
                    className="w-full bg-secondary hover:bg-secondary-fixed hover:text-black text-white py-3 rounded-xl font-display text-sm font-bold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>اعرف التفاصيل</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Multi-Screen Detail Sheet (Modal Overlay) */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 bg-primary/50 backdrop-blur-md z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto scrollbar-thin shadow-2xl border border-outline-variant/30 text-right flex flex-col"
              >
                
                {/* Image & Close bar */}
                <div className="relative h-64 md:h-80 shrink-0">
                  <img
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    alt={selectedProject.title}
                    src={selectedProject.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  
                  {/* Close button inside image */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute left-6 top-6 bg-black/40 text-white hover:bg-black/80 rounded-full p-2.5 transition-colors cursor-pointer z-20"
                    aria-label="إغلاق"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="absolute bottom-6 right-6 text-white space-y-1">
                    <span className="bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold pt-1">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-6 md:p-8 space-y-8 flex-1">
                  
                  {/* Sub Header Specs */}
                  <div className="grid grid-cols-2 gap-4 border-b border-outline-variant/20 pb-6">
                    <div className="flex flex-row-reverse items-center justify-start gap-3">
                      <div className="p-2.5 rounded-lg bg-secondary/10 text-secondary">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div className="font-sans">
                        <span className="text-xs text-on-surface-variant block">الموقع الجغرافي</span>
                        <span className="text-sm font-semibold text-primary">{selectedProject.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-row-reverse items-center justify-start gap-3">
                      <div className="p-2.5 rounded-lg bg-secondary/10 text-secondary">
                        <Coins className="h-5 w-5" />
                      </div>
                      <div className="font-sans">
                        <span className="text-xs text-on-surface-variant block">أسعار الوحدات</span>
                        <span className="text-sm font-bold text-primary">{selectedProject.priceStart}</span>
                      </div>
                    </div>
                  </div>

                  {/* General Overview */}
                  <div className="space-y-2">
                    <h4 className="font-display text-base font-bold text-primary flex flex-row-reverse items-center gap-2">
                      <Award className="h-4.5 w-4.5 text-secondary" />
                      <span>حول المشروع</span>
                    </h4>
                    <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                      يتميز هذا المشروع بتصميمات معمارية تجمع بين الفخامة المعاصرة والاستدامة التشغيلية. نوفر باقة سكنية أو سياحية أو تجارية فريدة وحصرية لعملائنا في لافيدا العقارية لضمان استثمار آمن ومتميز للأجيال القادمة.
                    </p>
                  </div>

                  {/* Details bullet points */}
                  <div className="space-y-3">
                    <h4 className="font-display text-base font-bold text-primary flex flex-row-reverse items-center gap-2">
                      <Layers className="h-4.5 w-4.5 text-secondary" />
                      <span>المواصفات العامة والمميزات</span>
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-2 font-sans text-sm text-on-surface-variant">
                      {selectedProject.details.map((detail, index) => (
                        <li key={index} className="flex flex-row-reverse items-start gap-2.5">
                          <CheckCircle className="h-4.5 w-4.5 text-secondary shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features Tag Grid */}
                  <div className="space-y-3">
                    <h4 className="font-display text-base font-bold text-primary flex flex-row-reverse items-center gap-2">
                      <Shield className="h-4.5 w-4.5 text-secondary" />
                      <span>مرافق وتجهيزات مدمجة</span>
                    </h4>
                    <div className="flex flex-wrap flex-row-reverse gap-2">
                      {selectedProject.features.map((feature, ind) => (
                        <span
                          key={ind}
                          className="bg-surface-container-low text-primary border border-outline-variant/30 px-3 py-1.5 rounded-lg text-xs font-semibold"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Call */}
                  <div className="pt-6 border-t border-outline-variant/20 flex flex-col sm:flex-row-reverse gap-4 items-center justify-between">
                    <span className="text-xs text-on-surface-variant text-center sm:text-right">
                      * يتوفر تسهيلات في السداد والتمويل العقاري تصل إلى 8 سنوات بدون فوائد.
                    </span>
                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        const element = document.getElementById("contact");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="w-full sm:w-auto bg-primary text-white hover:bg-secondary px-8 py-3 rounded-lg font-display text-xs font-bold transition-all shadow-md cursor-pointer text-center"
                    >
                      طلب تسعيرة أو معاينة خاصة
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
