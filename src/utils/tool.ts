export class DateTools {
  /**
   * 获取当前日期所在月份的前后几天加起来总共一周的数据
   * @param dateStr 输入日期字符串，格式为 "YY-MM-DD"
   * @returns 包含一周数据的数组，格式为 [{ week: '一', date: '8' }, ...]
   */
  static getWeekDates(dateStr: string): { week: string; date: string }[] {
    // 解析输入日期
    const [year, month, day] = dateStr.split('-').map(Number)
    const currentDate = new Date(2000 + year, month - 1, day) // 假设年份为 20YY

    // 获取当前日期的星期几（0-6，0 表示星期日）
    const currentDayOfWeek = currentDate.getDay()

    // 计算当前日期所在周的起始日期（当前日期的前三天）
    const startDate = new Date(currentDate)
    startDate.setDate(currentDate.getDate() - currentDayOfWeek + (currentDayOfWeek === 0 ? -6 : 1)) // 如果当前是周日，则从周一开始

    // 生成一周的日期数据
    const weekDates: { week: string; date: string }[] = []
    const weekdays = ['一', '二', '三', '四', '五', '六', '日']

    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + i)

      // 格式化星期和日期
      const week = weekdays[i]
      const dateNum = date.getDate().toString()

      weekDates.push({ week, date: dateNum })
    }

    return weekDates
  }
}
