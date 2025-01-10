export default function AppContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col gap-4 justify-between w-full h-full px-9 py-4 ">
      {children}
    </div>
  );
}
