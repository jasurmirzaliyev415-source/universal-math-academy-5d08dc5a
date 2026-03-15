import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-primary">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-xs font-bold">∑</div>
              Universal Math Academy
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Matematikani chuqur o'rganing — boshlang'ichdan olimpiada darajasigacha.
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-display text-sm font-semibold">Kurslar</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/kurslar" className="hover:text-primary transition-colors">Barcha kurslar</Link></li>
              <li><Link to="/kurs/algebra" className="hover:text-primary transition-colors">Algebra</Link></li>
              <li><Link to="/kurs/geometriya" className="hover:text-primary transition-colors">Geometriya</Link></li>
              <li><Link to="/kurs/matematik-analiz" className="hover:text-primary transition-colors">Matematik Analiz</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-display text-sm font-semibold">Platforma</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/yol-xaritasi" className="hover:text-primary transition-colors">Yo'l xaritasi</Link></li>
              <li><Link to="/formulalar" className="hover:text-primary transition-colors">Formulalar</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
              <li><Link to="/haqimizda" className="hover:text-primary transition-colors">Biz haqimizda</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-display text-sm font-semibold">Bog'lanish</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@universalmath.academy</li>
              <li>+998 90 123 45 67</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2026 Universal Math Academy. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
}
