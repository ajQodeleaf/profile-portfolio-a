import Link from "next/link";
import { profileData } from "../lib/constants";

type SocialLinksProps = {
  iconColor?: string;
  variant?: "outline" | "solid";
};

export const SocialLinks = ({ iconColor = "white", variant = "outline" }: SocialLinksProps) => {
  return (
    <div className="flex space-x-8">
      {profileData.socialLinks.map(({ href, icon: Icon, iconAlt: IconAlt }, index) => (
        <Link key={index} href={href}>
          {variant === "outline" ? (
            <Icon className="hover:text-gray-300 w-6 h-6 cursor-pointer" color={iconColor} />
          ) : (
            <IconAlt className="hover:text-gray-300 w-6 h-6 cursor-pointer" color={iconColor} />
          )}
        </Link>
      ))}
    </div>
  );
};