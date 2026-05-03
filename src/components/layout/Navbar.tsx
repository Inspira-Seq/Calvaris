import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="h-8 w-8 rounded bg-[var(--primary)] text-[var(--primary-foreground)] flex items-center justify-center font-bold font-mono">
            CM
          </div>
          <span className="font-bold text-lg hidden sm:inline-block tracking-tight text-[var(--foreground)]">Calvaris Meridian</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[var(--primary)]/80 focus:outline-none py-2">
              Solutions
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 rounded-md border border-[var(--border)] bg-[var(--background)] p-2 shadow-md hidden group-hover:block transition-all focus-within:block">
              <a href="#revenue" className="block px-3 py-2 text-sm hover:bg-[var(--accent)] rounded-md">Revenue Management</a>
              <a href="#stock" className="block px-3 py-2 text-sm hover:bg-[var(--accent)] rounded-md">Stock Intelligence</a>
              <a href="#predictive" className="block px-3 py-2 text-sm hover:bg-[var(--accent)] rounded-md">Predictive Growth</a>
            </div>
          </div>
          <a href="#pricing" className="hover:text-[var(--primary)]/80 py-2">Pricing</a>
          <a href="#resources" className="hover:text-[var(--primary)]/80 py-2">Resources</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="font-semibold text-sm">Sign In</Button>
          <Button className="font-semibold flex items-center gap-1 text-sm bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 border-none shadow-lg shadow-amber-500/20">
            Get Started <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)] p-4 flex flex-col gap-4">
          <div className="flex flex-col space-y-2">
            <span className="text-xs uppercase text-[var(--muted-foreground)] font-semibold tracking-wider">Solutions</span>
            <a href="#revenue" className="block px-3 py-2 text-sm hover:bg-[var(--accent)] rounded-md">Revenue Management</a>
            <a href="#stock" className="block px-3 py-2 text-sm hover:bg-[var(--accent)] rounded-md">Stock Intelligence</a>
            <a href="#predictive" className="block px-3 py-2 text-sm hover:bg-[var(--accent)] rounded-md">Predictive Growth</a>
          </div>
          <div className="h-px bg-[var(--border)] w-full block"></div>
          <a href="#pricing" className="block px-3 py-2 text-sm hover:bg-[var(--accent)] rounded-md">Pricing</a>
          <a href="#resources" className="block px-3 py-2 text-sm hover:bg-[var(--accent)] rounded-md">Resources</a>
          
          <div className="flex flex-col gap-2 mt-4">
            <Button variant="outline" className="w-full">Sign In</Button>
            <Button className="w-full justify-center bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 border-none shadow-lg shadow-amber-500/20">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
