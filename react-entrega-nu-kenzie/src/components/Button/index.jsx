export const Button = ({ children, changePages, type }) => {
  return (
    <div>
      <button
        onClick={changePages}
        type={type}
        className="buttons"
      >
        {children}
      </button>
    </div>
  );
};
