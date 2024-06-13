interface IconProps extends React.SVGAttributes<SVGElement> {
  id: string;
}

export function SocialIcon({ id, ...props }: IconProps) {
  return (
    <svg {...props}>
      <use href={`./src/assets/icons/sprite.svg#${id}`} />
    </svg>
  );
}
