import dbConnect from "utils/dbConnect";

dbConnect();

export default function handler(req, res) {
  return res.end("Notes api- go to api/notes");
}
