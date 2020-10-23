import dayjs from 'dayjs'

dayjs().format()

export function parseDate2Str(date, format) {
    format = format || "YYYY-MM-DD HH:mm:ss";
    return dayjs(date).format(format);
  }