function TextInput({ label, type = "text", value, onChange }) {
  return (
    <label className="block">
      {label && <span>{label}</span>}
      <input
        className="px-4 py-2 border border-gray-500 rounded-md w-full"
        type={type}
        onChange={onChange}
        placeholder={label}
        value={value}
      />
    </label>
  );
}

export default TextInput;
