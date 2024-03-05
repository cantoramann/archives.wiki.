import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import Link from "next/link";
import Markdown from "react-markdown";

async function getPost(filename: string) {
  const client = new S3Client({ region: process.env.AWS_REGION });

  const getObjectCommand = new GetObjectCommand({
    Bucket: "archives.wiki",
    Key: filename + ".md",
  });

  const response = await client.send(getObjectCommand);
  const content = await response.Body?.transformToString();
  client.destroy();

  return new Response(content, {
    headers: {
      "content-type": "text/plain",
    },
  });
}

export default async function Page({ params }: { params: { paper: string } }) {
  const content = await (await getPost(params.paper)).text();
  return (
    <main className="min-h-screen flex flex-col px-16 py-8">
      <Link className="w-fit" href="/">
        <div className="z-10 items-center justify-between font-mono text-sm lg:flex w-fit">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="font-mono font-bold">archives.wiki</code>
          </p>
        </div>
      </Link>

      <div className="p-4 max-w-4xl mx-auto py-12">
        <article className="prose font-extralight prose-sm sm:prose lg:prose-lg mx-auto prose-headings:font-extralight prose-h1:text-white prose-h1:text-4xl prose-p:text-white prose-li:text-white">
          <h1 className="capitalize font-extralight pt-12 lg:pt-0">
            {params.paper.replaceAll("-", " ")}
          </h1>
          <Markdown>{content}</Markdown>
        </article>
      </div>
    </main>
  );
}
