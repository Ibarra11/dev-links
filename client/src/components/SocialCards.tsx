import { Platforms } from "../types";

interface Props {
  social: Platforms;
}
// const SOCIAL_CONFIG: Record<Platforms, string> = {
//   Github: "bg-black",
// };

export default function SocialCards({ social }: Props) {
  return (
    <div className="p-4">
      <svg>
        <use href={`./src/assets/icons/sprite.svg#${social}`} />
      </svg>
    </div>
  );
}
