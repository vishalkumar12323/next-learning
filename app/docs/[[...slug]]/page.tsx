import { Metadata } from "next";

type TDocsProps = {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{
    theme?: "light" | "dark";
    readingMode?: "on" | "off";
  }>;
};

export async function generateMetadata({
  params,
}: TDocsProps): Promise<Metadata> {
  const slug = (await params).slug;
  const metaDataTitle =
    slug.length === 2 ? `${slug[0]} -> ${slug[1]}` : slug[0];
  return {
    title: metaDataTitle,
    description: `This is the description of this page`,
  };
}

export default async function DocsPage({ params, searchParams }: TDocsProps) {
  const { slug } = await params;
  const theme = (await searchParams)?.theme;
  const readingMode = (await searchParams)?.readingMode;
  if (slug && slug.length === 1) {
    return (
      <>
        <h1>
          Viewing docs for{" "}
          <span
            style={{ color: "crimson", fontSize: "30px", fontWeight: "600" }}
          >
            {slug[0]}
          </span>{" "}
        </h1>
        <p>docs theme {theme}</p>
        <span>Reading Mode {readingMode}</span>
      </>
    );
  }
  if (slug && slug.length === 2) {
    return (
      <h1>
        Viewing docs for{" "}
        <span style={{ color: "crimson", fontSize: "30px", fontWeight: "600" }}>
          {slug[0]}
        </span>{" "}
        and{" "}
        <span style={{ color: "crimson", fontSize: "30px", fontWeight: "600" }}>
          {slug[1]}
        </span>
      </h1>
    );
  }
  return <h1>Docs home page</h1>;
}
