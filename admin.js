// Cities data for each governorate
const citiesData = {
    'cairo': ['القاهرة الجديدة', 'مدينة نصر', 'مصر الجديدة', 'المعادي', 'حلوان', 'المقطم', 'الرحاب', 'الشروق', 'بدر', 'العبور'],
    'giza': ['الشيخ زايد', '6 أكتوبر', 'الهرم', 'فيصل', 'المهندسين', 'الدقي', 'الجيزة', 'العجوزة', 'الحوامدية', 'أكتوبر الجديدة'],
    'alexandria': ['المنتزه', 'العجمي', 'برج العرب', 'العامرية', 'سموحة', 'سيدي جابر', 'سيدي بشر', 'ميامي', 'ستانلي'],
    'dakahlia': ['المنصورة', 'طلخا', 'ميت غمر', 'دكرنس', 'أجا', 'منية النصر'],
    'red-sea': ['الغردقة', 'سفاجا', 'القصير', 'مرسى علم', 'شلاتين', 'رأس غارب', 'الجونة', 'سهل حشيش'],
    'beheira': ['دمنهور', 'كفر الدوار', 'رشيد', 'إدكو', 'أبو المطامير', 'الدلنجات'],
    'fayoum': ['الفيوم', 'طامية', 'سنورس', 'إطسا', 'أبشواي', 'يوسف الصديق'],
    'gharbiya': ['طنطا', 'المحلة الكبرى', 'كفر الزيات', 'زفتى', 'السنطة', 'قطور'],
    'ismailia': ['الإسماعيلية', 'فايد', 'القنطرة', 'أبو صوير', 'التل الكبير'],
    'menofia': ['شبين الكوم', 'منوف', 'أشمون', 'الباجور', 'قويسنا', 'تلا', 'السادات'],
    'minya': ['المنيا', 'ملوي', 'سمالوط', 'أبو قرقاص', 'بني مزار', 'مغاغة'],
    'qaliubiya': ['بنها', 'شبرا الخيمة', 'القناطر الخيرية', 'الخانكة', 'كفر شكر', 'طوخ', 'قليوب'],
    'new-valley': ['الخارجة', 'الداخلة', 'الفرافرة', 'باريس', 'بلاط'],
    'suez': ['السويس', 'الأربعين', 'عتاقة', 'الجناين'],
    'aswan': ['أسوان', 'كوم أمبو', 'دراو', 'إدفو', 'نصر النوبة'],
    'assiut': ['أسيوط', 'ديروط', 'منفلوط', 'القوصية', 'أبنوب', 'أبو تيج'],
    'beni-suef': ['بني سويف', 'الواسطى', 'ناصر', 'إهناسيا', 'ببا', 'الفشن'],
    'port-said': ['بورسعيد', 'بورفؤاد', 'العرب', 'الزهور', 'المناخ'],
    'damietta': ['دمياط', 'رأس البر', 'فارسكور', 'الزرقا', 'كفر سعد'],
    'sharkia': ['الزقازيق', 'بلبيس', '10 رمضان', 'فاقوس', 'ههيا', 'أبو حماد', 'منيا القمح'],
    'south-sinai': ['شرم الشيخ', 'دهب', 'نويبع', 'طابا', 'رأس سدر', 'سانت كاترين'],
    'kafr-el-sheikh': ['كفر الشيخ', 'دسوق', 'فوه', 'مطوبس', 'بيلا', 'الرياض'],
    'matrouh': ['مطروح', 'العلمين', 'الضبعة', 'سيدي براني', 'السلوم', 'مرسى مطروح'],
    'luxor': ['الأقصر', 'طيبة', 'الكرنك', 'البياضية', 'الطود'],
    'qena': ['قنا', 'نجع حمادي', 'قوص', 'دشنا', 'الوقف', 'فرشوط'],
    'north-sinai': ['العريش', 'الشيخ زويد', 'رفح', 'بئر العبد', 'نخل'],
    'sohag': ['سوهاج', 'أخميم', 'البلينا', 'المراغة', 'طما', 'جرجا']
};

