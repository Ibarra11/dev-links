import { PlusIcon } from "lucide-react";
import EmptyLink from "../assets/images/illustration-empty.svg";
import Button from "./Button";

export default function CustomizeLinks() {
  return (
    <div className="rounded-xl bg-white lg:h-full">
      <div className="lg:mx-auto lg:h-full lg:w-full lg:max-w-5xl">
        <div className="p-6 md:p-10 lg:pt-16">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-brand-gray-300 md:text-4xl">
              Customize your links
            </h1>
            <p className="text-base text-brand-gray-300">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
          </div>
          <div className="mt-10">
            <Button className="gap-1" variant="secondary">
              <PlusIcon size={16} />
              Add New Link
            </Button>
          </div>
          <div className="mt-6 flex h-96 items-center rounded-xl bg-brand-gray-100 p-5 md:h-[500px]">
            <div className="w-full">
              <div className="flex justify-center">
                <img
                  src={EmptyLink}
                  aria-hidded="true"
                  className="block h-20 w-32 object-cover md:h-40 md:w-60"
                />
              </div>
              <h2 className="mt-6 text-center text-xl font-bold text-brand-gray-300 md:text-2xl">
                Let's get you started
              </h2>
              <p className="mx-auto mt-6 max-w-md text-center text-base">
                Use the “Add new link” button to get started. Once you have more
                than one link, you can reorder and edit them. We're here to help
                you share your profiles with everyone!
              </p>
            </div>
          </div>
        </div>
        {/* divider */}
        <div className="h-px bg-brand-gray-200 lg:hidden"></div>
        {/* Save button */}
        <div className="p-4 md:px-10 md:py-6">
          <Button className="md:hidden" disabled variant="primary">
            Save
          </Button>
          <div className="hidden md:flex md:justify-end lg:hidden">
            <Button size="sm" disabled variant="primary">
              Save
            </Button>
          </div>
          <div className="mx-auto hidden lg:block lg:w-full lg:max-w-lg">
            <Button disabled variant="primary">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
