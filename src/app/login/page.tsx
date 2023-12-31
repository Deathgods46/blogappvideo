"use client";
import React, { BaseSyntheticEvent, useEffect, useMemo, useState } from "react";
import { myBlogUrl, userDataKey, users } from "@/util/consts";
import { IUser } from "@/util/types";
import { useRouter } from "next/navigation";
import { uuid as v4 } from "uuidv4";
import { setStorage } from "@/app/service/localStorage";
import { useAuthCheck } from "@/app/context/useAuthCheck";
interface FormData {
  username: string;
  password: string;
}
const LoginPage = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState<
    Partial<FormData> & Partial<{ wrongDetails: string }>
  >({
    username: "",
    password: "",
    wrongDetails: "",
  });

  const router = useRouter();

  const { currentUser, setAuthUser } = useAuthCheck();

  useEffect(() => {
    if (currentUser.authToken && currentUser.userId) {
      router.push(myBlogUrl);
    }
  }, []);

  const usersPasswordMap = useMemo(() => {
    const usersMap: any = {};
    users.map((user: IUser) => {
      usersMap[user.name] = user.password;
    });
    return usersMap;
  }, []);

  const handleChange = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({});
  };

  const authCheck = (username: string, password: string) => {
    if (usersPasswordMap[username] !== password) {
      setErrors((prevState) => {
        return {
          ...prevState,
          wrongDetails: "You have entered incorrect details!",
        };
      });
      return;
    } else {
      const userData = {
        userId: users.find((user) => user.name === username)?.userId,
        authToken: v4(),
      };
      setAuthUser(userData);
      setStorage(userDataKey, userData);
      router.push(myBlogUrl);
    }
  };

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const newErrors: Partial<FormData> = {};
    if (formData.username.trim() === "") {
      newErrors.username = "Username is required";
    }
    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Add your authentication logic here
    // For simplicity, we'll just log the form data
    authCheck(formData.username, formData.password);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.username && "is-invalid"
                      }`}
                      id="username"
                      name="username"
                      placeholder="Enter your username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                    {errors.username && (
                      <div className="invalid-feedback">{errors.username}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className={`form-control ${
                        errors.password && "is-invalid"
                      }`}
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                  {errors.wrongDetails && (
                    <div className="alert alert-danger" role="alert">
                      {errors.wrongDetails}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
