"use client";
import React, { useEffect } from "react";
import { useAuthCheck } from "@/app/context/useAuthCheck";
import { useRouter } from "next/navigation";
const MyBlog = () => {
  const { currentUser } = useAuthCheck();

  const router = useRouter();

  useEffect(() => {
    if (!currentUser.authToken && !currentUser.userId) {
      router.push("/login");
    }
  }, []);

  return currentUser.authToken && currentUser.userId ? <>Hi.</> : null;
};

export default MyBlog;
