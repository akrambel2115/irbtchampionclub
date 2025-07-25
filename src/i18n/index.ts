import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ar: {
    translation: {
      // Navigation
      'nav.home': 'الرئيسية',
      'nav.trainers': 'المدربين',
      'nav.specialties': 'التخصصات',
      'nav.gallery': 'المعرض',
      'nav.register': 'التسجيل',
      'nav.joinNow': 'انضم الآن',
      
      // Hero Section
      'hero.title1': 'أطلق العنان لـ',
      'hero.title2': 'المحارب بداخلك',
      'hero.description': 'اكتشف قدراتك — تدريب احترافي في الملاكمة، والفنون القتالية المختلطة، واللياقة البدنية بقيادة مدربين من النخبة.',
      'hero.stats.members': 'متدرب',
      'hero.stats.trainers': 'مدرب خبير',
      'hero.stats.experience': 'سنوات خبرة',
      'hero.cta': 'ابدأ رحلتك',
      
      // Trainers Section
      'trainers.title': 'تعرف على مدربينا',
      'trainers.description': 'تدرّب مع أبطال نافسوا على أعلى المستويات وحققوا التميز في تخصصاتهم.',
      'trainers.achievements': 'الإنجازات',
      'trainers.specialties': 'التخصصات',
      'trainers.experience': 'سنوات خبرة',
      
      // Trainer Data
      'trainer.name': 'أسامة طبيب',
      'trainer.title': 'مدرب رئيسي',
      'trainer.achievement1': 'أصغر مدرب معنرف في الجزائر',
      'trainer.achievement2': 'متحصل على رخصة رسمية كملاكم من الاتحادية الجزائرية للملاكمة',
      'trainer.achievement3': 'بطل تونس للملاكمة في فئة الهواة وزن 70كغ (2023)',
      'trainer.achievement4': 'المرتبة الأولى في استعراضات فنون القتال و الرمي ن.ع.4 (الجزائر)',
      'trainer.specialty1': 'الكيك بوكسينغ',
      'trainer.specialty2': 'كارديو و لياقة بدنية',
      'trainer.specialty3': 'الأيروبيك',

      'trainer2.name': 'تسنيم حمايدية',
      'trainer2.title': 'مدربة النساء',

      'trainer3.name': 'وائل دعاس',
      'trainer3.title': 'مساعد مدرب',
      
      // Specialties Section
      'specialties.title': 'تخصصات التدريب',
      'specialties.description': 'استكشف برامجنا الشاملة المصممة لجميع المستويات من الفنون القتالية واللياقة.',
      'specialties.forAll': 'للرجال والنساء',
      'specialties.schedule': 'جدولة الحصص',
      'specialties.scheduleDesc': 'نحن نقدم جدولة مرنة مع حصص صباحية وبعد الظهر والمساء لتناسب نمط حياتك.',
      'specialties.morning': 'الصباح',
      'specialties.afternoon': 'بعد الظهر',
      'specialties.evening': 'المساء',
      'specialties.whatYouLearn': 'ما ستتعلمه',
      'specialties.forAllDesc': 'جميع البرامج متاحة',
      'specialties.morningTime': 'سيتم تحديده لاحقا',
      'specialties.afternoonTime': 'سيتم تحديده لاحقا',
      'specialties.eveningTime': 'سيتم تحديده لاحقا',

      // Age groups
      'ageGroup.men.title': 'الرجال',
      'ageGroup.men.subtitle': 'برنامج الرجال',
      'ageGroup.men.description': 'برامج متقدمة لجميع الأعمار',
      'ageGroup.men.age': 'أكثر من 6 سنوات',

      'ageGroup.women.title': 'النساء',
      'ageGroup.women.subtitle': 'برنامج النساء',
      'ageGroup.women.description': 'برامج خاصة مصممة للنساء',
      'ageGroup.women.age': 'من 6 إلى 50 سنة',

      'ageGroup.youngKids.title': 'الأطفال الصغار',
      'ageGroup.youngKids.subtitle': 'برنامج الأطفال الصغار',
      'ageGroup.youngKids.description': 'أنشطة رياضية وذهنية تطويرية',
      'ageGroup.youngKids.age': 'من 3 سنوات و نصف إلى 5 سنوات',

      // Specialty Names and Descriptions
      'specialty.boxing.title': 'الملاكمة',
      'specialty.boxing.description': 'أتقن الملاكمة باحتراف من خلال التدريبات، وحركة القدمين، والتركيبات.',
      'specialty.boxing.feature1': 'التدريب التقني',
      'specialty.boxing.feature2': 'جلسات المبارزة',
      'specialty.boxing.feature3': 'إعداد المسابقات',
      'specialty.boxing.feature4': 'ملاكمة اللياقة',
      
      'specialty.kickboxing.title': 'الكيك بوكسينغ',
      'specialty.kickboxing.description': 'ادمج بين الركلات واللكمات لبناء القوة والرشاقة.',
      'specialty.kickboxing.feature1': 'تركيبات الضربات',
      'specialty.kickboxing.feature2': 'العمل على الوسائد',
      'specialty.kickboxing.feature3': 'التكييف',
      'specialty.kickboxing.feature4': 'الدفاع عن النفس',
      
      'specialty.muayThai.title': 'المواي تاي',
      'specialty.muayThai.description': 'تدرّب على فن الأطراف الثمانية — الكوع، الركبة، القبضات، والساقين.',
      'specialty.muayThai.feature1': 'عمل الإمساك',
      'specialty.muayThai.feature2': 'ضربات المرفق والركبة',
      'specialty.muayThai.feature3': 'التقنيات التقليدية',
      'specialty.muayThai.feature4': 'القوة العقلية',
      
      'specialty.gym.title': 'كمال الأجسام',
      'specialty.gym.description': 'طور قوتك البدنية، بناء العضلات، واللياقة العامة بأحدث المعدات.',
      'specialty.gym.feature1': 'تمارين الأوزان',
      'specialty.gym.feature2': 'تمارين المقاومة',
      'specialty.gym.feature3': 'برامج بناء العضلات',
      'specialty.gym.feature4': 'تدريب فردي أو جماعي',
      
      'specialty.mma.title': 'الفنون القتالية المختلطة',
      'specialty.mma.description': 'نظام قتالي شامل يجمع بين الضرب، المصارعة، والمواجهة الأرضية.',
      'specialty.mma.feature1': 'القتال واقفاً',
      'specialty.mma.feature2': 'دفاع الإسقاط',
      'specialty.mma.feature3': 'الضرب والسحق',
      'specialty.mma.feature4': 'عمل القفص',
      
      'specialty.fitness.title': 'البنية والكارديو',
      'specialty.fitness.description': 'زد من لياقتك العامة، القوة، والمرونة بتدريبات متكاملة.',
      'specialty.fitness.feature1': 'تدريب عالي الكثافة',
      'specialty.fitness.feature2': 'بناء القوة',
      'specialty.fitness.feature3': 'حرق الدهون',
      'specialty.fitness.feature4': 'عمل المرونة',

      
      // Gallery Section
      'gallery.title': 'معرضنا',
      'gallery.description': 'شاهد مساحات التدريب والمعدات والمجتمع لدينا.',
      'gallery.readyToJoin': 'هل أنت مستعد لانضمامنا؟',
      'gallery.experienceEnergy': 'عِش أجواء التدريب الحماسية والتفاني الحقيقي بنفسك.',
      'gallery.scheduleVisit': 'حجز زيارة',
      'gallery.view': 'عرض',
      
      // Contact Section
      // Registration Section
      'register.title': 'سجل الآن',
      'register.description': 'ابدأ رحلة التغيير الخاصة بك. املأ النموذج للانضمام إلى نادينا.',
      'register.firstName': 'الاسم الأول',
      'register.lastName': 'اسم العائلة',
      'register.placeOfBirth': 'مكان الميلاد',
      'register.phoneNumber': 'رقم الهاتف',
      'register.address': 'العنوان الكامل',
      'register.emergencyContact': 'جهة الاتصال في حالة الطوارئ',
      'register.specialty': 'التخصص المفضل',
      'register.experience': 'مستوى الخبرة',
      'register.goals': 'ما هي أهدافك في اللياقة (اختياري)',
      'register.submit': 'أرسل الآن',
      'register.success': 'تم التسجيل بنجاح!',
      'register.successDescription': 'شكرا لتسجيلك. سيتصل بك فريقنا قريبا.',
      'register.error': 'فشل التسجيل. يرجى المحاولة مرة أخرى.',
      'register.form.title': 'انضم الينا',
      'register.dateOfBirth': 'تاريخ الميلاد',
      'register.gender': 'الجنس',
      'register.bloodType': 'فصيلة الدم',
      
      // Form placeholders
      'placeholder.experience': 'أدخل مستوى الخبرة',
      'placeholder.firstName': 'أدخل اسمك الأول',
      'placeholder.lastName': 'أدخل اسم العائلة',
      'placeholder.placeOfBirth': 'أدخل البلدية',
      'placeholder.phoneNumber': 'أدخل رقم هاتفك',
      'placeholder.address': 'الحي، البلدية، الولاية',
      'placeholder.emergencyContact': 'رقم جهة اتصال الطوارئ',
      'placeholder.goals': 'شاركنا أهدافك في اللياقة أو ما تطمح لتحقيقه...',
      'placeholder.gender': 'أختر جنسك',
      'placeholder.bloodType': 'أختر فصيلة الدم',
      'placeholder.specialty': 'أختر التخصص المفضل',
      
      // Footer
      'footer.description': 'نادي النخبة للقتال يقدم تدريبًا احترافيًا في الفنون القتالية واللياقة. انضم إلى مجتمع من المحاربين.',
      'footer.quickLinks': 'روابط سريعة',
      'footer.trainingPrograms': 'برامج التدريب',
      'footer.trainingHours': 'ساعات التدريب',
      'footer.followUs': 'تابعنا',
      'footer.newsletter': 'ابق على اطلاع بآخر أخبارنا',
      'footer.newsletterDesc': 'كن أول من يعرف أخبار الحصص الجديدة والعروض الحصرية.',
      'footer.emailPlaceholder': 'أدخل بريدك الإلكتروني',
      'footer.subscribe': 'اشترك',
      'footer.copyright': 'جميع الحقوق محفوظة.',
      'footer.madeWith': 'صنع بـ',
      'footer.by': 'بواسطة',
      'footer.privacyPolicy': 'سياسة الخصوصية',
      'footer.terms': 'شروط الخدمة',
      
      // Days
      'monday': 'الاثنين',
      'tuesday': 'الثلاثاء',
      'wednesday': 'الأربعاء',
      'thursday': 'الخميس',
      'friday': 'الجمعة',
      'saturday': 'السبت',
      'sunday': 'الأحد',
      
      // Gender options
      'gender.male': 'ذكر',
      'gender.female': 'أنثى',
      
      // Experience levels
      'experience.beginner': 'مبتدئ تماماً',
      'experience.some': 'بعض الخبرة (1-2 سنوات)',
      'experience.intermediate': 'متوسط (3-5 سنوات)',
      'experience.advanced': 'متقدم (5+ سنوات)',
      'experience.professional': 'محترف/تنافسي',
    }
  },
   en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.trainers': 'Trainers',
      'nav.specialties': 'Specialties',
      'nav.gallery': 'Gallery',
      'nav.register': 'Register',
      'nav.joinNow': 'Join Now',

      // Hero Section
      'hero.title1': 'Unleash',
      'hero.title2': 'The Warrior Within',
      'hero.description': 'Discover your capabilities — professional training in boxing, mixed martial arts, and fitness led by elite coaches.',
      'hero.stats.members': 'Trainee',
      'hero.stats.trainers': 'Expert Trainer',
      'hero.stats.experience': 'Years of Experience',
      'hero.cta': 'Start Your Journey',

      // Trainers Section
      'trainers.title': 'Meet Our Trainers',
      'trainers.description': 'Train with champions who competed at the highest levels and achieved excellence in their specialties.',
      'trainers.achievements': 'Achievements',
      'trainers.specialties': 'Specialties',
      'trainers.experience': 'Years Experience',

      // Trainer Data
      'trainer.name': 'Oussama Tabib',
      'trainer.title': 'Head Trainer',
      'trainer.achievement1': 'Youngest recognized trainer in Algeria',
      'trainer.achievement2': 'Obtained an official license as a boxer from the Algerian Boxing Federation',
      'trainer.achievement3': 'Tunisian Boxing Champion in the amateur category, 70kg (2023)',
      'trainer.achievement4': 'First place in martial arts and throwing demonstrations N.A.4 (Algeria)',
      'trainer.specialty1': 'Kickboxing',
      'trainer.specialty2': 'Cardio & Fitness',
      'trainer.specialty3': 'Aerobics',

      // Trainer Data
      'trainer2.name': 'Tasnim Hamaydia',
      'trainer2.title': 'Women\'s Trainer',

      'trainer3.name': 'Wael Daas',
      'trainer3.title': 'Assistant Coach',

      // Specialties Section
      'specialties.title': 'Training Specialties',
      'specialties.description': 'Explore our comprehensive programs designed for all levels of martial arts and fitness.',
      'specialties.forAll': 'For Men & Women',
      'specialties.schedule': 'CLASS SCHEDULE',
      'specialties.scheduleDesc': 'We offer flexible scheduling with morning, afternoon, and evening classes to fit your lifestyle.',
      'specialties.morning': 'MORNING',
      'specialties.afternoon': 'AFTERNOON',
      'specialties.evening': 'EVENING',
      'specialties.whatYouLearn': 'What You\'ll Learn',
      'specialties.forAllDesc': 'All Programs Available',
      'specialties.morningTime': 'To be determined',
      'specialties.afternoonTime': 'To be determined',
      'specialties.eveningTime': 'To be determined',

      // Age groups
      'ageGroup.men.title': 'Men',
      'ageGroup.men.subtitle': 'Men\'s Program',
      'ageGroup.men.description': 'Advanced programs for all ages',
      'ageGroup.men.age': '6+ years',

      'ageGroup.women.title': 'Women',
      'ageGroup.women.subtitle': 'Women\'s Program',
      'ageGroup.women.description': 'Special programs designed for women',
      'ageGroup.women.age': '6 to 50 years',

      'ageGroup.youngKids.title': 'Young Kids',
      'ageGroup.youngKids.subtitle': 'Young Kids Program',
      'ageGroup.youngKids.description': 'Developmental sports and mental activities',
      'ageGroup.youngKids.age': 'From 3.5 to 5 years',

      // Specialty Names and Descriptions
      'specialty.boxing.title': 'Boxing',
      'specialty.boxing.description': 'Master boxing through pro techniques, footwork, and intense combinations.',
      'specialty.boxing.feature1': 'Technical Training',
      'specialty.boxing.feature2': 'Sparring Sessions',
      'specialty.boxing.feature3': 'Competition Prep',
      'specialty.boxing.feature4': 'Fitness Boxing',

      'specialty.kickboxing.title': 'Kickboxing',
      'specialty.kickboxing.description': 'Blend punches and kicks to develop power, speed, and coordination.',
      'specialty.kickboxing.feature1': 'Strike Combinations',
      'specialty.kickboxing.feature2': 'Pad Work',
      'specialty.kickboxing.feature3': 'Conditioning',
      'specialty.kickboxing.feature4': 'Self Defense',

      'specialty.muayThai.title': 'Muay Thai',
      'specialty.muayThai.description': 'Train the art of 8 limbs using fists, elbows, knees, and shins.',
      'specialty.muayThai.feature1': 'Clinch Work',
      'specialty.muayThai.feature2': 'Elbow & Knee Strikes',
      'specialty.muayThai.feature3': 'Traditional Techniques',
      'specialty.muayThai.feature4': 'Mental Toughness',

      'specialty.gym.title': 'gym',
      'specialty.gym.description': 'Build ground control, submissions, and takedown efficiency.',
      'specialty.gym.feature1': 'Takedowns',
      'specialty.gym.feature2': 'Ground Control',
      'specialty.gym.feature3': 'Submission Holds',
      'specialty.gym.feature4': 'Escape Techniques',

      'specialty.mma.title': 'MMA',
      'specialty.mma.description': 'Train the full spectrum of combat: striking, wrestling, and ground control.',
      'specialty.mma.feature1': 'Stand-up Fighting',
      'specialty.mma.feature2': 'Takedown Defense',
      'specialty.mma.feature3': 'Ground & Pound',
      'specialty.mma.feature4': 'Cage Work',

      'specialty.fitness.title': 'Physique & Cardio',
      'specialty.fitness.description': 'Enhance strength, endurance, and flexibility with full-body fitness.',
      'specialty.fitness.feature1': 'HIIT Training',
      'specialty.fitness.feature2': 'Strength Building',
      'specialty.fitness.feature3': 'Fat Burning',
      'specialty.fitness.feature4': 'Flexibility Work',

      // Gallery Section
      'gallery.title': 'Our Gallery',
      'gallery.description': 'Check out our training spaces, equipment, and community.',
      'gallery.readyToJoin': 'Ready to join us?',
      'gallery.experienceEnergy': 'Feel the passion and intensity of our training environment.',
      'gallery.scheduleVisit': 'SCHEDULE A VISIT',
      'gallery.view': 'View',

      // Registration Section
      'register.title': 'JOIN IRBT Champion CLUB',
      'register.description': 'Take your first step to transformation. Fill the form and join the club.',
      'register.firstName': 'First Name',
      'register.lastName': 'Last Name',
      'register.placeOfBirth': 'Place of Birth',
      'register.phoneNumber': 'Phone Number',
      'register.address': 'Full Address',
      'register.emergencyContact': 'Emergency Contact',
      'register.specialty': 'Preferred Specialty',
      'register.experience': 'Experience Level',
      'register.goals': 'What are your fitness goals? (Optional)',
      'register.submit': 'REGISTER NOW',
      'register.success': 'Registration Successful!',
      'register.successDescription': 'Thank you for registering. Our team will contact you soon.',
      'register.error': 'Registration failed. Please try again.',
      'register.form.title': 'Join Us',
      'register.dateOfBirth': 'Date of Birth',
      'register.gender': 'Gender',
      'register.bloodType': 'Blood Type',

      // Form placeholders
      'placeholder.experience': 'Enter your experience level',
      'placeholder.firstName': 'Enter your first name',
      'placeholder.lastName': 'Enter your last name',
      'placeholder.placeOfBirth': 'Enter your municipality',
      'placeholder.phoneNumber': 'Enter your phone number',
      'placeholder.address': 'Neighborhood, Municipality, State',
      'placeholder.emergencyContact': 'Emergency contact number',
      'placeholder.goals': 'Tell us your goals or what you hope to achieve...',
      'placeholder.gender': 'Select your gender',
      'placeholder.bloodType': 'Select your blood type',
      'placeholder.specialty': 'Select your preferred specialty',

      // Footer
      'footer.description': 'IRBT Champion Club offers professional training in martial arts and fitness. Join a passionate community of fighters.',
      'footer.quickLinks': 'Quick Links',
      'footer.trainingPrograms': 'Training Programs',
      'footer.trainingHours': 'Training Hours',
      'footer.followUs': 'Follow Us',
      'footer.newsletter': 'STAY UPDATED WITH OUR LATEST NEWS',
      'footer.newsletterDesc': 'Get first-hand updates on new classes, events, and exclusive offers.',
      'footer.emailPlaceholder': 'Enter your email',
      'footer.subscribe': 'SUBSCRIBE',
      'footer.copyright': 'All rights reserved.',
      'footer.madeWith': 'Made with',
      'footer.by': 'by',
      'footer.privacyPolicy': 'Privacy Policy',
      'footer.terms': 'Terms of Service',

      // Days
      'monday': 'Monday',
      'tuesday': 'Tuesday',
      'wednesday': 'Wednesday',
      'thursday': 'Thursday',
      'friday': 'Friday',
      'saturday': 'Saturday',
      'sunday': 'Sunday',

      // Gender options
      'gender.male': 'Male',
      'gender.female': 'Female',
      'gender.other': 'Other',
      'gender.preferNotToSay': 'Prefer not to say',

      // Experience levels
      'experience.beginner': 'Complete Beginner',
      'experience.some': 'Some Experience (1-2 years)',
      'experience.intermediate': 'Intermediate (3-5 years)',
      'experience.advanced': 'Advanced (5+ years)',
      'experience.professional': 'Professional/Competitive',
    }
  }
};
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;