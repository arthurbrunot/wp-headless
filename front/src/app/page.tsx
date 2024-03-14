import Image from "next/image";
import {getClient} from "@/lib/backend/client";
import {PostsDocument, PostsQuery, PostsQueryResult} from "@/graphql/queries/generated/getPosts";
import {Product} from "@/components/Product";
import {Post} from "@/graphql/models/generated";
import {ProductGrid} from "@/components/ProductGrid";

export default async function Home() {
  const {data, errors} = await getClient().query<PostsQuery>({
    query: PostsDocument,
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductGrid posts={data?.posts?.nodes as Post[]} />
    </main>
  );
}
