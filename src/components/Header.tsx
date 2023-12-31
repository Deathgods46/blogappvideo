"use client";
import React from "react";
import Link from "next/link";
import { useAuthCheck } from "@/app/context/useAuthCheck";
import { setStorage } from "@/app/service/localStorage";
import { userDataKey, watchUrlKeyMap } from "@/util/consts";

const Header: React.FC = () => {
  const { currentUser, setAuthUser } = useAuthCheck();

  const handleLogout = () => {
    setStorage(watchUrlKeyMap, {});
    setStorage(userDataKey, {});
    setAuthUser({ authToken: undefined, userId: undefined });
  };

  return (
    <header className="bg-light py-4">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link href="/">
              <p className="navbar-brand">New Blog App</p>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link href="/">
                    <p className="nav-link">Home</p>
                  </Link>
                </li>
                <li className="nav-item">
                  {currentUser.authToken ? (
                    <Link href="/" onClick={handleLogout}>
                      <p className="nav-link">Logout</p>
                    </Link>
                  ) : (
                    <Link href="/login">
                      <p className="nav-link">Login</p>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
