import { motion } from "motion/react";
import { Button } from "@/src/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, Layers, CheckCircle } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 4500 },
  { name: 'Mar', revenue: 5200 },
  { name: 'Apr', revenue: 6000 },
  { name: 'May', revenue: 7500 },
  { name: 'Jun', revenue: 9000 },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden w-full bg-[var(--background)] pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      {/* Background gradients for atmospheric effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-amber-900/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-orange-900/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6 lg:max-w-[540px]"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent)] border border-[var(--border)] text-xs font-medium w-fit text-[var(--foreground)]/80">
              <span className="flex h-2 w-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
              New: Predictive Engine v2.0
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--foreground)] leading-[1.1]">
              Calvaris Meridian: Predict the Future. <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Reclaim Your Revenue.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed">
              Eliminate stock-outs and revenue leakage with the world's most intuitive predictive engine. Built for the modern enterprise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button size="lg" className="h-12 px-8 text-base font-semibold bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 border-none shadow-lg shadow-amber-500/20">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold border-[var(--border)] hover:bg-[var(--accent)] text-[var(--foreground)]">
                Book a Demo
              </Button>
            </div>

            {/* Trust Bar inline for mobile, spanning below for larger screens (handled via CSS/layout) */}
            <div className="mt-8 pt-8 border-t border-[var(--border)]/50">
              <p className="text-sm font-medium text-[var(--muted-foreground)] mb-4">Trusted by modern enterprises</p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 opacity-80 text-[var(--foreground)] grayscale">
                <div className="flex items-center gap-2 font-bold text-lg"><Layers className="w-5 h-5"/> Apple</div>
                <div className="flex items-center gap-2 font-bold text-lg"><TrendingUp className="w-5 h-5"/> Cisco</div>
                <div className="flex items-center gap-2 font-bold text-lg"><BarChart3 className="w-5 h-5"/> BMW</div>
                <div className="flex items-center gap-1 font-bold text-xs bg-amber-500/20 text-amber-500 px-2 py-1 rounded border border-amber-500/30">
                  G2 LEADER 2026
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive / Abstract Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full relative lg:h-[600px] flex items-center justify-center"
          >
            {/* The Dashboard Mockup Container */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-6 flex flex-col gap-6 overflow-hidden"
            >
              {/* Glassmorphism Top Bar */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="h-6 w-32 bg-white/10 rounded-md animate-pulse"></div>
              </div>

              {/* Mockup Content */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-white/5 bg-white/5 flex flex-col gap-2">
                  <span className="text-xs text-[var(--muted-foreground)]">Recovered Revenue</span>
                  <span className="text-2xl font-mono font-bold text-[var(--foreground)]">$4.2M</span>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-2">
                    <div className="h-full bg-[var(--primary)] w-[85%]"></div>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/5 flex flex-col gap-2">
                  <span className="text-xs text-[var(--muted-foreground)]">Stock-out Risk</span>
                  <span className="text-2xl font-mono font-bold text-green-400">Minimal</span>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-2">
                    <div className="h-full bg-green-400 w-[5%]"></div>
                  </div>
                </div>
              </div>

              {/* Recharts Chart Abstraction */}
              <div className="flex-1 rounded-xl border border-white/5 bg-gradient-to-t from-white/5 to-transparent p-4 flex flex-col gap-2 relative h-full">
                <div className="text-xs font-mono text-[var(--muted-foreground)] mb-2">Revenue Growth Projection</div>
                <div className="w-full h-full min-h-[150px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" hide />
                      <YAxis hide />
                      <Tooltip 
                        contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: '8px' }}
                        itemStyle={{ color: 'var(--primary)' }}
                      />
                      <Area type="monotone" dataKey="revenue" stroke="var(--primary)" fillOpacity={1} fill="url(#colorRevenue)" animationDuration={2000} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Mock alert toast */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-6 right-6 p-3 rounded-lg bg-[var(--primary)]/20 border border-[var(--primary)]/30 backdrop-blur-md flex items-center gap-3 shadow-lg"
              >
                <CheckCircle className="w-4 h-4 text-[var(--primary)]" />
                <span className="text-xs text-[var(--foreground)] font-medium">Optimization Active</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
