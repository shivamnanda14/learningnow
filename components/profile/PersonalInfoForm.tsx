"use client";

type ProfileProps = {
  profile: any;
  setProfile: React.Dispatch<React.SetStateAction<any>>;
};

export default function PersonalInfoForm({
  profile,
  setProfile,
}: ProfileProps) {
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = e.target;

    setProfile((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8">

      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          Personal Information
        </h2>

        <p className="text-zinc-400 mt-2">
          Update your public profile information.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Full Name */}

        <div>
          <label className="block mb-2 text-sm text-zinc-400">
            Full Name
          </label>

          <input
            name="full_name"
            value={profile.full_name || ""}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-purple-500 transition"
          />
        </div>

        {/* Username */}

        <div>
          <label className="block mb-2 text-sm text-zinc-400">
            Username
          </label>

          <input
            name="username"
            value={profile.username || ""}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-purple-500 transition"
          />
        </div>

        {/* Country */}

        <div>
          <label className="block mb-2 text-sm text-zinc-400">
            Country
          </label>

          <input
            name="country"
            value={profile.country || ""}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-purple-500 transition"
          />
        </div>

        {/* Phone */}

        <div>
          <label className="block mb-2 text-sm text-zinc-400">
            Phone Number
          </label>

          <input
            name="phone"
            value={profile.phone || ""}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-purple-500 transition"
          />
        </div>

        {/* Website */}

        <div className="md:col-span-2">
          <label className="block mb-2 text-sm text-zinc-400">
            Website
          </label>

          <input
            name="website"
            value={profile.website || ""}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-purple-500 transition"
          />
        </div>

      </div>

    </section>
  );
}