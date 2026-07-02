"use client";

type ProfileProps = {
  profile: any;
  setProfile: React.Dispatch<React.SetStateAction<any>>;
};

export default function AboutSection({
  profile,
  setProfile,
}: ProfileProps) {

  function handleChange(
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setProfile((prev: any) => ({
      ...prev,
      bio: e.target.value,
    }));
  }

  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-2xl font-bold">
            About You
          </h2>

          <p className="text-zinc-400 mt-2">
            Tell others a little about yourself.
          </p>
        </div>

        <span className="text-sm text-zinc-500">
          {(profile.bio || "").length}/300
        </span>

      </div>

      <textarea
        name="bio"
        rows={6}
        maxLength={300}
        value={profile.bio || ""}
        onChange={handleChange}
        placeholder="Tell everyone about yourself..."
        className="w-full resize-none rounded-2xl bg-zinc-950 border border-zinc-700 px-5 py-4 outline-none focus:border-purple-500 transition"
      />

    </section>
  );
}