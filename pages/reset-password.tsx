
import { basePath } from "@/next.config";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head"
import Image from 'next/image';

const ResetPassword = () => {

  useEffect(() => {
    import("preline");
  }, []);


  const [err, setError] = useState("");
  const [data, setData] = useState({
    "email": "adminnextjs@gmail.com",
  });
  const { email } = data;
  const changeHandler = (e:any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };

  const reset = (_e:any) => {
    if (data.email == "adminnextjs@gmail.com") {
      RouteChange();
  }
  else {
      setError("The Auction details did not Match");
      setData({
          "email": "adminnextjs@gmail.com",
      });
    }
  };

  let navigate = useRouter();
  const RouteChange = () => {
    let path = "/";
    navigate.push(path);
  };

  return (
    <Fragment>
      <Head>
        <title>NetInsight - Reset Password</title>
        <link rel="icon" href={`/favicon.png`} />
      </Head>
      <div className="container">
        <div className="flex justify-center authentication authentication-basic items-center h-full text-defaultsize text-defaulttextcolor">
          <div className="grid grid-cols-1">
            <div className="box !p-[2rem] my-[2.5rem]">
              <div className="box-body" role="tabpanel" id="pills-with-brand-color-01" aria-labelledby="pills-with-brand-color-item-1">
                <Image src="/icon-color.png" alt="logo" className="login-logo" width={150} height={40}/>
                {err && (
                  <div className="p-4 mb-4 bg-danger/40 text-sm border-t-4 border-danger text-danger/60 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    {err}
                  </div>
                )}
                <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal text-center">Reset Your Password!</p>
                <div className="grid grid-cols-12 gap-y-4">
                  <div className="xl:col-span-12 col-span-12">
                    <label htmlFor="signin-email" className="form-label text-default">Email</label>
                    <input type="text" name="email" className="form-control form-control-lg w-full !rounded-md" id="email" onChange={changeHandler} value={email} />
                  </div>
                  
                  <div className="xl:col-span-12 col-span-12 grid mt-2">
                    <Link onClick={reset} href="#!" className="ti-btn ti-btn-primary !bg-primary !text-white !font-medium">
                      Reset Password
                    </Link>
                  </div>
                  <div className="xl:col-span-12 col-span-12">
                    <div className="text-center">
                      <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">Have an account? <Link href="/" className="text-primary">Log In</Link></p>
                    </div>
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

export default ResetPassword;