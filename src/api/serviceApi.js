import db from "./fakeDb.js";

export const getLogItems = () => {
  return db.logItems;
};
