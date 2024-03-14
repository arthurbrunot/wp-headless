"use client"

import {Post} from "@/graphql/models/generated";
import Image from "next/image";
import {Product} from "@/components/Product";
import {useState} from "react";
import {AnimatePresence} from "framer-motion";
import {motion} from "framer-motion";
export function ProductGrid ({posts} : ProductProps) {
  const [opendedPost, setOpenedPost] = useState<Post | null>(null)

  return (
    <>
      <section className={"grid grid-cols-1 md:ggrid-cols-2 lg:grid-cols-3 gap-8"}>
        {posts?.map((post, _index) => (
          <Product post={post as Post} key={_index} onOpen={() => setOpenedPost(post)}/>
        ))}
      </section>

      <AnimatePresence>
        {opendedPost && (
          <motion.div
            layout
            className={"flex items-center justify-center fixed"}
            onClick={() => setOpenedPost(null)}
          >
            <motion.div
              transition={{duration: 0.15}}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              layout
              className={"fixed inset-0 bg-black bg-opacity-25 -z-1"}
            ></motion.div>
            <motion.div
              layoutId={opendedPost.id}
              layout
              className={"bg-white p-5 max-w-2xl max-h-[80dvh] overflow-auto text-black gap-9 flex flex-col" +
                " rounded-lg z-10"}
            >
              {opendedPost.featuredImage?.node?.link && (
                <Image
                  src={opendedPost.featuredImage?.node.link}
                  alt={"post description"}
                  className={"rounded w-full h-full aspect-video object-cover"}
                  width={0} height={0}
                  unoptimized
                  priority={true}
                />
              )}
              <h1 className={"text-2xl"}>{opendedPost.title}</h1>
              {opendedPost.content && (
                <div className={"flex flex-col gap-5"} dangerouslySetInnerHTML={{__html: opendedPost.content}}></div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export interface ProductProps {
  posts: Post[];
}
