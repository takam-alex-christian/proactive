export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col w-full h-full gap-2 overflow-y-auto">
      {children}
    </div>
  );
}
