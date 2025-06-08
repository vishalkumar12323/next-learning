import Link from "next/link";
export default function ProductsList() {
  return (
    <div>
      <h1>Products List</h1>
      <h2>
        <Link href={"/products/1"}>Product 1</Link>
      </h2>
      <h2>
        <Link href={"/products/2"}>Product 2</Link>
      </h2>
      <h2>
        <Link href={"/products/3"}>Product 3</Link>
      </h2>
      <h2>
        <Link href={"/products/4"}>Product 4</Link>
      </h2>
    </div>
  );
}
