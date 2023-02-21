export const textTransformer = (description: {
  text: Array<string>;
  bold: Array<string>;
}): string[][] => {
  //делим строки на массив подстрок, где 1, 3, 5... нежирные, а 2, 4, 6... жирные
  // 1. найти места разреза и сепараторы
  // 2. разрезать на массив строк  (нечетные будут жирными )
  // 3. результат:
  //  text as  [
  //         ['я', 'люблю', 'гулять'],      абзац
  //         ['маша', 'любит', 'маму']      абзац
  //     ]

  let lastStr: string;

  let resultText = [];
  let descriptionStringArr: Array<string>;

  let currIndex: number;
  let newElements: Array<string>;

  for (let i = 0; i < description.text.length; i++) {
    // перебираем каждый абзац

    lastStr = description.text?.[i]; // инициализационное значение
    descriptionStringArr = [lastStr]; // инициализационное значение

    for (let i = 0; i < description.bold.length; i++) {
      currIndex = lastStr.indexOf(description.bold[i]);

      if (currIndex > -1) {
        newElements = [
          lastStr.slice(0, currIndex),
          lastStr.slice(currIndex, currIndex + description.bold[i].length),
          lastStr.slice(currIndex + description.bold[i].length),
        ];

        descriptionStringArr.pop();
        descriptionStringArr = [...descriptionStringArr, ...newElements];
        lastStr = descriptionStringArr[descriptionStringArr.length - 1];
      }
    }

    resultText[i] = descriptionStringArr;
  }

  return resultText;
};
