import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Bosh sahifa" },
  { to: "/kurslar", label: "Kurslar" },
  { to: "/yol-xaritasi", label: "Yo'l xaritasi" },
  { to: "/formulalar", label: "Formulalar" },
  { to: "/haqimizda", label: "Biz haqimizda" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-primary">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
            ∑
          </div>
          Universal Math Academy
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                location.pathname === link.to ? "bg-muted text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" size="sm" asChild>
            <Link to="/dashboard">
              <BookOpen className="mr-1.5 h-4 w-4" />
              Dashboard
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/kurslar">
              <GraduationCap className="mr-1.5 h-4 w-4" />
              Boshlash
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-muted">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="border-t border-border bg-card p-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  location.pathname === link.to ? "bg-muted text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
              </Button>
              <Button size="sm" className="flex-1" asChild>
                <Link to="/kurslar" onClick={() => setOpen(false)}>Boshlash</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
