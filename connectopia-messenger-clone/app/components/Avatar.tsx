"use client";

import { User } from "@prisma/client";
import Image from "next/image";

interface AvatarProps {
  user?: User;
}
const Avatar: React.FC<AvatarProps> = ({ user }) => {
  return (
    <div className="relative">
      <div
        className="
        relative 
        inline-block 
        rounded-full 
        overflow-hidden
        h-9 
        w-9 
        md:h-11 
        md:w-11
      "
      >
        <Image
          sizes="(max-width: 50px)"
          fill
          src={user?.image || "/images/avatar.png"}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Avatar;