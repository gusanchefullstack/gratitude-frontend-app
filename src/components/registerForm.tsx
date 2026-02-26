
const RegisterForm = () => {
  return (
    <div className="min-h-screen bg-cuaternary flex items-center justify-center px-4">
      <div className="bg-primary rounded-2xl p-8 w-full max-w-md flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-logo text-cuaternary">Create Account</h2>
          <p className="text-sm font-light text-secondary">Join the gratitude community</p>
        </div>

        <form className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-xs font-semibold text-secondary uppercase tracking-wide">
                First Name
              </label>
              <input
                type="text"
                placeholder="Jane"
                className="bg-tertiary rounded-xl px-4 py-3 text-primary placeholder:text-secondary font-display text-sm w-full outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-xs font-semibold text-secondary uppercase tracking-wide">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="bg-tertiary rounded-xl px-4 py-3 text-primary placeholder:text-secondary font-display text-sm w-full outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-secondary uppercase tracking-wide">
              Email
            </label>
            <input
              type="email"
              placeholder="jane@example.com"
              className="bg-tertiary rounded-xl px-4 py-3 text-primary placeholder:text-secondary font-display text-sm w-full outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-secondary uppercase tracking-wide">
              Username
            </label>
            <input
              type="text"
              placeholder="janedoe"
              className="bg-tertiary rounded-xl px-4 py-3 text-primary placeholder:text-secondary font-display text-sm w-full outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-secondary uppercase tracking-wide">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="bg-tertiary rounded-xl px-4 py-3 text-primary placeholder:text-secondary font-display text-sm w-full outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-cuaternary text-primary font-semibold py-3 rounded-xl hover:bg-secondary hover:text-cuaternary hover:cursor-pointer transition-colors"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm font-light text-secondary">
          Already have an account?{" "}
          <span className="text-cuaternary font-semibold hover:text-secondary hover:cursor-pointer">
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
