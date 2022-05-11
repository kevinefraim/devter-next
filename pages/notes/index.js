import axios from "axios";
import React from "react";
import AppLayout from "../../components/AppLayout";
import Navbar from "../../components/Navbar";
import Note from "../../components/Note";

const Notes = ({ data }) => {
  return (
    <AppLayout>
      <Navbar />
      <div className="flex justify-center mt-10">
        <h1 className="text-blue-600 font-extrabold text-6xl px-8 py-4 bg-white shadow-2xl rounded-full">
          Notes
        </h1>
      </div>
      <div className="grid grid-cols-5 mt-10 ml-10 gap-4">
        {data?.data.map((note) => {
          return <Note key={note._id} note={note} />;
        })}
      </div>
    </AppLayout>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get("http://localhost:3000/api/notes");

  return { props: { data } };
};

export default Notes;
