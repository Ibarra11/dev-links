import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

import Button from "./Button";
import Input from "./Input";
import InputLabel from "./InputLabel";
export default function LoginForm() {
  return (
    <div className="space-y-10 rounded-xl bg-white p-4 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="font-brand text-2xl font-bold md:text-3xl">Login</h1>
        <p className="font-brand text-base text-brand-gray-300">
          Add your details below to get back into your app
        </p>
      </div>
      <form className="space-y-6">
        <div className="space-y-1">
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input
            type="text"
            id="email"
            placeholder="e.g. alan@gmail.com"
            icon={<Mail size={16} />}
          />
        </div>
        <div className="space-y-1">
          <InputLabel htmlFor="email">Password</InputLabel>
          <Input
            type="password"
            id="password"
            placeholder="Enter your password"
            icon={<Lock size={16} />}
          />
        </div>
        <Button variant="primary">Login</Button>
        <p className="text-center text-base text-brand-gray-300">
          Don't have an account?{" "}
          <Link
            className="whitespace-nowrap text-brand-purple-300"
            to="/auth/signup"
          >
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
}
