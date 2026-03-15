import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { courses, levels } from "@/data/courses";

const colorMap: Record<string, string> = {
  'math-blue': 'bg-math-blue',
  'math-teal': 'bg-math-teal',
  'math-indigo': 'bg-math-indigo',
  'math-amber': 'bg-math-amber',
  'math-emerald': 'bg-math-emerald',
  'math-rose': 'bg-math-rose',
  'math-violet': 'bg-math-violet',
};

export default function RoadmapPage() {
  return (
    <div className="min-h-screen py-10">
      <div className="container">
        <h1 className="font-display text-3xl font-bold md:text-4xl">Matematika yo'l xaritasi</h1>
        <p className="mt-2 text-muted-foreground">Boshlang'ichdan olimpiada darajasigacha — sizning o'quv yo'lingiz</p>

        <div className="mt-12 space-y-12">
          {levels.map((level, li) => {
            const levelCourses = courses.filter(c => c.level === level.id);
            return (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: li * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xl">
                    {level.icon}
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold">{level.name}</h2>
                    <p className="text-sm text-muted-foreground">{level.description}</p>
                  </div>
                  {li < levels.length - 1 && (
                    <ArrowRight className="ml-auto h-5 w-5 text-muted-foreground hidden md:block" />
                  )}
                </div>

                <div className="ml-5 border-l-2 border-border pl-6 space-y-3">
                  {levelCourses.map(course => (
                    <Link
                      key={course.id}
                      to={`/kurs/${course.slug}`}
                      className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-all hover:shadow-card hover:border-primary/20"
                    >
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg text-lg ${colorMap[course.color] || 'bg-primary'} text-primary-foreground`}>
                        {course.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-semibold">{course.title}</h3>
                        <p className="text-xs text-muted-foreground">{course.lessonsCount} dars · {course.duration}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  ))}
                  {levelCourses.length === 0 && (
                    <p className="text-sm text-muted-foreground py-2">Bu daraja uchun kurslar tez orada qo'shiladi</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
