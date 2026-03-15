export interface Formula {
  id: string;
  category: string;
  name: string;
  formula: string;
  description: string;
}

export const formulas: Formula[] = [
  // Algebra
  { id: 'f1', category: 'Algebra', name: "Kvadrat tenglama", formula: "x = (-b ± √(b²-4ac)) / 2a", description: "ax² + bx + c = 0 tenglamaning ildizlari" },
  { id: 'f2', category: 'Algebra', name: "Qisqa ko'paytirish", formula: "(a+b)² = a² + 2ab + b²", description: "Yig'indining kvadrati" },
  { id: 'f3', category: 'Algebra', name: "Ayirmaning kvadrati", formula: "(a-b)² = a² - 2ab + b²", description: "Ayirmaning kvadrati formulasi" },
  { id: 'f4', category: 'Algebra', name: "Kvadratlar ayirmasi", formula: "a² - b² = (a+b)(a-b)", description: "Ikki sonning kvadratlari ayirmasi" },
  { id: 'f5', category: 'Algebra', name: "Kublar yig'indisi", formula: "a³+b³ = (a+b)(a²-ab+b²)", description: "Ikki sonning kublari yig'indisi" },
  // Geometriya
  { id: 'f6', category: 'Geometriya', name: "Doira yuzi", formula: "S = πr²", description: "Radiusi r bo'lgan doira yuzi" },
  { id: 'f7', category: 'Geometriya', name: "Uchburchak yuzi", formula: "S = ½ × a × h", description: "Asosi a, balandligi h bo'lgan uchburchak yuzi" },
  { id: 'f8', category: 'Geometriya', name: "Pifagor teoremasi", formula: "a² + b² = c²", description: "To'g'ri burchakli uchburchakda gipotenuzaning kvadrati" },
  { id: 'f9', category: 'Geometriya', name: "Shar hajmi", formula: "V = (4/3)πr³", description: "Radiusi r bo'lgan shar hajmi" },
  // Trigonometriya
  { id: 'f10', category: 'Trigonometriya', name: "Asosiy ayniyat", formula: "sin²α + cos²α = 1", description: "Trigonometriyaning asosiy ayniyati" },
  { id: 'f11', category: 'Trigonometriya', name: "Yig'indi formulasi", formula: "sin(α+β) = sinα·cosβ + cosα·sinβ", description: "Sinusning yig'indi formulasi" },
  { id: 'f12', category: 'Trigonometriya', name: "Ikkilangan burchak", formula: "sin(2α) = 2·sinα·cosα", description: "Ikkilangan burchak sinusi" },
  // Calculus
  { id: 'f13', category: 'Matematik Analiz', name: "Hosila ta'rifi", formula: "f'(x) = lim[h→0] (f(x+h)-f(x))/h", description: "Funksiya hosilasining ta'rifi" },
  { id: 'f14', category: 'Matematik Analiz', name: "Daraja hosilasi", formula: "(xⁿ)' = n·xⁿ⁻¹", description: "Daraja funksiyasining hosilasi" },
  { id: 'f15', category: 'Matematik Analiz', name: "Integral", formula: "∫xⁿdx = xⁿ⁺¹/(n+1) + C", description: "Daraja funksiyasining integrali" },
  // Ehtimollik
  { id: 'f16', category: 'Ehtimollar', name: "Klassik ehtimollik", formula: "P(A) = m/n", description: "Qulay hodisalar soni / barcha hodisalar soni" },
  { id: 'f17', category: 'Ehtimollar', name: "Bayes formulasi", formula: "P(A|B) = P(B|A)·P(A) / P(B)", description: "Shartli ehtimollik formulasi" },
  // Statistika
  { id: 'f18', category: 'Statistika', name: "O'rta qiymat", formula: "x̄ = Σxᵢ / n", description: "Ma'lumotlarning o'rtacha qiymati" },
  { id: 'f19', category: 'Statistika', name: "Dispersiya", formula: "σ² = Σ(xᵢ - x̄)² / n", description: "Ma'lumotlarning tarqalish darajasi" },
];
