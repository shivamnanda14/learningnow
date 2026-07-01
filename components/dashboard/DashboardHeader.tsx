interface DashboardHeaderProps {
  fullName: string;
}

export default function DashboardHeader({
  fullName,
}: DashboardHeaderProps) {
  const firstName = fullName.split(" ")[0];

  return (
    <section className="mb-10">

      <h1 className="text-5xl font-bold text-white">
        Welcome, {firstName} 👋
      </h1>

      <p className="mt-3 text-zinc-400 text-lg">
        Continue your learning journey with LearningNow.
      </p>

    </section>
  );
}