export default function ProductHeader({
  title,
}: {
  title: string;
}) {
  return (
    <header className="border-b border-zinc-800 px-8 py-6">
      <h1 className="text-3xl font-bold">
        {title}
      </h1>
    </header>
  );
}