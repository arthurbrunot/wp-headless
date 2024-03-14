"use client"

import {Post} from "@/graphql/models/generated";
import Image from "next/image";
import {motion} from "framer-motion";

export function Product ({post, onOpen} : ProductProps) {

  return (
    <motion.li layoutId={post.id} className={"flex flex-col bg-white text-black rounded p-5"}>
      <div className="aspect-w-16 aspect-h-9">
        {post.featuredImage?.node.link && (
          <Image
            src={post.featuredImage?.node.link}
            alt={"post description"}
            className={"rounded w-full h-full aspect-video object-cover"}
            width={0} height={0}
            unoptimized
            priority={true}
          />
        )}
      </div>
      <div className="mt-4 flex justify-between flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h3 className="text-sm text-gray-600">
            <a onClick={() => onOpen?.()}>Ouvrir l&apos;article</a>
          </h3>
          <p className="mt-1 text-sm font-medium text-gray-900">{post.title}</p>
        </div>
        {post.excerpt && (
          <div className="text-sm font-medium text-gray-900" dangerouslySetInnerHTML={{__html: post.excerpt}}></div>
        )}
      </div>
    </motion.li>
  );
}

export interface ProductProps {
  post: Post;
  onOpen?: () => void;
}
