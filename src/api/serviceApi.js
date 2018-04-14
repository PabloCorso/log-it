import db from "./fakeDb.js";

const delay = ms => new Promise(_ => setTimeout(_, ms));

export const getLogItems = async () => {
  await delay(1000);
  return db.logItems;
};
