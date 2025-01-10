export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div className=" flex flex-col items-center z-50 left-0 bottom-4 w-full">
      <div className="w-full">{children}</div>
    </div>
  );
}
