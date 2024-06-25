import { PlusIcon, Image } from "lucide-react";
import Button from "./Button";
import toast from "react-hot-toast";
import ToastMessage from "./ToastMessage";
import { CircleCheckBig } from "lucide-react";
import Input from "./Input";
import InputLabel from "./InputLabel";
import React from "react";
import { InputError } from "../types";
import { useUserProfile } from "./UserProfileProvider";
interface FormField {
  value: string;
  required: boolean;
}
interface FormFields {
  firstName: FormField;
  lastName: FormField;
  email: FormField;
}

export default function ProfileDetails() {
  const { profile, handleUpdateProfile } = useUserProfile();

  function handleProfilePicturePreview(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log(reader.result);
        handleUpdateProfile({ ...profile, picture: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="rounded-xl bg-white p-6 md:p-10 lg:mx-auto lg:w-full lg:max-w-5xl">
      <div className="mb-10">
        <ProfileHeader />
      </div>
      <div className="mb-6">
        <ProfilePictureUpload
          handleProfilePicturePreview={handleProfilePicturePreview}
        />
      </div>
      <ProfileForm />
    </div>
  );
}

function ProfileForm() {
  const [fields, setFields] = React.useState<FormFields>({
    firstName: { value: "", required: true },
    lastName: { value: "", required: true },
    email: { value: "", required: false },
  });

  const [errors, setErrors] = React.useState<Record<
    keyof FormFields,
    InputError
  > | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const nextFields = { ...fields };
    const target = e.target.name as keyof FormFields;
    // nextFields[target] = {...}
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errors = {} as Record<keyof FormFields, InputError>;
    let hasErrors = false;
    Object.entries(fields).some(([key, field]) => {
      if (field.required && field.value.trim() === "") {
        hasErrors = true;
        errors[key as keyof FormFields] = { type: "empty_url" };
      }
    });
    if (hasErrors) {
      setErrors(errors);
      return;
    }

    toast(
      <ToastMessage
        message="Your changes have been successfully saved!"
        icon={<CircleCheckBig size={16} />}
      />,
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 rounded-lg bg-brand-gray-100 p-5"
    >
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between lg:flex-col lg:items-start xl:flex-row xl:items-center">
        <InputLabel
          className="flex shrink-0 justify-between"
          htmlFor="lastName"
        >
          <div className="relative">
            First Name
            <span className="absolute -top-1">*</span>
          </div>
        </InputLabel>
        <Input
          onChange={handleChange}
          name="firstName"
          className="w-full px-2 md:w-[340px] lg:w-[420px]"
          type="text"
          id="firstName"
          error={errors && errors.firstName && errors.firstName.type}
        />
      </div>
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between lg:flex-col lg:items-start xl:flex-row xl:items-center">
        <InputLabel
          className="flex shrink-0 justify-between"
          htmlFor="lastName"
        >
          <div className="relative">
            Last Name
            <span className="absolute -top-1">*</span>
          </div>
        </InputLabel>
        <Input
          className="w-full px-2 md:w-[340px] lg:w-[420px]"
          type="text"
          id="lastName"
          name="lastName"
          error={errors && errors.lastName && errors.lastName.type}
        />
      </div>
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between lg:flex-col lg:items-start xl:flex-row xl:items-center">
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          className="w-full px-2 md:w-[340px] lg:w-[420px]"
          type="text"
          id="email"
          name="email"
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

function ProfilePictureUpload({
  handleProfilePicturePreview,
}: {
  handleProfilePicturePreview: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 rounded-lg bg-brand-gray-100 p-5 md:flex-row md:items-center md:justify-between lg:gap-16">
      <p className="text-base text-brand-gray-300">Profile Picture</p>
      <div className="flex flex-col gap-6 md:flex-row md:items-center lg:flex-1">
        <label
          className="grid h-44 w-full cursor-pointer place-content-center rounded-lg bg-brand-purple-100 transition-colors hover:bg-violet-200"
          htmlFor="picture-upload"
        >
          <div className="flex flex-col items-center space-y-2 text-brand-purple-300">
            <Image size={40} />
            <div className="flex items-center gap-1">
              <PlusIcon size={16} />
              <p className="text-base">Upload Image</p>
            </div>
          </div>
          <input
            id="picture-upload"
            type="file"
            className="hidden"
            accept="image/png, image/jpg"
            onChange={handleProfilePicturePreview}
          />
        </label>
        <p className="text-xs">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </p>
      </div>
    </div>
  );
}
