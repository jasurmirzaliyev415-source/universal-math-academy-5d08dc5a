import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Award, TrendingUp, Clock, Star, Target } from "lucide-react";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";

const recentActivity = [
  { course: "Algebra", lesson: "Kvadrat tenglamalar", progress: 75 },
  { course: "Geometriya", lesson: "Uchburchak yuzi", progress: 40 },
  { course: "Trigonometriya", lesson: "Sin va Cos", progress: 20 },
];

const achievements = [
  { icon: "🏅", title: "Birinchi dars", desc: "Birinchi darsni tugatdingiz" },
  { icon: "🔥", title: "3 kunlik streak", desc: "3 kun ketma-ket o'qidingiz" },
  { icon: "⭐", title: "Algebra ustasi", desc: "10 ta Algebra darsini tugatdingiz" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen py-10">
      <div className="container">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold">O'quv paneli</h1>
          <p className="mt-1 text-muted-foreground">Xush kelibsiz! O'quv jarayoningizni kuzating.</p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {[
            { icon: BookOpen, label: "Tugatilgan darslar", value: "24", color: "text-math-blue" },
            { icon: Clock, label: "O'qish vaqti", value: "12 soat", color: "text-math-teal" },
            { icon: Star, label: "Ballar", value: "1,250", color: "text-math-amber" },
            { icon: Target, label: "Daraja", value: "O'rta", color: "text-math-emerald" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-5"
            >
              <div className="flex items-center gap-3">
                <div className={`${s.color}`}><s.icon className="h-5 w-5" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="font-display text-xl font-bold">{s.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Current courses */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-xl font-semibold mb-4">Davom etayotgan kurslar</h2>
            <div className="space-y-3">
              {recentActivity.map((item, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-semibold">{item.course}</h3>
                    <span className="text-sm text-primary font-medium">{item.progress}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Oxirgi: {item.lesson}</p>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${item.progress}%` }} />
                  </div>
                  <Button size="sm" variant="outline" className="mt-3">Davom etish</Button>
                </div>
              ))}
            </div>

            {/* Recommended */}
            <h2 className="font-display text-xl font-semibold mb-4 mt-8">Tavsiya etilgan kurslar</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {courses.slice(0, 4).map(c => (
                <Link key={c.id} to={`/kurs/${c.slug}`} className="rounded-xl border border-border bg-card p-4 hover:shadow-card transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{c.icon}</span>
                    <h3 className="font-display font-semibold text-sm">{c.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground">{c.lessonsCount} dars · {c.duration}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="font-display text-xl font-semibold mb-4">Yutuqlar</h2>
            <div className="space-y-3">
              {achievements.map((a, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-4 flex items-center gap-3">
                  <div className="text-2xl">{a.icon}</div>
                  <div>
                    <h3 className="font-display text-sm font-semibold">{a.title}</h3>
                    <p className="text-xs text-muted-foreground">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-display text-xl font-semibold mb-4 mt-8">Kunlik masala</h2>
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-sm font-medium mb-2">📌 Bugungi masala</p>
              <p className="text-sm text-muted-foreground mb-3">
                Agar a² + b² = 25 va ab = 12 bo'lsa, (a + b)² ni toping.
              </p>
              <div className="flex gap-2">
                <input type="text" placeholder="Javob..." className="rounded-lg border border-input bg-background px-3 py-1.5 text-sm flex-1" />
                <Button size="sm">Yuborish</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
