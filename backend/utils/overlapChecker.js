exports.hasOverlap = (existing, start, end) => {
  return existing.some(c =>
    start < c.endTime && end > c.startTime
  );
};
