export default function PreviewPage() {
  return (
    <div className="flex h-full justify-center overflow-y-hidden md:overflow-visible">
      <div className="fixed left-0 right-0 top-0 hidden h-[360px] rounded-bl-[32px] rounded-br-[32px] bg-brand-purple-300 md:block"></div>
      <div className="relative z-10 flex h-full max-h-[720px] w-[400px] translate-y-16 flex-col gap-4 rounded-3xl px-14 py-12 md:bg-white">
        <div className="flex flex-col items-center gap-6">
          <div className="size-28 rounded-full bg-blue-500"></div>
          <div className="space-y-2">
            <h1 className="text-4xl text-brand-gray-300">Ben Adams</h1>
            <p className="text-base text-brand-gray-300">ben@example.com</p>
          </div>
        </div>
        <div className="h-full flex-1 md:overflow-y-hidden">
          <div className="h-full space-y-5 pb-6 md:overflow-y-auto">
            <div className="h-14 rounded-lg bg-red-500"></div>
            <div className="h-14 rounded-lg bg-red-500"></div>
            <div className="h-14 rounded-lg bg-red-500"></div>
            <div className="h-14 rounded-lg bg-red-500"></div>
            <div className="h-14 rounded-lg bg-red-500"></div>
            <div className="h-14 rounded-lg bg-red-500"></div>
            <div className="h-14 rounded-lg bg-red-500"></div>
            <div className="h-14 rounded-lg bg-red-500"></div>
            <div className="h-14 rounded-lg bg-red-500"></div>
            <div className="h-14 rounded-lg bg-red-500"></div>
            <div className="h-14 rounded-lg bg-red-500"></div>
            <div className="h-14 rounded-lg bg-red-500"></div>
            <div className="h-14 rounded-lg bg-red-500"></div>
            <div className="h-14 rounded-lg bg-red-500"></div>
            <div className="h-14 rounded-lg bg-red-500"></div>
            <div className="h-14 rounded-lg bg-red-500"></div>
            <div className="h-14 rounded-lg bg-red-500"></div>
            <div className="h-14 rounded-lg bg-red-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
