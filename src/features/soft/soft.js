export function calculateDifference(unixTime) {
  const now = new Date();
  const pastDate = new Date(unixTime * 1000);
  const differenceInMilliseconds = now - pastDate;
  const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
  const differenceInMinutes = Math.floor(differenceInSeconds / 60);
  const differenceInHours = Math.floor(differenceInMinutes / 60);
  const differenceInDays = Math.floor(differenceInHours / 24);
  const differenceInMonths = Math.floor(differenceInDays / 30);
  const differenceInAges = Math.floor(differenceInMonths / 12);
  if (differenceInAges >= 1) {
    return `${differenceInAges} age(-s) ago`;
  } else if (differenceInMonths >= 2) {
    return `${differenceInMonths} months ago`;
  } else if (differenceInDays >= 5) {
    return `${differenceInDays} days ago`;
  } else if (differenceInHours >= 1) {
    return `${differenceInHours} hour(-s) ago`;
  } else if (differenceInMinutes >= 2) {
    return `${differenceInMinutes} minutes ago`;
  } else {
    return `${differenceInSeconds} second(-s) ago`;
  }
}
