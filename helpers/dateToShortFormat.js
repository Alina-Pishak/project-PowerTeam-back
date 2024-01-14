function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

const dateToShortFormat = (date) => {
  const incomingDate = new Date(date);
  const normalizedDate =
    addLeadingZero(incomingDate.getUTCDate()) +
    "-" +
    addLeadingZero(incomingDate.getUTCMonth() + 1) +
    "-" +
    incomingDate.getUTCFullYear();
  return normalizedDate;
};

module.exports = dateToShortFormat;
