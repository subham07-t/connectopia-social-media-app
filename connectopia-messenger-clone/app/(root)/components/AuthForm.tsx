"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/input";
import { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

type variant = "LOGIN" | "REGISTER";
const AuthForm = () => {
  const [variant, setVariant] = useState<variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === "REGISTER") {
      axios
        .post("/api/register", data)
        .then(() => {
          signIn("credentials", { ...data, redirect: false });
        })
        .catch(() => {
          toast.error("Something went wrong");
        })
        .finally(() => setIsLoading(false));
    }
    if (variant === "LOGIN") {
      signIn("credentials", { ...data, redirect: false })
        .then((res) => {
          if (res?.error) {
            toast.error("Invalid Credentials");
          }

          if (res?.ok && !res?.error) {
            toast.success("successful");
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    signIn(action, { redirect: false })
      .then((res) => {
        console.log(res);
        if (res?.error) {
          toast.error("Invalid Credentials");
        }

        if (res?.ok && !res?.error) {
          toast.success("successful");
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2
          className="
        text-center
        text-3xl
        font-bold
        text-gray-900
        mt-6
        tracking-tight  
    "
        >
          {variant === "LOGIN"
            ? "Log in to your account"
            : "Create your account"}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div
          className="
        bg-white
          px-4
          py-8
          shadow
          sm:rounded-lg
          sm:px-10
        "
        >
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {variant === "REGISTER" && (
              <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
            )}
            <Input
              id="email"
              type="email"
              label="email"
              register={register}
              errors={errors}
              disabled={isLoading}
              required
            />
            <Input
              id="password"
              label="Password"
              type="password"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <div>
              <Button disabled={isLoading} fullWidth type="submit">
                {variant === "LOGIN" ? "Sign in" : "Register"}
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div
                className="
                absolute 
                inset-0 
                flex 
                items-center
              "
              >
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <AuthSocialButton
                icon={BsGithub}
                onClick={() => signIn("github")}
              />
              <AuthSocialButton
                icon={BsGoogle}
                onClick={() => socialAction("google")}
              />
            </div>
          </div>

          <div
            className="
            flex 
            gap-2 
            justify-center 
            text-sm 
            mt-6 
            px-2 
            text-gray-500
          "
          >
            <div>
              {variant === "LOGIN"
                ? "New to Messenger?"
                : "Already have an account?"}
            </div>
            <div onClick={toggleVariant} className="underline cursor-pointer">
              {variant === "LOGIN" ? "Create an account" : "Login"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
