export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: 'theory' | 'practice' | 'test' | 'exam';
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  level: string;
  lessonsCount: number;
  duration: string;
  topics: string[];
  lessons: Lesson[];
}

export const levels = [
  { id: 'beginner', name: "Boshlang'ich", description: "Asosiy tushunchalar va amallar", icon: "🌱" },
  { id: 'intermediate', name: "O'rta daraja", description: "Chuqurroq tushunchalar", icon: "📘" },
  { id: 'advanced', name: "Yuqori daraja", description: "Murakkab mavzular", icon: "🚀" },
  { id: 'university', name: "Universitet", description: "Akademik daraja", icon: "🎓" },
  { id: 'olympiad', name: "Olimpiada", description: "Musobaqa darajasi", icon: "🏆" },
];

function generateLessons(subject: string, count: number, topics: string[]): Lesson[] {
  const lessons: Lesson[] = [];
  for (let i = 1; i <= count; i++) {
    const topicIndex = (i - 1) % topics.length;
    const typeRotation: Lesson['type'][] = ['theory', 'theory', 'practice', 'theory', 'practice', 'test'];
    const type = i === count ? 'exam' : typeRotation[(i - 1) % typeRotation.length];
    lessons.push({
      id: `${subject}-lesson-${i}`,
      title: `${i}-dars: ${topics[topicIndex]} ${type === 'practice' ? '(Amaliyot)' : type === 'test' ? '(Test)' : type === 'exam' ? '(Yakuniy imtihon)' : ''}`,
      description: `${topics[topicIndex]} bo'yicha ${type === 'theory' ? 'nazariy dars' : type === 'practice' ? 'amaliy mashqlar' : type === 'test' ? 'bilimni tekshirish' : 'yakuniy imtihon'}`,
      duration: type === 'exam' ? '60 min' : type === 'test' ? '30 min' : '20 min',
      type,
    });
  }
  return lessons;
}

