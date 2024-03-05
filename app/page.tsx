import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col md:justify-between px-6 lg:px-16 py-8">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">archives.wiki</code>
        </p>
      </div>

      <div className="p-4 max-w-6xl">
        <h2 className="text-4xl py-2 pt-16 md:pt-0 font-thin bg-gradient-to-r from-white via-cyan-100 to-gray-200 lg:text-left lg:text-6xl text-transparent bg-clip-text">
          Human-annotated analyses of the most prominent documents on software
          and hardware engineering.
        </h2>
        <p className="py-4 font-thin italic text-lg">
          An archive for human understanding, not AI.
        </p>
        <a
          className="font-extralight text-lg"
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdvZyk7J7W4TQm83U5pRmOFomyR-YCokaGNNY2jbEjJbMn-TA/viewform?usp=sf_link"
        >
          More coming soon! Submit paper ideas here 📝
        </a>
      </div>

      <div className="p-4 pt-20 md:pt-0 w-screen max-w-full">
        <ul className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ShowcaseCard
            title="Textbooks Are All You Need"
            author="Microsoft Research"
            description="Introduces phi-1. Discusses the engineering behind its success, a small but high-quality dataset used for fine-tuning."
          />
        </ul>
      </div>
    </main>
  );
}

function ShowcaseCard({
  title,
  author,
  description,
}: {
  title: string;
  author: string;
  description: string;
}) {
  return (
    <li key={title} className="">
      <Link href={`papers/${title.replaceAll(" ", "-").toLocaleLowerCase()}`}>
        <div className="border-white font-extralight rounded-sm">
          <h4 className="text-2xl">{title}</h4>
          <p className="italic">{author}</p>
          <p className="py-1">{description}</p>
          <p className="text-blue-400">More</p>
        </div>
      </Link>
    </li>
  );
}
