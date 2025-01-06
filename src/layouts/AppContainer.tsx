export default function ({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col w-full min-h-screen px-9">{children}</main>
  );
}
