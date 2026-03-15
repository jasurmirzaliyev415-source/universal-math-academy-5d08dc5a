import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Award, BarChart3, Sparkles, TrendingUp, GraduationCap, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { courses, totalLessons, levels } from "@/data/courses";

const stats = [
  { label: "Darslar", value: `${totalLessons}+`, icon: BookOpen },
  { label: "Kurslar", value: `${courses.length}`, icon: GraduationCap },
  { label: "Darajalar", value: "5", icon: TrendingUp },
  { label: "Formulalar", value: "100+", icon: Calculator },
];

const features = [
  { icon: Sparkles, title: "Interaktiv darslar", desc: "Qadam-baqadam tushuntirishlar va animatsiyalar" },
  { icon: BarChart3, title: "Progressni kuzating", desc: "Har bir kursda o'z yutuqlaringizni ko'ring" },
  { icon: Award, title: "Sertifikatlar", desc: "Kursni yakunlab, sertifikat oling" },
  { icon: Users, title: "Barcha darajalar", desc: "Boshlang'ichdan olimpiada darajasigacha" },
];

const colorMap: Record<string, string> = {
  'math-blue': 'bg-math-blue',
  'math-teal': 'bg-math-teal',
  'math-indigo': 'bg-math-indigo',
  'math-amber': 'bg-math-amber',
  'math-emerald': 'bg-math-emerald',
  'math-rose': 'bg-math-rose',
  'math-violet': 'bg-math-violet',
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container relative py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              {totalLessons}+ dars · 12 fan · 5 daraja
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Matematikani{" "}
              <span className="text-gradient-hero">chuqur o'rganing</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Boshlang'ich arifmetikadan olimpiada darajasigacha — interaktiv darslar, 
              amaliy mashqlar va professional sertifikatlar bilan.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" asChild>
                <Link to="/kurslar">
                  Kurslarni ko'rish
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/yol-xaritasi">Yo'l xaritasi</Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4"
          >
            {stats.map((s, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-4 text-center shadow-card">
                <s.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                <div className="font-display text-2xl font-bold text-foreground">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-card py-16">
        <div className="container">
          <h2 className="text-center font-display text-3xl font-bold">Nima uchun biz?</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            Universal Math Academy — zamonaviy va professional matematika ta'lim platformasi
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-card-hover"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses preview */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold">Kurslar</h2>
              <p className="mt-2 text-muted-foreground">12 ta matematika fani bo'yicha kurslar</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/kurslar">Barchasi <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {courses.slice(0, 8).map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/kurs/${course.slug}`}
                  className="group block rounded-xl border border-border bg-card p-5 transition-all hover:shadow-card-hover hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-lg text-xl ${colorMap[course.color] || 'bg-primary'} text-primary-foreground`}>
                      {course.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold group-hover:text-primary transition-colors">{course.title}</h3>
                      <p className="text-xs text-muted-foreground">{course.lessonsCount} dars · {course.duration}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{course.description}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                      {levels.find(l => l.id === course.level)?.name}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="border-t border-border bg-card py-16">
        <div className="container">
          <h2 className="text-center font-display text-3xl font-bold">O'quv darajalari</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            Har bir daraja uchun maxsus kurslar va materiallar
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {levels.map((level, i) => (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border border-border bg-background p-5 text-center transition-shadow hover:shadow-card-hover"
              >
                <div className="text-3xl">{level.icon}</div>
                <h3 className="mt-3 font-display font-semibold">{level.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{level.description}</p>
                <p className="mt-2 text-xs font-medium text-primary">
                  {courses.filter(c => c.level === level.id).length} kurs
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <div className="rounded-2xl bg-gradient-hero p-10 text-center text-primary-foreground md:p-16">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Matematikani hoziroq o'rganishni boshlang!</h2>
            <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80">
              {totalLessons}+ dars, 12 fan, 5 daraja — barchasi bepul va interaktiv
            </p>
            <Button size="lg" variant="secondary" className="mt-8" asChild>
              <Link to="/kurslar">
                Boshlash <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
