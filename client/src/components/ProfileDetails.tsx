import { PlusIcon, Image } from "lucide-react";
import Button from "./Button";
import toast from "react-hot-toast";
import ToastMessage from "./ToastMessage";
import { CircleCheckBig } from "lucide-react";
import Input from "./Input";
import InputLabel from "./InputLabel";

export default function ProfileDetails() {
  return (
    <div className="rounded-xl bg-white p-6 md:p-10 lg:mx-auto lg:w-full lg:max-w-5xl">
      <div className="mb-10">
        <ProfileHeader />
      </div>

      <div className="mb-6">
        <ProfilePicture />
      </div>
      <ProfileForm />
    </div>
  );
}

function ProfileForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        toast(
          <ToastMessage
            message="Your changes have been successfully saved!"
            icon={<CircleCheckBig size={16} />}
          />,
        );
      }}
      className="space-y-3 rounded-lg bg-brand-gray-100 p-5"
    >
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between lg:flex-col lg:items-start xl:flex-row xl:items-center">
        <InputLabel className="shrink-0" htmlFor="firstName">
          First Name
        </InputLabel>
        <Input
          className="w-full md:w-[340px] lg:w-[420px]"
          type="text"
          id="firstName"
        />
      </div>
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between lg:flex-col lg:items-start xl:flex-row xl:items-center">
        <InputLabel className="shrink-0" htmlFor="lastName">
          Last Name
        </InputLabel>
        <Input
          className="w-full md:w-[340px] lg:w-[420px]"
          type="text"
          id="lastName"
        />
      </div>
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between lg:flex-col lg:items-start xl:flex-row xl:items-center">
        <InputLabel className="shrink-0" htmlFor="email">
          Email
        </InputLabel>
        <Input
          className="w-full md:w-[340px] lg:w-[420px]"
          type="text"
          id="email"
        />
      </div>
      <div className="mt-6 h-px bg-brand-gray-200 lg:hidden"></div>
      {/* Save button */}
      <div className="mt-4 md:mt-6">
        <Button className="md:hidden" variant="primary">
          Save
        </Button>
        <div className="hidden md:flex md:justify-end lg:hidden">
          <Button size="sm" variant="primary">
            Save
          </Button>
        </div>
        <div className="mx-auto hidden lg:block lg:w-full lg:max-w-lg">
          <Button variant="primary">Save</Button>
        </div>
      </div>
    </form>
  );
}

function ProfileHeader() {
  return (
    <div className="mb-10 space-y-2">
      <h1 className="text-2xl font-bold text-brand-gray-300 md:text-4xl">
        Profile Details
      </h1>
      <p className="text-base text-brand-gray-300">
        Add your details to create a personal touch to your profile.
      </p>
    </div>
  );
}

function ProfilePicture() {
  return (
    <div className="mb-6 flex flex-col gap-4 rounded-lg bg-brand-gray-100 p-5 md:flex-row md:items-center md:justify-between lg:gap-16">
      <p className="text-base text-brand-gray-300">Profile Picture</p>
      <div className="flex flex-col gap-6 md:flex-row md:items-center lg:flex-1">
        <div className="grid h-44 w-full place-content-center rounded-lg bg-brand-purple-100">
          <div className="flex flex-col items-center space-y-2 text-brand-purple-300">
            <Image size={40} />
            <div className="flex items-center gap-1">
              <PlusIcon size={16} />
              <p className="text-base">Upload Image</p>
            </div>
          </div>
        </div>
        <p className="text-xs">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </p>
      </div>
    </div>
  );
}
