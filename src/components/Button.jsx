function Button({ text, type, px = 6, py = 3 }) {
  return (
    <button
      className={`${type === "border" ? "whitespace-nowrap rounded-md border border-border-color border-opacity-30 px-4 py-1 text-sm text-gray-color transition-colors duration-200 hover:border-main-color lg:px-7 lg:py-2" : `whitespace-nowrap rounded-md bg-main-color lg:px-${px} lg:py-${py} px-${px} py-${py} text-sm text-white transition-all duration-100 hover:bg-[#3f1294]`}`}
    >
      {text}
    </button>
  );
}

export default Button;
