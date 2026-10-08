export const formatDateWithOrdinal = (dateString: string): string => {
  const date = new Date(dateString);

  const day = date.getDate();

  const getOrdinal = (day: number): string => {
    if (day >= 11 && day <= 13) return "TH";

    switch (day % 10) {
      case 1:
        return "ST";
      case 2:
        return "ND";
      case 3:
        return "RD";
      default:
        return "TH";
    }
  };

  const month = date.toLocaleString("en-US", {
    month: "long",
  });

  const year = date.getFullYear();

  return `${day}${getOrdinal(day)} ${month.toUpperCase()} ${year}`;
};
