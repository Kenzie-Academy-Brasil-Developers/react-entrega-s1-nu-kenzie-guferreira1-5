export const Input = ({
  children,
  name,
  onChange,
  value,
}) => {
  return (
    <input
      onChange={onChange}
      value={value}
      name={name}
      type="text"
      placeholder={children}
    />
  );
};
