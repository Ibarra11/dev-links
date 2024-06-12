import React from "react";
import { cn } from "../lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactElement;
}



interface InputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  children: React.ReactNode;
}



export default function Input({ children, className }: React.PropsWithChildren<InputProps>) { 
    return (
        <div className="relative text-brand-gray-300">
            {children}
            <div>
                
            </div>
        {/* <input
          className="w-full rounded-lg border border-brand-gray-200 py-3 pl-11 pr-4 placeholder:text-current"
          {...delegated}
        />
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
          {icon}
        </span> */}
      </div>
    );
}

 function InputLabel({
  htmlFor,
  className,
  children,
  ...delegated
}: InputLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("text-base text-brand-gray-300", className)}
      {...delegated}
    >
      {children}
    </label>
  );
 }

function InputIcon({ children }: React.PropsWithChildren) {
     return 
 }

//   function InputWithIcon({ icon, ...delegated }: InputWithIconProps) {
//     return (
//       <div className="relative text-brand-gray-300">
//         <input
//           className="w-full rounded-lg border border-brand-gray-200 py-3 pl-11 pr-4 placeholder:text-current"
//           {...delegated}
//         />
//         <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
//           {icon}
//         </span>
//       </div>
//     );
//   }



Input.Label = InputLabel;
Input.Icon = 
