import { motion } from "motion/react";
import { ArrowUpRight, BarChart4, Box, Zap } from "lucide-react";

const features = [
  {
    title: "Revenue Recovery",
    description: "Plug the leaks in your payment flows and reclaim margin with AI-driven gap analysis.",
    icon: <BarChart4 className="w-6 h-6 text-amber-500" />
  },
  {
    title: "Stock Intelligence",
    description: "Prevent stock-outs and overstocking using demand-sensing predictive models.",
    icon: <Box className="w-6 h-6 text-orange-500" />
  },
  {
    title: "Predictive Growth",
    description: "Forecast market shifts and automatically adjust your strategy to maximize future gains.",
    icon: <Zap className="w-6 h-6 text-[var(--primary)]" />
  }
];

export function Features() {
  return (
    <section id="solutions" className="py-24 bg-[var(--background)]">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)]">
            Strategic Problem Solving
          </h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            Our autonomous engines run in the background, continuously analyzing signals and optimizing your operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-300"
            >
              <div className="mb-4 p-3 rounded-lg bg-[var(--background)] border border-[var(--border)] w-fit inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed flex-1">
                {feature.description}
              </p>
              
              <div className="mt-6 flex items-center text-sm font-medium text-[var(--primary)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Learn more <ArrowUpRight className="ml-1 w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
