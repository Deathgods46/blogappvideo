"use client";
import { postList } from "@/util/consts";
import React from "react";
import { IBlogPost } from "@/util/types";
import { useAuthCheck } from "@/app/context/useAuthCheck";
import Link from "next/link";

const AllPosts: React.FC = () => {
  const posts: IBlogPost[] = postList;
  const { currentUser } = useAuthCheck();

  return (
    <div className="container">
      <div
        className="d-flex justify-content-center align-items-center w-100"
        style={{ height: "200px" }}
      >
        <h1>All blog posts</h1>
      </div>
      <div>
        <ul>
          {posts.map((post: IBlogPost, index) => {
            return (
              <div key={index}>
                <li>
                  <h2>{post.title}</h2>
                </li>
                {currentUser.authToken ? (
                  <Link
                    href={{
                      pathname: "/watch",
                      query: { url: post.url },
                    }}
                  >
                    {post.url}
                  </Link>
                ) : (
                  <p>{post.url}</p>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AllPosts;
