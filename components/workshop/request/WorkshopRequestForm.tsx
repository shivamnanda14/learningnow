"use client";

import { useState } from "react";

import { createWorkshopRequest } from "@/modules/workshop/services/workshop.service";

export default function WorkshopRequestForm() {

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    institution_name: "",
    institution_type: "",
    contact_person: "",
    designation: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    students: "",
    preferred_date: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {

      setLoading(true);

      setSuccess(false);

      await createWorkshopRequest(form);
      await fetch("/api/workshop", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(form),
});

      setSuccess(true);

      setForm({
        institution_name: "",
        institution_type: "",
        contact_person: "",
        designation: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        students: "",
        preferred_date: "",
        message: "",
      });

    } catch (err) {

      console.error(err);

      alert("Failed to submit workshop request.");

    } finally {

      setLoading(false);

    }
  }

  return (

    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8"
    >

      <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
        Request Form
      </p>

      <h2 className="text-3xl font-semibold mb-8">
        Tell Us About Your Institution
      </h2>

      {success && (

        <div className="mb-8 rounded-xl border border-green-600/40 bg-green-500/10 p-4 text-green-400">

          ✅ Your workshop request has been submitted successfully.
          I'll personally contact you within 24–48 hours.

        </div>

      )}

      <div className="grid md:grid-cols-2 gap-6">

        {/* Institution Name */}

        <input
          name="institution_name"
          value={form.institution_name}
          onChange={handleChange}
          required
          placeholder="Institution Name"
          className="bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
        />

        {/* Institution Type */}

        <select
          name="institution_type"
          value={form.institution_type}
          onChange={handleChange}
          required
          className="bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
        >

          <option value="">
            Institution Type
          </option>

          <option>School</option>

          <option>College</option>

          <option>Coaching Institute</option>

          <option>University</option>

          <option>Training Institute</option>

          <option>Other</option>

        </select>

        {/* Contact Person */}

        <input
          name="contact_person"
          value={form.contact_person}
          onChange={handleChange}
          required
          placeholder="Contact Person"
          className="bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
        />

        {/* Designation */}

        <input
          name="designation"
          value={form.designation}
          onChange={handleChange}
          placeholder="Designation"
          className="bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
        />        {/* Email */}

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Email Address"
          className="bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
        />

        {/* Phone */}

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          placeholder="Phone Number"
          className="bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
        />

        {/* City */}

        <input
          name="city"
          value={form.city}
          onChange={handleChange}
          required
          placeholder="City"
          className="bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
        />

        {/* State */}

        <input
          name="state"
          value={form.state}
          onChange={handleChange}
          required
          placeholder="State"
          className="bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
        />

        {/* Expected Students */}

        <select
          name="students"
          value={form.students}
          onChange={handleChange}
          className="bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
        >

          <option value="">
            Expected Students
          </option>

          <option>Under 100</option>

          <option>100 - 300</option>

          <option>300 - 500</option>

          <option>500+</option>

        </select>

        {/* Preferred Date */}

        <input
          name="preferred_date"
          type="date"
          value={form.preferred_date}
          onChange={handleChange}
          className="bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
        />

      </div>

      {/* Message */}

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        rows={6}
        placeholder="Tell us about your workshop requirements..."
        className="mt-6 w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
      />      <button
        type="submit"
        disabled={loading}
        className="
          mt-8
          w-full
          rounded-xl
          bg-white
          py-4
          text-black
          font-medium
          transition
          hover:bg-zinc-200
          disabled:cursor-not-allowed
          disabled:opacity-70
        "
      >
        {loading
          ? "Submitting..."
          : "Request Workshop"}
      </button>

      <p className="mt-5 text-center text-sm text-zinc-500 leading-6">
        I'll personally review your request and contact you within
        <span className="text-white font-medium">
          {" "}24–48 hours
        </span>{" "}
        to discuss your workshop requirements.
      </p>

    </form>

  );
}