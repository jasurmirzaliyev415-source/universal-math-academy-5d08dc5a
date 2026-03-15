import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock, PlayCircle } from "lucide-react";
import { getCourseBySlug } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LessonPage() {
  const { slug, lessonId } = useParams<{ slug: string; lessonId: string }>();
  const course = getCourseBySlug(slug || "");
  const [showSolution, setShowSolution] = useState(false);

  if (!course) {
    return <div className="container py-20 text-center"><h1 className="font-display text-2xl font-bold">Kurs topilmadi</h1></div>;
  }

  const lessonIndex = course.lessons.findIndex(l => l.id === lessonId);
  const lesson = course.lessons[lessonIndex];
  const prevLesson = lessonIndex > 0 ? course.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < course.lessons.length - 1 ? course.lessons[lessonIndex + 1] : null;

  if (!lesson) {
    return <div className="container py-20 text-center"><h1 className="font-display text-2xl font-bold">Dars topilmadi</h1></div>;
  }

  const progress = Math.round(((lessonIndex + 1) / course.lessons.length) * 100);

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <div className="border-b border-border bg-card">
        <div className="container flex items-center justify-between py-3">
          <Link to={`/kurs/${course.slug}`} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" /> {course.title}
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-3.5 w-3.5" /> {lesson.duration}
            <span className="text-xs">· {lessonIndex + 1}/{course.lessons.length}</span>
          </div>
        </div>
        {/* Progress bar */}
        <div className="h-1 bg-muted">
          <div className="h-full bg-primary transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="container py-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6">
            <span className="mb-2 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              {lesson.type === 'theory' ? '📖 Nazariya' : lesson.type === 'practice' ? '✏️ Amaliyot' : lesson.type === 'test' ? '📝 Test' : '🏆 Yakuniy imtihon'}
            </span>
            <h1 className="font-display text-2xl font-bold md:text-3xl">{lesson.title}</h1>
            <p className="mt-2 text-muted-foreground">{lesson.description}</p>
          </div>

          {/* Lesson content */}
          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            {lesson.type === 'theory' && (
              <div className="prose max-w-none">
                <h2 className="font-display text-xl font-semibold mb-4">Asosiy tushunchalar</h2>
                <p className="text-muted-foreground mb-4">
                  Bu darsda <strong>{lesson.description.split(" bo'yicha")[0]}</strong> mavzusini o'rganamiz.
                  Quyida asosiy nazariy ma'lumotlar, formulalar va misollar keltirilgan.
                </p>

                <div className="math-formula my-4 text-center">
                  {course.id === 'algebra' && "ax² + bx + c = 0  →  x = (-b ± √(b²-4ac)) / 2a"}
                  {course.id === 'geometry' && "S = πr² ,  P = 2πr"}
                  {course.id === 'calculus' && "f'(x) = lim[Δx→0] (f(x+Δx) - f(x)) / Δx"}
                  {course.id === 'trigonometry' && "sin²α + cos²α = 1"}
                  {!['algebra', 'geometry', 'calculus', 'trigonometry'].includes(course.id) && "a + b = c"}
                </div>

                <h3 className="font-display text-lg font-semibold mt-6 mb-3">Misol</h3>
                <div className="rounded-lg bg-muted p-4 text-sm">
                  <p className="font-medium mb-2">Masala:</p>
                  <p className="text-muted-foreground mb-3">Berilgan ma'lumotlar asosida yechimni toping.</p>
                  <Button size="sm" variant="outline" onClick={() => setShowSolution(!showSolution)}>
                    {showSolution ? "Yechimni yashirish" : "Yechimni ko'rish"}
                  </Button>
                  {showSolution && (
                    <div className="mt-3 rounded-lg bg-background p-3 border border-border">
                      <p className="text-sm font-medium text-primary">Qadam-baqadam yechim:</p>
                      <ol className="mt-2 space-y-1 text-sm text-muted-foreground list-decimal list-inside">
                        <li>Berilgan ma'lumotlarni aniqlang</li>
                        <li>Formulani qo'llang</li>
                        <li>Hisoblash jarayonini bajaring</li>
                        <li>Javobni tekshiring ✓</li>
                      </ol>
                    </div>
                  )}
                </div>
              </div>
            )}

            {lesson.type === 'practice' && (
              <div>
                <h2 className="font-display text-xl font-semibold mb-4">Amaliy mashqlar</h2>
                <p className="text-muted-foreground mb-6">Quyidagi masalalarni mustaqil yeching:</p>
                {[1, 2, 3].map(n => (
                  <div key={n} className="mb-4 rounded-lg border border-border p-4">
                    <p className="font-medium text-sm">Masala {n}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {lesson.description.split(" bo'yicha")[0]} mavzusidan {n}-mashq
                    </p>
                    <div className="mt-3 flex gap-2">
                      <input
                        type="text"
                        placeholder="Javobingiz..."
                        className="rounded-lg border border-input bg-background px-3 py-1.5 text-sm flex-1"
                      />
                      <Button size="sm">Tekshirish</Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {lesson.type === 'test' && (
              <div>
                <h2 className="font-display text-xl font-semibold mb-4">Bilimni tekshirish</h2>
                {[1, 2, 3, 4, 5].map(n => (
                  <div key={n} className="mb-4 rounded-lg border border-border p-4">
                    <p className="font-medium text-sm">{n}. {lesson.description.split(" bo'yicha")[0]} — savol {n}</p>
                    <div className="mt-2 space-y-1.5">
                      {['A', 'B', 'C', 'D'].map(opt => (
                        <label key={opt} className="flex items-center gap-2 rounded-lg p-2 text-sm hover:bg-muted cursor-pointer transition-colors">
                          <input type="radio" name={`q${n}`} className="text-primary" />
                          <span className="text-muted-foreground">{opt}) Variant {opt.toLowerCase()}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                <Button className="w-full">Javoblarni tekshirish</Button>
              </div>
            )}

            {lesson.type === 'exam' && (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🏆</div>
                <h2 className="font-display text-xl font-bold">Yakuniy imtihon</h2>
                <p className="mt-2 text-muted-foreground">Bu imtihon {course.title} kursining yakuniy baholash imtihoni.</p>
                <p className="mt-1 text-sm text-muted-foreground">Vaqt: 60 daqiqa · 20 ta savol</p>
                <Button size="lg" className="mt-6">Imtihonni boshlash</Button>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-between">
            {prevLesson ? (
              <Button variant="outline" asChild>
                <Link to={`/kurs/${course.slug}/${prevLesson.id}`}>
                  <ArrowLeft className="mr-1.5 h-4 w-4" /> Oldingi
                </Link>
              </Button>
            ) : <div />}
            {nextLesson ? (
              <Button asChild>
                <Link to={`/kurs/${course.slug}/${nextLesson.id}`}>
                  Keyingi <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <Button asChild>
                <Link to={`/kurs/${course.slug}`}>
                  <CheckCircle2 className="mr-1.5 h-4 w-4" /> Tugatish
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
