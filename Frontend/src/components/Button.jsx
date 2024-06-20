const Button = ({ children }) => {
  return (
    <button className="px-10 py-2 bg-blue text-white rounded-full">
      {children}
    </button>
  );
};

export default Button;
