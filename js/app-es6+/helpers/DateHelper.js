export default class DateHelper {
  constructor() {
    throw new Error(
      'DateHelper é estático, portanto não pode ser instanciado.'
    );
  }

  static textToDate(text) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(text))
      throw new Error('Deve estar no formato aaaa-mm-dd');

    return new Date(
      ...text.split('-').map((item, index) => item - (index % 2))
    );
  }

  static dateToText(data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }
}
