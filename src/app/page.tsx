import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <section className="my-5">
        <h2 className="text-center">Welcome to my video blog!</h2>
        <p className="lead text-center">
          I'm passionate about my blog and I'm excited to share my thoughts and
          experiences with you. Here you'll find a variety of articles about
          videos of cats, dogs and rockets!!!.
        </p>
      </section>
      <section className="my-5">
        <h2 className="text-center">Latest Posts</h2>
        <ul className="list-unstyled">
          <li className="mb-3">
            <p className="text-decoration-none">
              Post Title 1: A captivating introduction to [topic]
            </p>
          </li>
          <li className="mb-3">
            <p className="text-decoration-none">
              Post Title 2: Exploring the depths of [another topic]
            </p>
          </li>
          <li className="mb-3">
            <p className="text-decoration-none">
              Post Title 3: Sharing my insights on [a third topic]
            </p>
          </li>
        </ul>
      </section>
      <section className="call-to-action text-center my-5">
        <h2>Dive into the world of Video Blogs!</h2>
        <p>
          Ready to explore all that my blog has to offer? Get started by
          browsing through my latest posts or check out my [additional content
          category (e.g., archives, categories)].
        </p>
        <Link href="/all-posts/" className="btn btn-primary">
          Read More
        </Link>
      </section>
    </main>
  );
}
