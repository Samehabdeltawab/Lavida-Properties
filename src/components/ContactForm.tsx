import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, Send, HelpCircle, CheckCircle } from "lucide-react";
import { LeadSubmission } from "../types";

interface ContactFormProps {
  onLeadSubmit: (lead: Omit<LeadSubmission, "id" | "date" | "status">) => void;
}

export default function ContactForm({ onLeadSubmit }: ContactFormProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) {
      newErrors.fullName = "الاسم بالكامل مطلوب";
    } else if (fullName.trim().length < 3) {
      newErrors.fullName = "يجب أن يكون الاسم 3 أحرف على الأقل";
    }

    const phoneRegex = /^01[0125][0-9]{8}$/;
    if (!phone.trim()) {
      newErrors.phone = "رقم الهاتف مطلوب";
    } else if (!phoneRegex.test(phone.trim())) {
      newErrors.phone = "يجب إدخال رقم هاتف مصري صحيح مكون من 11 رقم (مثال: 01012345678)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onLeadSubmit({
        fullName: fullName.trim(),
        phone: phone.trim(),
        message: message.trim() || undefined
      });

      // إرسال الرسالة على واتساب
      const whatsappNumber = "201003306688";
      const whatsappText = `🏠 *طلب استشارة عقارية جديد - لافيدا العقارية*\n\n👤 *الاسم:* ${fullName.trim()}\n📞 *الهاتف:* ${phone.trim()}${message.trim() ? `\n💬 *الرسالة:* ${message.trim()}` : ""}`;
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;
      window.open(whatsappURL, "_blank");

      setIsSuccess(true);
      setFullName("");
      setPhone("");
      setMessage("");
      setErrors({});

      // Hide success notification after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-card border border-outline-variant/30">
          
          <div className="grid grid-cols-1 md:grid-cols-5">
            
            {/* Left Side: Dark Info Panel (col-span-2) */}
            <div className="md:col-span-2 bg-primary p-10 md:p-12 text-white flex flex-col justify-between text-right">
              
              <div className="space-y-6">
                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-secondary-fixed">
                  تواصل معنا الآن
                </h3>
                <p className="font-sans text-sm md:text-base text-surface-variant/90 leading-relaxed">
                  اترك بياناتك وسيقوم أحد خبرائنا ومستشارينا العقاريين المعتمدين بالتواصل معك لشرح كافة التفاصيل والرد على استفساراتك خلال 24 ساعة.
                </p>
              </div>

              {/* Contact Listing */}
              <ul className="space-y-6 my-10 font-sans text-right">
                <li className="flex flex-row-reverse items-center gap-4 justify-start group">
                  <div className="p-2.5 rounded-lg bg-white/10 text-secondary-fixed group-hover:bg-secondary-fixed group-hover:text-primary transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-surface-variant block pb-0.5">رقم الهاتف المميز</span>
                    <a href="tel:+201000000000" className="text-sm font-semibold hover:text-secondary-fixed transition-colors LTR block" dir="ltr">
                      +20 100 000 0000
                    </a>
                  </div>
                </li>

                <li className="flex flex-row-reverse items-center gap-4 justify-start group">
                  <div className="p-2.5 rounded-lg bg-white/10 text-secondary-fixed group-hover:bg-secondary-fixed group-hover:text-primary transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-surface-variant block pb-0.5">البريد الإلكتروني</span>
                    <a href="mailto:info@lavida-properties.com" className="text-sm font-semibold hover:text-secondary-fixed transition-colors block">
                      info@lavida-properties.com
                    </a>
                  </div>
                </li>

                <li className="flex flex-row-reverse items-center gap-4 justify-start group">
                  <div className="p-2.5 rounded-lg bg-white/10 text-secondary-fixed group-hover:bg-secondary-fixed group-hover:text-primary transition-colors">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-surface-variant block pb-0.5">المقر الرئيسي</span>
                    <span className="text-sm font-semibold block">
                      التجمع الخامس، القاهرة، مصر
                    </span>
                  </div>
                </li>
              </ul>

              {/* Little Footer note */}
              <div className="text-[11px] text-surface-variant/70 border-t border-white/10 pt-4 font-sans text-center">
                متاحون لخدمتك طوال أيام الأسبوع من الساعة 9 صباحاً إلى 10 مساءً.
              </div>

            </div>

            {/* Right Side: Interactive Input Fields Form (col-span-3) */}
            <div className="md:col-span-3 p-10 md:p-12 text-right">
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center space-y-4 py-12"
                  >
                    <div className="p-4 rounded-full bg-emerald-50 text-emerald-600">
                      <CheckCircle className="h-16 w-16" />
                    </div>
                    <h4 className="font-display text-2xl font-bold text-primary">
                      تم استلام طلبك بنجاح!
                    </h4>
                    <p className="font-sans text-sm text-on-surface-variant text-center max-w-sm">
                      شكراً لتواصلك مع لافيدا العقارية. تم تسجيل بياناتك بنجاح وجارٍ مراجعتها، سيقوم مسئول الاستشارات العقارية بالتواصل معك خلال 24 ساعة كحد أقصى.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-6 border border-primary/20 hover:bg-primary/5 text-primary px-5 py-2 rounded-lg font-display text-xs font-semibold transition-all cursor-pointer"
                    >
                      إرسال طلب جديد
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name field */}
                    <div>
                      <label className="block font-display text-sm font-bold text-on-surface mb-2">
                        الاسم بالكامل
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={`w-full bg-surface-container-low border rounded-xl px-4 py-3 font-sans text-sm text-on-surface focus:bg-white focus:border-secondary focus:ring-0 outline-none transition-all ${
                          errors.fullName ? "border-red-500" : "border-outline-variant/50"
                        }`}
                        placeholder="ادخل اسمك ثلاثياً"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-xs font-sans mt-1.5 font-semibold">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Phone Number Field */}
                    <div>
                      <label className="block font-display text-sm font-bold text-on-surface mb-2">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full bg-surface-container-low border rounded-xl px-4 py-3 font-sans text-sm text-on-surface focus:bg-white focus:border-secondary focus:ring-0 outline-none transition-all LTR`}
                        placeholder="01XXXXXXXXX"
                        dir="ltr"
                      />
                      {errors.phone ? (
                        <p className="text-red-500 text-xs font-sans mt-1.5 font-semibold">
                          {errors.phone}
                        </p>
                      ) : (
                        <p className="text-[11px] text-on-surface-variant/70 font-sans mt-1">
                          * يرجى إدخال رقم الهاتف المرتبط بـ واتساب لسهولة إرسال العروض.
                        </p>
                      )}
                    </div>

                    {/* Message Details (Optional) */}
                    <div>
                      <label className="block font-display text-sm font-bold text-on-surface mb-2">
                        الرسالة والوحدات المفضلة (اختياري)
                      </label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl px-4 py-3 font-sans text-sm text-on-surface focus:bg-white focus:border-secondary focus:ring-0 outline-none transition-all resize-none"
                        placeholder="اخبرنا بنوع وتفاصيل العقار الذي تبحث عنه، أو ميزانيتك المقترحة..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-primary text-white hover:bg-secondary hover:text-white font-display text-base font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="h-4.5 w-4.5 transform rotate-180" />
                      <span>إرسال الطلب</span>
                    </button>
                  </form>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
