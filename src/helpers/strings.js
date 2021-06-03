const capitalizeLetter = (letter) =>
  `${letter[0].toUpperCase()}${letter.substring(1)}`;

const capitalizePharagrap = (string) =>
  string
    .toLowerCase()
    .split(' ')
    .map((letter) => letter.charAt(0).toUpperCase() + letter.slice(1))
    .join(' ');

export { capitalizeLetter, capitalizePharagrap };
