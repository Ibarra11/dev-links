import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

import Button from "./Button";
import InputWithIcon from "./InputWithIcon";
import InputLabel from "./InputLabel";
export default function SignupForm() {
  return (
    <div className="space-y-10 rounded-xl bg-white p-4 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="font-brand text-2xl font-bold md:text-3xl">
          Create Account
        </h1>
        <p className="font-brand text-base text-brand-gray-300">
          Let's get you started sharing your links!
        </p>
      </div>
      <form className="space-y-6">
        <div className="space-y-1">
          <InputLabel htmlFor="email">Email address</InputLabel>
          <InputWithIcon
            type="text"
            id="email"
            placeholder="e.g. alan@gmail.com"
            icon={<Mail size={16} />}
          />
        </div>
        <div className="space-y-1">
          <InputLabel htmlFor="password">Password</InputLabel>
          <InputWithIcon
            type="password"
            id="password"
            placeholder="At least 8 characters"
            icon={<Lock size={16} />}
          />
        </div>
        <div className="space-y-1">
          <InputLabel htmlFor="confirmPassword">Confirm Passwrod</InputLabel>
          <InputWithIcon
            type="password"
            id="confirmPassword"
            placeholder="At least 8 characters"
            icon={<Lock size={16} />}
          />
        </div>
        <Button variant="primary">Login</Button>
        <p className="text-center text-base text-brand-gray-300">
          Already have an account?{" "}
          <Link
            className="whitespace-nowrap text-brand-purple-300"
            to="/auth/signup"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
