import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div
      className="
          flex 
          min-h-full 
          flex-col 
          justify-center 
          py-12 
          sm:px-6 
          lg:px-8 
          bg-gray-100
        "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          height="48"
          width="48"
          className="mx-auto w-auto"
          src="/images/logo.png"
          alt="Logo"
        />
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
          Login to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
