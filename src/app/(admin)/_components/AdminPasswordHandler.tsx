"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
interface AdminPasswordHandlerProps {
  onEnter: (password: string) => void;
  error?: boolean;
}

export function AdminPasswordHandler({
  onEnter,
  error,
}: AdminPasswordHandlerProps) {
  const passwordRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log("hi");
    passwordRef.current?.focus();
  }, []);
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="bg-slate-800 py-8 px-4 w-[350px] rounded-md gap-3">
        {error && (
          <p className="text-red-500 font-semibold"> Incorrect Password</p>
        )}
        <label className="text-[19px]">Enter admin Password for access</label>
        <input
          ref={passwordRef}
          type="password"
          className="bg-transparent border-2 border-white rounded-md outline-purple-500 p-2 w-full my-3"
        />
        <Button
          className="w-full"
          onClick={() => {
            if (passwordRef.current?.value === "") {
              toast.error("Please fill the password field");

              return;
            }
            onEnter(passwordRef.current?.value as string);
          }}>
          Enter
        </Button>
      </div>
    </div>
  );
}
