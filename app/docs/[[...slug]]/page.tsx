export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug && slug.length === 1) {
    return (
      <h1>
        Viewing docs for{" "}
        <span style={{ color: "crimson", fontSize: "30px", fontWeight: "600" }}>
          {slug[0]}
        </span>{" "}
      </h1>
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
