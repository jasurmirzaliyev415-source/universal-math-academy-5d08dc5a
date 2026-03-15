import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Clock, CheckCircle2, PlayCircle, FileText, ClipboardCheck, Award } from "lucide-react";
import { getCourseBySlug, levels } from "@/data/courses";
import { Button } from "@/components/ui/button";

const typeIcons: Record<string, React.ElementType> = {
  theory: BookOpen,
  practice: PlayCircle,
  test: ClipboardCheck,
  exam: Award,
};

const typeLabels: Record<string, string> = {
  theory: "Nazariya",
  practice: "Amaliyot",
  test: "Test",
  exam: "Imtihon",
};

const colorMap: Record<string, string> = {
  'math-blue': 'bg-math-blue',
  'math-teal': 'bg-math-teal',
  'math-indigo': 'bg-math-indigo',
  'math-amber': 'bg-math-amber',
  'math-emerald': 'bg-math-emerald',
  'math-rose': 'bg-math-rose',
  'math-violet': 'bg-math-violet',
};

export default function CourseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourseBySlug(slug || "");

  if (!course) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-2xl font-bold">Kurs topilmadi</h1>
        <Button className="mt-4" asChild><Link to="/kurslar">Kurslarga qaytish</Link></Button>
      </div>
    );
  }

  const level = levels.find(l => l.id === course.level);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container py-8">
          <Link to="/kurslar" className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" /> Kurslarga qaytish
          </Link>
          <div className="flex items-start gap-4">
            <div className={`flex h-14 w-14 items-center justify-center rounded-xl text-2xl ${colorMap[course.color] || 'bg-primary'} text-primary-foreground`}>
              {course.icon}
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold">{course.title}</h1>
              <p className="mt-1 text-muted-foreground">{course.description}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><BookOpen className="h-4 w-4" /> {course.lessonsCount} dars</span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {course.duration}</span>
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs">{level?.icon} {level?.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Lessons list */}
          <div className="lg:col-span-2">
            <h2 className="mb-4 font-display text-xl font-semibold">Darslar ({course.lessons.length})</h2>
            <div className="space-y-2">
              {course.lessons.map((lesson, i) => {
                const Icon = typeIcons[lesson.type] || FileText;
                return (
                  <motion.div
                    key={lesson.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: Math.min(i * 0.02, 1) }}
                  >
                    <Link
                      to={`/kurs/${course.slug}/${lesson.id}`}
                      className="group flex items-center gap-3 rounded-lg border border-border bg-card p-3.5 transition-all hover:shadow-card hover:border-primary/20"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                          {lesson.title}
                        </p>
                        <p className="text-xs text-muted-foreground">{lesson.description}</p>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="rounded bg-muted px-2 py-0.5">{typeLabels[lesson.type]}</span>
                        <span>{lesson.duration}</span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-20 space-y-4">
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-display font-semibold">Kurs ma'lumotlari</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Darslar</dt>
                    <dd className="font-medium">{course.lessonsCount}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Davomiylik</dt>
                    <dd className="font-medium">{course.duration}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Daraja</dt>
                    <dd className="font-medium">{level?.name}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Mavzular</dt>
                    <dd className="font-medium">{course.topics.length}</dd>
                  </div>
                </dl>
                <Button className="mt-5 w-full" asChild>
                  <Link to={`/kurs/${course.slug}/${course.lessons[0]?.id}`}>
                    Kursni boshlash
                  </Link>
                </Button>
              </div>

              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-display font-semibold mb-3">Mavzular</h3>
                <div className="flex flex-wrap gap-1.5">
                  {course.topics.map(t => (
                    <span key={t} className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