// Property Type Change Handler
document.getElementById('propertyType').addEventListener('change', function() {
    const value = this.value;
    const unitTypeGroup = document.getElementById('unitTypeGroup');
    const categoryGroup = document.getElementById('categoryGroup');
    
    // Show/hide unit type and category based on property type
    if (value === 'residential') {
        unitTypeGroup.classList.remove('hidden');
        categoryGroup.classList.remove('hidden');
        document.getElementById('unitType').required = true;
        document.getElementById('category').required = true;
    } else {
        unitTypeGroup.classList.add('hidden');
        categoryGroup.classList.add('hidden');
        document.getElementById('unitType').required = false;
        document.getElementById('category').required = false;
        document.getElementById('unitType').value = '';
        document.getElementById('category').value = '';
    }
});

// Governorate Change Handler
document.getElementById('governorate').addEventListener('change', function() {
    const governorate = this.value;
    const citySelect = document.getElementById('city');
    
    // Clear current cities
    citySelect.innerHTML = '<option value="">اختر المدينة</option>';
    
    // Add cities for selected governorate
    if (governorate && citiesData[governorate]) {
        citiesData[governorate].forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
});

// Payment Method Change Handler
document.getElementById('paymentMethod').addEventListener('change', function() {
    const value = this.value;
    const installmentTypeGroup = document.getElementById('installmentTypeGroup');
    
    if (value === 'installment') {
        installmentTypeGroup.classList.remove('hidden');
        document.getElementById('installmentType').required = true;
    } else {
        installmentTypeGroup.classList.add('hidden');
        document.getElementById('installmentType').required = false;
        document.getElementById('installmentType').value = '';
    }
});

// Form Submit Handler
document.getElementById('propertyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = {
        propertyType: document.getElementById('propertyType').value,
        unitType: document.getElementById('unitType').value,
        category: document.getElementById('category').value,
        governorate: document.getElementById('governorate').value,
        city: document.getElementById('city').value,
        area: document.getElementById('area').value,
        floor: document.getElementById('floor').value,
        finishing: document.getElementById('finishing').value,
        direction: document.getElementById('direction').value,
        totalPrice: document.getElementById('totalPrice').value,
        downPayment: document.getElementById('downPayment').value,
        paymentMethod: document.getElementById('paymentMethod').value,
        installmentType: document.getElementById('installmentType').value,
        description: document.getElementById('description').value,
        timestamp: new Date().toISOString()
    };
    
    // Get existing properties from localStorage
    let properties = JSON.parse(localStorage.getItem('lavidaProperties') || '[]');
    
    // Add new property
    properties.push(formData);
    
    // Save to localStorage
    localStorage.setItem('lavidaProperties', JSON.stringify(properties));
    
    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.add('show');
    
    // Reset form
    this.reset();
    
    // Hide conditional fields
    document.getElementById('unitTypeGroup').classList.add('hidden');
    document.getElementById('categoryGroup').classList.add('hidden');
    document.getElementById('installmentTypeGroup').classList.add('hidden');
    
    // Hide success message after 3 seconds
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 3000);
    
    // Log to console for debugging
    console.log('Property added:', formData);
    console.log('All properties:', properties);
});

// Format number with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Add input formatting for price fields
document.getElementById('totalPrice').addEventListener('input', function(e) {
    let value = e.target.value.replace(/,/g, '');
    if (value) {
        e.target.value = value;
    }
});

document.getElementById('downPayment').addEventListener('input', function(e) {
    let value = e.target.value.replace(/,/g, '');
    if (value) {
        e.target.value = value;
    }
});

// Add real-time validation
document.getElementById('downPayment').addEventListener('blur', function() {
    const totalPrice = parseFloat(document.getElementById('totalPrice').value) || 0;
    const downPayment = parseFloat(this.value) || 0;
    
    if (downPayment > totalPrice) {
        alert('الدفعة المقدمة لا يمكن أن تكون أكبر من السعر الإجمالي');
        this.value = '';
    }
});

// Console log on page load for debugging
console.log('Admin Panel Loaded');
console.log('Stored Properties:', JSON.parse(localStorage.getItem('lavidaProperties') || '[]'));
