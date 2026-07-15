export interface JournalPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  readingTime: string;
}

export const journalPosts: JournalPost[] = [
  {
    slug: "thinking-in-systems",
    title: "Thinking in Systems: Why I Build Products, Not Features",
    excerpt:
      "The difference between a feature and a product is not code — it's intention. Here's how I approach building things that matter.",
    content: `The difference between a feature and a product is not code. It's intention.

When I started building SMANSO.AI, my first instinct was to add more features. More quiz types. More subjects. More gamification. The list grew quickly, and the product felt heavier with each addition.

Then I stopped and asked: what problem am I actually solving?

The answer was simple: Indonesian students need learning that feels personal, not industrial. Every feature after that was filtered through this lens. If it didn't make learning feel more personal, it didn't ship.

This is what I mean by thinking in systems. A system has a purpose. Features without a system are just noise.

I've started applying this to everything I build. Before writing code, I ask:
- What is this product's purpose?
- What is the simplest system that serves that purpose?
- What can I remove without losing the essence?

The best products I use daily are built this way. Linear, Notion, Arc browser — they all feel like systems with clear purposes, not feature collections.

That's the standard I hold myself to. Not perfection, but clarity.`,
    date: "2024-12-15",
    tags: ["product-thinking", "systems", "philosophy"],
    readingTime: "4 min",
  },
  {
    slug: "ai-as-co-architect",
    title: "AI as Co-Architect: How I Work with LLMs",
    excerpt:
      "I don't use AI to write code for me. I use it to think with me. Here's my process for collaborating with language models.",
    content: `I don't use AI to write code for me. I use it to think with me.

There's a common misconception that AI coding tools make you lazy. In my experience, the opposite is true — if you use them correctly.

My process looks like this:

1. I write a detailed prompt that explains the architecture, not just the task.
2. I review every suggestion critically, asking "why this approach?"
3. I iterate — sometimes 10+ rounds — until the solution feels right.
4. I document the decisions in SKILL.md files for future reference.

The key is that I remain the architect. AI is the builder. I decide the blueprint, AI helps me construct it faster.

This approach has fundamentally changed how I work. I can now prototype in hours what used to take days, but the quality bar hasn't dropped. If anything, it's higher — because I have more time to think about design and less time debugging boilerplate.

The future of software development isn't AI replacing developers. It's developers with AI becoming architects of increasingly complex systems.`,
    date: "2024-11-28",
    tags: ["AI", "workflow", "development"],
    readingTime: "5 min",
  },
  {
    slug: "quiet-confidence-in-design",
    title: "Quiet Confidence in Design",
    excerpt:
      "The best interfaces don't scream for attention. They earn trust through precision, restraint, and respect for the user's time.",
    content: `The best interfaces I've ever used share one quality: they don't try to impress me.

Linear doesn't animate everything. Notion doesn't use gradients. Apple's documentation doesn't have flashy illustrations. They all feel confident — not in a loud way, but in a quiet, "I know what I'm doing" way.

I call this quiet confidence in design. It's characterized by:

**Restraint.** Not every element needs to move. Not every surface needs decoration.

**Precision.** Every pixel has a reason. Spacing is mathematical. Typography is intentional.

**Respect.** The user's time is valued. Information hierarchy is clear. Actions are predictable.

When I design, I ask myself: does this element earn its place? If I remove it, does the interface lose meaning? If the answer is no, it goes.

This philosophy extends to code, too. Clean architecture, clear naming, minimal abstractions — all forms of quiet confidence in engineering.

The goal isn't minimalism for its own sake. It's clarity. And clarity is the ultimate form of sophistication.`,
    date: "2024-11-10",
    tags: ["design", "philosophy", "UI"],
    readingTime: "3 min",
  },
];
