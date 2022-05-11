import handler from "../../../handler";
import Note from "../../../models/Note";

const { default: dbConnect } = require("../../../utils/dbConnect");

dbConnect();

export default handler
  .get(async (req, res) => {
    try {
      const note = await Note.findById(req.query.id);
      return res.status(200).json({ ok: true, data: note });
    } catch (error) {
      return res.status(400).json({ ok: false });
    }
  })
  .put(async (req, res) => {
    const {
      query: { id },
    } = req;

    try {
      const updatedNote = await Note.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!updatedNote) {
        return res.status(400).json({ ok: false });
      }
      res.status(200).json({ ok: true, data: updatedNote });
    } catch (error) {
      return res.status(400).json({ ok: false });
    }
  })
  .delete(async (req, res) => {
    try {
      const deletedNote = await Note.deleteOne({ _id: id });
      if (!deletedNote) {
        return res.status(400).json({ ok: false });
      }
      res.status(200).json({ ok: true, data: deletedNote });
    } catch (error) {
      return res.status(400).json({ ok: false });
    }
  });

// export default async (req, res) => {
//   const {
//     query: { id },
//     method,
//   } = req;

//   if (method === "GET") {
//     try {
//       const note = await Note.findById(id);
//       if (!note) {
//         return res.status(400).json({ ok: false });
//       }
//       res.status(200).json({ ok: true, data: note });
//     } catch (error) {
//       return res.status(400).json({ ok: false });
//     }
//   }
//   if (method === "PUT") {
//     try {
//       const updatedNote = await Note.findByIdAndUpdate(id, req.body, {
//         new: true,
//         runValidators: true,
//       });
//       if (!updatedNote) {
//         return res.status(400).json({ ok: false });
//       }
//       res.status(200).json({ ok: true, data: updatedNote });
//     } catch (error) {
//       return res.status(400).json({ ok: false });
//     }
//   }
//   if (method === "DELETE") {
//     try {
//       const deletedNote = await Note.deleteOne({ _id: id });
//       if (!deletedNote) {
//         return res.status(400).json({ ok: false });
//       }
//       res.status(200).json({ ok: true, data: deletedNote });
//     } catch (error) {
//       return res.status(400).json({ ok: false });
//     }
//   }
//   return res.status(400).json({ ok: false, msg: "Method not recognized" });
// };
