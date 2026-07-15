"use client";

import RevealText from "@/components/motion/RevealText";

export default function Philosophy() {
  return (
    <section className="section-padding px-6">
      <div className="max-w-4xl mx-auto">
        <RevealText
          as="h2"
          className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-16"
        >
          How I think
        </RevealText>

        <div className="space-y-16">
          <RevealText delay={0.1}>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-light">
              I don't consider myself simply a programmer or designer. I see myself
              as someone who builds digital products that combine technology,
              thoughtful design, and meaningful user experiences.
            </p>
          </RevealText>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI as augmentation",
                body: "Technology should enhance people's ability to learn, create, and make better decisions.",
              },
              {
                title: "Simplicity wins",
                body: "The best products remove complexity. Every interface should feel obvious. Every interaction should have a purpose.",
              },
              {
                title: "Design is communication",
                body: "Beautiful interfaces are valuable, but clarity is more important than decoration. Minimalism means removing everything unnecessary.",
              },
              {
                title: "Build what matters",
                body: "I prefer solving real problems instead of building projects only to impress other developers.",
              },
            ].map((item, i) => (
              <RevealText key={item.title} delay={0.15 + i * 0.1}>
                <div className="border-l-2 border-accent/40 pl-6">
                  <h3 className="font-display font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </RevealText>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
