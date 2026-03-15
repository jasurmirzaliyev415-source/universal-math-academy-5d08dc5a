import { useState } from "react";
import { Search } from "lucide-react";
import { formulas } from "@/data/formulas";
import { Input } from "@/components/ui/input";

export default function FormulasPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const categories = [...new Set(formulas.map(f => f.category))];

  const filtered = formulas.filter(f => {
    const matchSearch = f.name.toLowerCase().includes(search.toLowerCase()) || f.formula.toLowerCase().includes(search.toLowerCase());
    const matchCat = !category || f.category === category;
    return matchSearch && matchCat;
  });

  return (
    <div className="min-h-screen py-10">
      <div className="container">
        <h1 className="font-display text-3xl font-bold md:text-4xl">Formulalar kutubxonasi</h1>
        <p className="mt-2 text-muted-foreground">Barcha asosiy matematik formulalar bir joyda</p>

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Formula qidirish..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9" />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCategory(null)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${!category ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
            >
              Barchasi
            </button>
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${category === c ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(f => (
            <div key={f.id} className="rounded-xl border border-border bg-card p-5 hover:shadow-card transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-semibold text-sm">{f.name}</h3>
                <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">{f.category}</span>
              </div>
              <div className="math-formula text-center my-3">{f.formula}</div>
              <p className="text-xs text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
