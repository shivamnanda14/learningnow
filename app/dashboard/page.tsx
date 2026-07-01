import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-3">
          Welcome 👋
        </h1>

        <p className="text-zinc-400 mb-10">
          This is your LearningNow Dashboard.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h2 className="text-lg font-semibold mb-2">
              Email
            </h2>

            <p className="text-zinc-400 break-all">
              {user.email}
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h2 className="text-lg font-semibold mb-2">
              User ID
            </h2>

            <p className="text-zinc-400 break-all">
              {user.id}
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h2 className="text-lg font-semibold mb-2">
              Email Verified
            </h2>

            <p className="text-green-400">
              {user.email_confirmed_at ? "Yes ✅" : "No ❌"}
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}