export const courses: Course[] = [
  {
    id: 'arithmetic',
    slug: 'arifmetika',
    title: 'Arifmetika',
    description: "Sonlar, amallar, kasr va o'nli kasrlar bilan ishlash asoslari",
    icon: '🔢',
    color: 'math-blue',
    level: 'beginner',
    lessonsCount: 60,
    duration: '20 soat',
    topics: ["Natural sonlar", "Qo'shish va ayirish", "Ko'paytirish va bo'lish", "Kasrlar", "O'nli kasrlar", "Foizlar", "Nisbat va proporsiya", "Butun sonlar", "Amallar tartibi", "Sonlarni yaxlitlash"],
    lessons: generateLessons('arithmetic', 60, ["Natural sonlar", "Qo'shish va ayirish", "Ko'paytirish va bo'lish", "Kasrlar", "O'nli kasrlar", "Foizlar", "Nisbat va proporsiya", "Butun sonlar", "Amallar tartibi", "Sonlarni yaxlitlash"]),
  },
  {
    id: 'algebra',
    slug: 'algebra',
    title: 'Algebra',
    description: "O'zgaruvchilar, tenglamalar, tengsizliklar va funksiyalar",
    icon: '📐',
    color: 'math-teal',
    level: 'intermediate',
    lessonsCount: 100,
    duration: '35 soat',
    topics: ["O'zgaruvchilar va ifodalar", "Chiziqli tenglamalar", "Tengsizliklar", "Kvadrat tenglamalar", "Funksiyalar", "Ko'phadlar", "Logarifmlar", "Ketma-ketliklar", "Matritsalar", "Kompleks sonlar"],
    lessons: generateLessons('algebra', 100, ["O'zgaruvchilar va ifodalar", "Chiziqli tenglamalar", "Tengsizliklar", "Kvadrat tenglamalar", "Funksiyalar", "Ko'phadlar", "Logarifmlar", "Ketma-ketliklar", "Matritsalar", "Kompleks sonlar"]),
  },
  {
    id: 'geometry',
    slug: 'geometriya',
    title: 'Geometriya',
    description: "Shakllar, hajmlar, burchaklar va fazoviy geometriya",
    icon: '📏',
    color: 'math-indigo',
    level: 'intermediate',
    lessonsCount: 100,
    duration: '35 soat',
    topics: ["Nuqta va to'g'ri chiziq", "Burchaklar", "Uchburchak", "To'rtburchak", "Aylana va doira", "Yuza va perimetr", "Fazoviy shakllar", "Hajm", "Simmetriya", "Koordinata geometriya"],
    lessons: generateLessons('geometry', 100, ["Nuqta va to'g'ri chiziq", "Burchaklar", "Uchburchak", "To'rtburchak", "Aylana va doira", "Yuza va perimetr", "Fazoviy shakllar", "Hajm", "Simmetriya", "Koordinata geometriya"]),
  },
  {
    id: 'trigonometry',
    slug: 'trigonometriya',
    title: 'Trigonometriya',
    description: "Trigonometrik funksiyalar, tenglamalar va ayniyatlar",
    icon: '📊',
    color: 'math-amber',
    level: 'advanced',
    lessonsCount: 60,
    duration: '22 soat',
    topics: ["Sin, Cos, Tan", "Trigonometrik ayniyatlar", "Teskari funksiyalar", "Trigonometrik tenglamalar", "Uchburchak yechimlari", "Trigonometrik grafiklar"],
    lessons: generateLessons('trigonometry', 60, ["Sin, Cos, Tan", "Trigonometrik ayniyatlar", "Teskari funksiyalar", "Trigonometrik tenglamalar", "Uchburchak yechimlari", "Trigonometrik grafiklar"]),
  },
  {
    id: 'calculus',
    slug: 'matematik-analiz',
    title: 'Matematik Analiz',
    description: "Limitlar, hosilalar, integrallar va differensial tenglamalar",
    icon: '∫',
    color: 'math-emerald',
    level: 'university',
    lessonsCount: 80,
    duration: '30 soat',
    topics: ["Limitlar", "Uzluksizlik", "Hosilalar", "Hosila qoidalari", "Integral", "Aniq integral", "Qator", "Taylor qatori", "Differensial tenglamalar", "Ko'p o'zgaruvchili funksiyalar"],
    lessons: generateLessons('calculus', 80, ["Limitlar", "Uzluksizlik", "Hosilalar", "Hosila qoidalari", "Integral", "Aniq integral", "Qator", "Taylor qatori", "Differensial tenglamalar", "Ko'p o'zgaruvchili funksiyalar"]),
  },
  {
    id: 'linear-algebra',
    slug: 'chiziqli-algebra',
    title: 'Chiziqli Algebra',
    description: "Vektorlar, matritsalar, vektor fazolar",
    icon: '🧮',
    color: 'math-violet',
    level: 'university',
    lessonsCount: 50,
    duration: '18 soat',
    topics: ["Vektorlar", "Matritsalar", "Determinantlar", "Chiziqli tenglamalar sistemasi", "Vektor fazolar", "Xos qiymatlar"],
    lessons: generateLessons('linear-algebra', 50, ["Vektorlar", "Matritsalar", "Determinantlar", "Chiziqli tenglamalar sistemasi", "Vektor fazolar", "Xos qiymatlar"]),
  },
  {
    id: 'discrete-math',
    slug: 'diskret-matematika',
    title: 'Diskret Matematika',
    description: "Graflar, kombinatorika, mantiq va algoritmlar",
    icon: '🔗',
    color: 'math-rose',
    level: 'university',
    lessonsCount: 50,
    duration: '18 soat',
    topics: ["Mantiq asoslari", "To'plamlar nazariyasi", "Kombinatorika", "Graflar nazariyasi", "Daraxtlar", "Algoritmlar"],
    lessons: generateLessons('discrete-math', 50, ["Mantiq asoslari", "To'plamlar nazariyasi", "Kombinatorika", "Graflar nazariyasi", "Daraxtlar", "Algoritmlar"]),
  },
  {
    id: 'probability',
    slug: 'ehtimollar-nazariyasi',
    title: 'Ehtimollar Nazariyasi',
    description: "Ehtimollik, tasodifiy hodisalar va taqsimotlar",
    icon: '🎲',
    color: 'math-amber',
    level: 'advanced',
    lessonsCount: 40,
    duration: '15 soat',
    topics: ["Ehtimollik asoslari", "Shartli ehtimollik", "Bayes teoremasi", "Tasodifiy o'zgaruvchilar", "Taqsimotlar", "Katta sonlar qonuni"],
    lessons: generateLessons('probability', 40, ["Ehtimollik asoslari", "Shartli ehtimollik", "Bayes teoremasi", "Tasodifiy o'zgaruvchilar", "Taqsimotlar", "Katta sonlar qonuni"]),
  },
  {
    id: 'statistics',
    slug: 'statistika',
    title: 'Statistika',
    description: "Ma'lumotlarni tahlil qilish, regressiya va gipotezalarni tekshirish",
    icon: '📈',
    color: 'math-teal',
    level: 'advanced',
    lessonsCount: 50,
    duration: '18 soat',
    topics: ["Markaziy tendensiya", "Dispersiya", "Normal taqsimot", "Korrelyatsiya", "Regressiya", "Gipotezalarni tekshirish"],
    lessons: generateLessons('statistics', 50, ["Markaziy tendensiya", "Dispersiya", "Normal taqsimot", "Korrelyatsiya", "Regressiya", "Gipotezalarni tekshirish"]),
  },
  {
    id: 'number-theory',
    slug: 'sonlar-nazariyasi',
    title: 'Sonlar Nazariyasi',
    description: "Tub sonlar, bo'linish, modular arifmetika",
    icon: '🔬',
    color: 'math-indigo',
    level: 'olympiad',
    lessonsCount: 30,
    duration: '12 soat',
    topics: ["Tub sonlar", "Bo'linish", "EKUB va EKUK", "Modular arifmetika", "Diofant tenglamalari"],
    lessons: generateLessons('number-theory', 30, ["Tub sonlar", "Bo'linish", "EKUB va EKUK", "Modular arifmetika", "Diofant tenglamalari"]),
  },
  {
    id: 'combinatorics',
    slug: 'kombinatorika',
    title: 'Kombinatorika',
    description: "Sanash usullari, permutatsiyalar va kombinatsiyalar",
    icon: '🧩',
    color: 'math-emerald',
    level: 'olympiad',
    lessonsCount: 30,
    duration: '12 soat',
    topics: ["Sanash asoslari", "Permutatsiyalar", "Kombinatsiyalar", "Binomial teorema", "Inklyuziya-eksklyuziya"],
    lessons: generateLessons('combinatorics', 30, ["Sanash asoslari", "Permutatsiyalar", "Kombinatsiyalar", "Binomial teorema", "Inklyuziya-eksklyuziya"]),
  },
  {
    id: 'math-logic',
    slug: 'matematik-mantiq',
    title: 'Matematik Mantiq',
    description: "Mantiqiy mulohaza, isbotlash usullari",
    icon: '🧠',
    color: 'math-blue',
    level: 'olympiad',
    lessonsCount: 30,
    duration: '12 soat',
    topics: ["Mantiqiy operatsiyalar", "Predikatlar", "Isbotlash usullari", "Matematik induksiya", "Ziddiyat usuli"],
    lessons: generateLessons('math-logic', 30, ["Mantiqiy operatsiyalar", "Predikatlar", "Isbotlash usullari", "Matematik induksiya", "Ziddiyat usuli"]),
  },
];

export const totalLessons = courses.reduce((sum, c) => sum + c.lessonsCount, 0);

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(c => c.slug === slug);
}

export function getLessonById(courseSlug: string, lessonId: string): { course: Course; lesson: Lesson } | undefined {
  const course = getCourseBySlug(courseSlug);
  if (!course) return undefined;
  const lesson = course.lessons.find(l => l.id === lessonId);
  if (!lesson) return undefined;
  return { course, lesson };
}
