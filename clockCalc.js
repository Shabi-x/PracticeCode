function calculateAngle(hour, minute) {
    hour = hour % 12; // 转换为12小时制
    const minuteAngle = minute * 6;
    const hourAngle = hour * 30 + minute * 0.5;
    const diff = Math.abs(hourAngle - minuteAngle);
    return Math.min(diff, 360 - diff);
  }
  