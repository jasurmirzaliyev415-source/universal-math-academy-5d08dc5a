import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { useState } from "react";
import { courses, levels } from "@/data/courses";
import { Input } from "@/components/ui/input";

const colorMap: Record<string, string> = {
  'math-blue': 'bg-math-blue',
  'math-teal': 'bg-math-teal',
  'math-indigo': 'bg-math-indigo',
  'math-amber': 'bg-math-amber',
  'math-emerald': 'bg-math-emerald',
  'math-rose': 'bg-math-rose',
  'math-violet': 'bg-math-violet',
};

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState<string | null>(null);

  const filtered = courses.filter(c => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) || c.description.toLowerCase().includes(search.toLowerCase());
    const matchLevel = !levelFilter || c.level === levelFilter;
    return matchSearch && matchLevel;
  });

  return (
    <div className="min-h-screen py-10">
      <div className="container">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold md:text-4xl">Kurslar katalogi</h1>
          <p className="mt-2 text-muted-foreground">Barcha matematika kurslarini ko'rib chiqing</p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Kurs qidirish..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <button
              onClick={() => setLevelFilter(null)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                !levelFilter ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Barchasi
            </button>
            {levels.map(l => (
              <button
                key={l.id}
                onClick={() => setLevelFilter(l.id)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  levelFilter === l.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {l.icon} {l.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
            >
              <Link
                to={`/kurs/${course.slug}`}
                className="group block rounded-xl border border-border bg-card p-5 transition-all hover:shadow-card-hover hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg text-xl ${colorMap[course.color] || 'bg-primary'} text-primary-foreground`}>
                    {course.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold group-hover:text-primary transition-colors">{course.title}</h3>
                    <p className="text-xs text-muted-foreground">{course.lessonsCount} dars · {course.duration}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{course.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                    {levels.find(l => l.id === course.level)?.icon} {levels.find(l => l.id === course.level)?.name}
                  </span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary font-medium">
                    {course.topics.length} mavzu
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            <p className="text-lg">Kurs topilmadi</p>
            <p className="text-sm">Qidiruv so'zini o'zgartiring</p>
          </div>
        )}
      </div>
    </div>
  );
}
