import { ArrowRight } from "lucide-react";
import { Platforms } from "../types";

interface Props {
  social: Platforms;
}

import { SocialIcon } from "./SocialIcon";

const socialVariants: Record<Platforms, string> = {
  Github: "bg-black",
  "Frontend Mentor": "bg-emerald-500",
  Twitter: "bg-[#43B7E9]",
  LinkedIn: "bg-[#2D68FF]",
  YouTube: "bg-[#EE3939]",
  Facebook: "bg-[#2442AC]",
  Twitch: "bg-[#EE3FC8]",
  "Dev.to": " bg-gray-800",
  Codewars: "bg-[#8A1A50]",
  freeCodeCamp: "bg-[#302267]",
  GitLab: "bg-[#EB4925]",
  Hashnode: "bg-[#0330D1]",
  "Stack Overflow": "bg-[#EC7100]",
  Codepen: "bg-purple-700",
};

export default function SocialCard({ social }: Props) {
  return (
    <div
      className={`flex h-full items-center justify-between rounded-lg px-4 text-white ${socialVariants[social]}`}
    >
      <div className="flex items-center gap-1">
        <SocialIcon className="size-4" id={social} />
        <span className="text-base">{social}</span>
      </div>
      <ArrowRight size={20} />
    </div>
  );
}
