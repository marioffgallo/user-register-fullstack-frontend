interface dateBreakedDown {
  ano: number;
  dia: number;
  mes: number;
  hh: number;
  min: number;
  seg: number;
}

function getDateSomehow(date?: Date | number | null): Date {
  if (!date) return new Date();

  let dateToReturn;
  if (date instanceof Date) {
    dateToReturn = date;
  } else {
    dateToReturn = new Date(date);
  }
  return dateToReturn;
}

function breakDateIntoValues(date: Date): dateBreakedDown {
  const ano = date.getFullYear();
  const dia = date.getDate();
  const mes = date.getMonth() + 1;
  const hh = date.getHours();
  const min = date.getMinutes();
  const seg = date.getSeconds();

  return { ano, dia, mes, hh, min, seg };
}

export function convertDateToShow(date?: Date | number | null): string {
  if (!date) {
    return '--';
  } else {
    let dateToConvert = getDateSomehow(date);

    const { ano, dia, mes } = breakDateIntoValues(dateToConvert);

    return `${dia < 10 ? `0${dia}` : dia}/${mes < 10 ? `0${mes}` : mes}/${ano}`;
  }
}

export function convertDateHoursToShow(date?: Date | number | null): string {
  if (!date) {
    return '--';
  } else {
    let dateToConvert = getDateSomehow(date);

    const { hh, min } = breakDateIntoValues(dateToConvert);

    return `${convertDateToShow(dateToConvert)} ${hh < 10 ? `0${hh}` : hh}:${
      min < 10 ? `0${min}` : min
    }`;
  }
}

export function convertDateHoursToShowMinimal(
  date?: Date | number | null
): string {
  if (!date) {
    return '--';
  } else {
    let dateToConvert = getDateSomehow(date);

    const { mes, dia, hh, min } = breakDateIntoValues(dateToConvert);

    return `${dia < 10 ? `0${dia}` : dia}/${mes < 10 ? `0${mes}` : mes} - 
    ${hh < 10 ? `0${hh}` : hh}:${min < 10 ? `0${min}` : min}`;
  }
}