function save() {
  let username = document.getElementById("userName").value;
  let usernamelow = username.toLowerCase();
  let words = usernamelow.replace(/(^\W{1})|(\s+\W{1})/g, (letter) =>
    letter.toUpperCase()
  );
  let clean = words.trim(words);

  let regexp = /\S+/g;

  let word1 = regexp.exec(clean);
  let surname = word1[0];

  let word2 = regexp.exec(clean);
  let name = word2[0];

  let word3 = regexp.exec(clean);
  let patronymic = word3[0];

  document.getElementById("surname").value = surname;
  document.getElementById("name").value = name;
  document.getElementById("patronymic").value = patronymic;
}

// Второй вариант через prompt:

// let username = window.prompt("Введите ФИО через пробел");
// let usernamelow = username.toLowerCase();
// let words = usernamelow.replace(/(^\W{1})|(\s+\W{1})/g, (letter) =>
//   letter.toUpperCase()
// );
// let clean = words.trim(words);

// let regexp = /\S+/g;

// let word1 = regexp.exec(clean);
// let surname = word1[0];

// let word2 = regexp.exec(clean);
// let name = word2[0];

// let word3 = regexp.exec(clean);
// let patronymic = word3[0];

// document.getElementById("surname").value = surname;
// document.getElementById("name").value = name;
// document.getElementById("patronymic").value = patronymic;