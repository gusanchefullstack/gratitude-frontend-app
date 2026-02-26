const LoginForm = () => {
  return (
    <div className="min-h-screen bg-cuaternary flex items-center justify-center px-4">
      <div className="bg-primary rounded-2xl p-8 w-full max-w-md flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-logo text-cuaternary">Welcome Back</h2>
          <p className="text-sm font-light text-secondary">Sign in to your account</p>
        </div>

        <form className="flex flex-col gap-4">
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
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold text-secondary uppercase tracking-wide">
                Password
              </label>
              <span className="text-xs text-cuaternary font-semibold hover:text-secondary hover:cursor-pointer">
                Forgot password?
              </span>
            </div>
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
            Sign In
          </button>
        </form>

        <p className="text-center text-sm font-light text-secondary">
          Don't have an account?{" "}
          <span className="text-cuaternary font-semibold hover:text-secondary hover:cursor-pointer">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
