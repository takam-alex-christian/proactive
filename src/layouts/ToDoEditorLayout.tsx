export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed flex flex-col items-center z-50 bottom-4 left-0 w-full">
      <div className="w-2/3">{children}</div>
    </div>
  );
}
