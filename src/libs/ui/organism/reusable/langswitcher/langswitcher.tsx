import languages from '../../../../../content/language/language.json';

const LanguageSwitcher = () => {
  return (
    <select>
      {languages.map((lang) => (
        <option
          key={lang.code}
          value={lang.code}
        >
          {lang.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
