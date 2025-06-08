import { Metadata } from "next";

type TProps = {
  params: Promise<{ productId: string }>;
};

export async function generateMetadata({ params }: TProps): Promise<Metadata> {
  const productId = (await params).productId;
  return {
    title: `Product ${productId}`,
  };
}
export default async function ProductDetailsPage({ params }: TProps) {
  const productId = (await params).productId;
  return <h1>Details for Product {productId} </h1>;
}
