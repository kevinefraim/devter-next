import Note from "../../../models/Note";
const { default: dbConnect } = require("../../../utils/dbConnect");
import nextConnect from "next-connect";
import handler from "../../../handler";

dbConnect();

export default handler
  .get(async (req, res) => {
    try {
      const notes = await Note.find();
      return res.status(200).json({ ok: true, data: notes });
    } catch (error) {
      return res.status(400).json({ ok: false });
    }
  })
  .post(async (req, res) => {
    try {
      const newNote = await Note.create(req.body);

      return res.status(200).json({ ok: true, data: newNote });
    } catch (error) {
      return res.status(400).json({ ok: false });
    }
  });
