
const PatientForm = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl shadow-slate-200/60 border border-slate-100">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-2xl">
            🏡
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Book a Home Visit
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Tell us what care you need. We'll help you with the next steps.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Name */}
          <div>
            <label
              htmlFor="patientName"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Patient Name
            </label>

            <input
              id="patientName"
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
            />
          </div>

          {/* Service */}
          <div>
            <label
              htmlFor="serviceType"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Choose Service
            </label>

            <select
              id="serviceType"
              defaultValue=""
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
            >
              <option value="" disabled>
                Select a service
              </option>

              <option value="doctor">
                Doctor Consultation
              </option>

              <option value="nursing">
                Nursing Visit
              </option>
            </select>
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Home Address
            </label>

            <textarea
              id="address"
              rows="4"
              placeholder="Enter your complete address"
              className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-teal-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700 active:scale-[0.98]"
          >
            Request a Home Visit →
          </button>

          <p className="text-center text-xs text-slate-400">
            Non-emergency home healthcare requests only.
          </p>

        </form>
      </div>
    </div>
  );
};

export default PatientForm;