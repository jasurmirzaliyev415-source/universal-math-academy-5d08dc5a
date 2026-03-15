import { motion } from "framer-motion";
import { BookOpen, Users, Award, Globe, Target, Heart } from "lucide-react";
import { totalLessons, courses } from "@/data/courses";

const values = [
  { icon: Target, title: "Maqsad", desc: "Har bir inson matematikani chuqur o'rganishi mumkin" },
  { icon: Globe, title: "Global", desc: "Butun dunyo uchun ochiq ta'lim platformasi" },
  { icon: Heart, title: "Sifat", desc: "Eng yuqori sifatli ta'lim materiallari" },
  { icon: Award, title: "Natija", desc: "Har bir talabaning muvaffaqiyati bizning maqsadimiz" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-10">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-3xl font-bold md:text-4xl">Universal Math Academy haqida</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Biz matematikani hamma uchun tushunarli va qiziqarli qilishni maqsad qilganmiz. 
              Platformamiz {totalLessons}+ dars, {courses.length} ta fan bo'yicha professional ta'lim beradi.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-card p-8 md:p-12">
          <h2 className="font-display text-2xl font-bold text-center mb-8">Raqamlarda biz</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 text-center">
            <div>
              <div className="font-display text-3xl font-bold text-primary">{totalLessons}+</div>
              <div className="text-sm text-muted-foreground">Darslar</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-primary">{courses.length}</div>
              <div className="text-sm text-muted-foreground">Fanlar</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Darajalar</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Formulalar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
