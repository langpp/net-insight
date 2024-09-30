
import { basePath } from "@/next.config";
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head"

const LoginDashboard = () => {
  useEffect(() => {
    import("preline");
  }, []);

  const [passwordshow, setpasswordshow] = useState(false);

  const [err, setError] = useState("");
  const [data, setData] = useState({
    "email": "adminnextjs@gmail.com",
    "password": "1234567890",
  });

  const { email, password } = data;
  const changeHandler = (e:any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };

  const Login = (_e:any) => {
    if (data.email == "adminnextjs@gmail.com" && data.password == "1234567890") {
      RouteChange();
    }
    else {
      setError("The Auction details did not Match");
      setData({
          "email": "adminnextjs@gmail.com",
          "password": "1234567890",
      });
    }
  };

  let navigate = useRouter();
  const RouteChange = () => {
    let path = "/dashboard/";
    navigate.push(path);
  };

  return (
    <Fragment>
      <Head>
        <title>NetInsight - Login</title>
        <link rel="icon" href={`${process.env.NODE_ENV === "production" ? basePath : ""}/favicon.png`} />
      </Head>
      <div className="container">
        <div className="flex justify-center authentication authentication-basic items-center h-full text-defaultsize text-defaulttextcolor">
          <div className="grid grid-cols-1">
            <div className="box !p-[2rem] my-[2.5rem]">
              <div className="box-body" role="tabpanel" id="pills-with-brand-color-01" aria-labelledby="pills-with-brand-color-item-1">
                <Image src={`${process.env.NODE_ENV === "production" ? basePath : ""}/icon-color.png`} alt="logo" className="login-logo" />
                {err && (
                  <div className="p-4 mb-4 bg-danger/40 text-sm border-t-4 border-danger text-danger/60 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    {err}
                  </div>
                )}
                <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal text-center">Welcome back!</p>
                <div className="grid grid-cols-12 gap-y-4">
                  <div className="xl:col-span-12 col-span-12">
                    <label htmlFor="signin-email" className="form-label text-default">Email</label>
                    <input type="text" name="email" className="form-control form-control-lg w-full !rounded-md" id="email" onChange={changeHandler} value={email} />
                  </div>
                  <div className="xl:col-span-12 col-span-12 mb-2">
                    <label htmlFor="signin-password" className="form-label text-default block">
                      Password
                      <Link href="/reset-password" className="float-right text-danger">
                        Forget password?
                      </Link>
                    </label>
                    <div className="input-group">
                      <input
                        name="password"
                        type={passwordshow ? 'text' : 'password'}
                        value={password}
                        onChange={changeHandler}
                        className="form-control form-control-lg !rounded-s-md"
                        id="signin-password"
                        placeholder="password"
                      />
                      <button
                        onClick={() => setpasswordshow(!passwordshow)}
                        aria-label="button"
                        className="ti-btn ti-btn-light !rounded-s-none !mb-0"
                        type="button"
                        id="button-addon2"
                      >
                        <i className={`${passwordshow ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                      </button>
                    </div>
                    <div className="mt-2">
                      <div className="form-check !ps-0">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label className="form-check-label text-[#8c9097] dark:text-white/50 font-normal" htmlFor="defaultCheck1">
                          Remember password?
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="xl:col-span-12 col-span-12 grid mt-2">
                    <Link onClick={Login} href="#!" className="ti-btn ti-btn-primary !bg-primary !text-white !font-medium">
                      Sign In
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginDashboard;