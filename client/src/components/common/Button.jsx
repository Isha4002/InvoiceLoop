const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "px-6 py-3 rounded-xl font-semibold transition duration-200";

  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg",

    secondary:
      "border border-slate-300 hover:bg-slate-100 text-slate-800",
  };

  return (
    <button
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;