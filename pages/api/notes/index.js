import Note from "../../../models/Note";

const { default: dbConnect } = require("../../../utils/dbConnect");

dbConnect();

export default async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    try {
      const notes = await Note.find();
      return res.status(200).json({ ok: true, data: notes });
    } catch (error) {
      return res.status(400).json({ ok: false });
    }
  } else if (method === "POST") {
    try {
      const newNote = await Note.create(req.body);

      return res.status(200).json({ ok: true, data: newNote });
    } catch (error) {
      return res.status(400).json({ ok: false });
    }
  }
  return res.status(400).json({ ok: false, msg: "Method not recognized" });
};
