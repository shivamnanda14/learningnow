import { createClient } from "@/lib/supabase/server";

export default async function ProfilePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

        <h1 className="text-4xl font-bold text-white mb-2">
          My Profile
        </h1>

        <p className="text-zinc-400 mb-8">
          This page is reading your session directly from Supabase.
        </p>

        {user ? (
          <div className="space-y-5">

            <div>
              <p className="text-zinc-500 text-sm">Email</p>
              <p className="text-white text-lg">
                {user.email}
              </p>
            </div>

            <div>
              <p className="text-zinc-500 text-sm">User ID</p>
              <p className="text-white break-all">
                {user.id}
              </p>
            </div>

            <div>
              <p className="text-zinc-500 text-sm">Email Verified</p>
              <p className="text-green-400">
                {user.email_confirmed_at ? "Yes ✅" : "No ❌"}
              </p>
            </div>

            <div>
              <p className="text-zinc-500 text-sm">Created At</p>
              <p className="text-white">
                {new Date(user.created_at).toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-zinc-500 text-sm">Last Sign In</p>
              <p className="text-white">
                {user.last_sign_in_at
                  ? new Date(user.last_sign_in_at).toLocaleString()
                  : "Never"}
              </p>
            </div>

          </div>
        ) : (
          <div className="text-center py-10">

            <h2 className="text-2xl font-semibold text-red-400 mb-4">
              No Active Session
            </h2>

            <p className="text-zinc-400">
              You are currently not logged in.
            </p>

          </div>
        )}

      </div>
    </main>
  );
}