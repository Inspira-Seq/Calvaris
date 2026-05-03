export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] py-12 md:py-16 text-sm text-[var(--muted-foreground)]">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="col-span-2 lg:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-[var(--primary)] text-[var(--primary-foreground)] flex items-center justify-center font-bold font-mono text-xs">
              CM
            </div>
            <span className="font-bold text-[var(--foreground)] tracking-tight">Calvaris Meridian</span>
          </div>
          <p className="max-w-xs text-xs leading-relaxed">
            Solve your revenue and inventory chaos with predictive intelligence. Eliminate operational friction and reclaim leaked revenue.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-[var(--foreground)] mb-2">Product</h4>
          <a href="#" className="hover:text-[var(--foreground)] transition-colors">Revenue Management</a>
          <a href="#" className="hover:text-[var(--foreground)] transition-colors">Stock Intelligence</a>
          <a href="#" className="hover:text-[var(--foreground)] transition-colors">Predictive Growth</a>
          <a href="#" className="hover:text-[var(--foreground)] transition-colors">Pricing</a>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-[var(--foreground)] mb-2">Company</h4>
          <a href="#" className="hover:text-[var(--foreground)] transition-colors">About Us</a>
          <a href="#" className="hover:text-[var(--foreground)] transition-colors">Careers</a>
          <a href="#" className="hover:text-[var(--foreground)] transition-colors">Contact</a>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-[var(--foreground)] mb-2">Legal</h4>
          <a href="#" className="hover:text-[var(--foreground)] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[var(--foreground)] transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-[var(--foreground)] transition-colors">Security</a>
        </div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 md:px-6 mt-12 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>&copy; {new Date().getFullYear()} Calvaris Meridian, Inc. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" aria-label="Twitter/X" className="hover:text-[var(--foreground)]">Twitter</a>
          <a href="#" aria-label="LinkedIn" className="hover:text-[var(--foreground)]">LinkedIn</a>
          <a href="#" aria-label="GitHub" className="hover:text-[var(--foreground)]">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
