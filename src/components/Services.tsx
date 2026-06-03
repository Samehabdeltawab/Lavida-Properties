import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Megaphone, Tag, Users, Rocket, RefreshCw, Headphones, ArrowLeft, X } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  icon: any;
  description: string;
  details: string[];
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: "marketing",
      title: "التسويق العقاري",
      icon: Megaphone,
      description: "نستخدم أحدث التقنيات والخطط التسويقية المبتكرة لضمان وصول عقارك للجمهور المستهدف بدقة واحترافية.",
      details: [
        "استهداف رقمي عالي الدقة للمستثمرين المهتمين في مصر والخليج العربي.",
        "تصوير احترافي وإنتاج جولات افتراضية ثلاثية الأبعاد لكل وحدة عقارية.",
        "إعلانات موجهة عبر منصات التواصل الاجتماعي ومحركات البحث لضمان أقصى وصول.",
        "تمثيل عقارك مع شبكتنا الكبرى لتحقيق بيع بأفضل سعر ممكن."
      ]
    },
    {
      id: "sales",
      title: "المبيعات",
      icon: Tag,
      description: "فريق مبيعات محترف مخصص لتحويل الفرص إلى نتائج ملموسة، مع التركيز على تحقيق أفضل قيمة للطرفين.",
      details: [
        "فريق ذو خبرة يمتلك مهارات تفاوض عالية لضمان أفضل سعر لعقارك.",
        "تسهيل عمليات التعاقد والتحقق من سلامة كافة المستندات القانونية.",
        "تقديم خيارات تمويل عقاري مرنة وخطط سداد تناسب جميع الأهداف.",
        "مستشار مبيعات مخصص يتابع معك خطوة بخطوة حتى نهاية الصفقة."
      ]
    },
    {
      id: "consultancy",
      title: "الاستشارات العقارية",
      icon: Users,
      description: "نقدم رؤية تحليلية شاملة للسوق المصري تساعدك في اتخاذ قرارات استثمارية مدروسة ومبنية على أرقام.",
      details: [
        "إعداد تقارير جدوى استثمارية مخصصة وعوائد إيجارية متوقعة.",
        "تحليل مستمر وشفاف للتغيرات والاتجاهات الحديثة بالسوق المصري.",
        "توجيه استراتيجي لاختيار المواقع ذات الكفاءة الأعلى لتنمية رأس المال.",
        "جلسات استشارية فردية مجانية مصممة لتلبية تفضيلاتك الاستثمارية."
      ]
    },
    {
      id: "launch",
      title: "استراتيجيات الإطلاق",
      icon: Rocket,
      description: "نخطط وننفذ إطلاقات المشاريع الكبرى لضمان زخم تسويقي هائل وتحقيق مبيعات قياسية منذ اليوم الأول.",
      details: [
        "حملات تشويقية مسبقة التخطيط تضمن توليد اهتمام جماهيري هائل.",
        "تنظيم وإدارة فعاليات إطلاق حصرية لرجال الأعمال والمستثمرين الكبار.",
        "دراسة متعمقة للمشروع لتحديد نقاط القوة وعناصر التميز الفريدة.",
        "التنسيق الكامل مع قنوات البيع المباشرة والوسطاء لضمان انطلاقة ناجحة."
      ]
    },
    {
      id: "resale",
      title: "إعادة البيع",
      icon: RefreshCw,
      description: "ندير عملية إعادة البيع بكل سلاسة، مع ضمان سرعة التنفيذ والحصول على أفضل سعر عادل في السوق.",
      details: [
        "تقييم عقاري عادل ودقيق يعتمد على مقارنات السوق وأرقام المبيعات الحية.",
        "تسويق مستقل لوحدات إعادة البيع للوصول السريع للمشترين الجادين.",
        "إدارة تسوية المعاملات المالية المتبقية مع المطور العقاري الأصلي.",
        "الانتهاء من عقود التنازل والتحصيل المالي بأمان تام وبدون أي متاعب."
      ]
    },
    {
      id: "after_sales",
      title: "خدمات ما بعد البيع",
      icon: Headphones,
      description: "علاقتنا تبدأ لا تنتهي عند توقيع العقد؛ نوفر دعماً كاملاً في إجراءات الاستلام والصيانة والتشغيل.",
      details: [
        "فحص فني دقيق للوحدة قبل الاستلام وتوثيق الملاحظات للمطور لمعالجتها.",
        "مساعدة شاملة في اختيار وتنفيذ ديكور وتشطيب الوحدات بأفضل الأسعار.",
        "إدارة وتأجير العقار لضمان تدفق نقدي دوري وعوائد منتظمة.",
        "دعم قانوني وفني مستمر للرد على أي استفسارات تتعلق بالتشغيل والخدمات."
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-surface-container-low relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
            خدماتنا العقارية المتكاملة
          </h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
          <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-xl mx-auto">
            مجموعة متميزة من الخدمات الاحترافية المصممة لخدمتك طوال دورتك الاستثمارية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -6, boxShadow: "0 10px 30px -10px rgba(0, 51, 78, 0.12)" }}
                className="bg-white p-8 rounded-xl border border-outline-variant/30 shadow-card transition-all duration-300 text-right flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="inline-flex p-3 rounded-lg bg-secondary-fixed/30 text-secondary mb-2">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <button
                  onClick={() => setSelectedService(service)}
                  className="mt-6 flex flex-row-reverse items-center justify-start gap-1 text-secondary font-display text-sm font-semibold hover:text-primary transition-colors cursor-pointer group"
                >
                  <span>اقرأ المزيد</span>
                  <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Detail Overlay Dialog (Service Modals) */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-outline-variant/30 text-right relative"
              >
                {/* Modal Header */}
                <div className="bg-primary text-white p-6 relative">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute left-6 top-6 text-white/70 hover:text-white transition-colors cursor-pointer"
                    aria-label="إغلاق"
                  >
                    <X className="h-6 w-6" />
                  </button>
                  <div className="inline-flex p-3 rounded-lg bg-white/10 text-secondary-fixed mb-3">
                    <selectedService.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold">
                    {selectedService.title}
                  </h3>
                </div>

                {/* Modal Body */}
                <div className="p-6 md:p-8 space-y-6">
                  <p className="font-sans text-sm text-on-surface leading-relaxed border-b border-outline-variant/20 pb-4">
                    {selectedService.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-display text-sm font-bold text-secondary">
                      ما تشمله الخدمة بالتفصيل:
                    </h4>
                    <ul className="space-y-2.5 font-sans text-sm text-on-surface-variant">
                      {selectedService.details.map((detail, idx) => (
                        <li key={idx} className="flex flex-row-reverse items-start gap-2.5 text-right">
                          <span className="h-5 w-5 rounded-full bg-secondary-fixed/50 text-secondary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                            ✓
                          </span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => {
                        setSelectedService(null);
                        const element = document.getElementById("contact");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="bg-primary text-white hover:bg-secondary hover:text-white px-6 py-2.5 rounded-lg font-display text-xs font-bold transition-all shadow-md cursor-pointer"
                    >
                      طلب استشارة بخصوص الخدمة
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
