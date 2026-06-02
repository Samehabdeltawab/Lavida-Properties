import { motion } from "motion/react";
import { Brain, Network, UserCheck, Users, TrendingUp, ShieldCheck } from "lucide-react";

export default function WhyUs() {
  const bentoItems = [
    {
      colSpan: "lg:col-span-2",
      icon: Brain,
      title: "خبرة السوق العميقة",
      description: "فهم شامل وعميق للمتغيرات الاقتصادية والفرص الصاعدة في السوق العقاري المصري.",
      isSpecial: false
    },
    {
      colSpan: "lg:col-span-4",
      icon: Network,
      title: "شبكة مطورين واسعة",
      description: "شراكات استراتيجية متكاملة ومباشرة مع أقوى المطورين لضمان أفضل الأسعار الحصرية والخصومات لعملائنا.",
      isSpecial: false
    },
    {
      colSpan: "lg:col-span-3",
      icon: UserCheck,
      title: "نهج يركز على العميل",
      description: "نقدم حلول استثمارية وسكنية مخصصة بالكامل تناسب ميزانيتك، تطلعاتك، وأهدافك المالية المستدامة.",
      isSpecial: false
    },
    {
      colSpan: "lg:col-span-3",
      icon: Users,
      title: "فريق مبيعات محترف",
      description: "مستشارون وخبراء مبيعات معتمدون مدربون على أعلى مستوى لتقديم الدعم والمشورة الشاملة بموضوعية وحيادية.",
      isSpecial: false
    },
    {
      colSpan: "lg:col-span-4",
      icon: TrendingUp,
      title: "عقلية استثمارية",
      description: "نهتم بدراسة العائد الإيجاري ومعدل نمو رأس المال لضمان قيمة مستقبلية مستدامة لكافة استثماراتك.",
      isSpecial: false
    },
    {
      colSpan: "lg:col-span-2",
      icon: ShieldCheck,
      title: "خدمة متكاملة",
      description: "من الاستشارة والتحليل المالي حتى إجراءات الاستلام والتشغيل وما بعد البيع.",
      isSpecial: true
    }
  ];

  return (
    <section className="py-20 bg-primary text-white overflow-hidden relative">
      
      {/* Absolute Decorative Circles */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary-container/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-right">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-fixed">
            لماذا تختار لافيدا العقارية؟
          </h2>
          <div className="w-16 h-1 bg-secondary-fixed mx-auto rounded-full"></div>
          <p className="font-sans text-sm md:text-base text-surface-variant max-w-xl mx-auto">
            نحن شريكك الموثوق وعينك الحارسة التي تضمن لك أعلى العوائد الاستثمارية والسلامة القانونية التامة
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {bentoItems.map((item, index) => {
            const IconComponent = item.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`${item.colSpan} rounded-2xl p-6 md:p-8 border transition-all duration-300 flex flex-col ${
                  item.isSpecial
                    ? "bg-secondary-fixed text-primary border-transparent shadow-xl"
                    : "bg-white/[0.04] border-white/10 hover:bg-white/[0.08]"
                }`}
              >
                <div className="flex flex-row items-start gap-4 text-right">
                  <div className={`p-3 rounded-xl flex-shrink-0 ${
                    item.isSpecial 
                      ? "bg-primary text-secondary-fixed" 
                      : "bg-white/5 text-secondary-fixed"
                  }`}>
                    <IconComponent className="h-6 w-6" />
                  </div>

                  <div className="space-y-2 flex-grow">
                    <h4 className="font-display text-lg font-bold">
                      {item.title}
                    </h4>
                    <p className={`font-sans text-sm leading-relaxed ${
                      item.isSpecial ? "text-primary/80" : "text-surface-variant/80"
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
