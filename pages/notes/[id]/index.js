import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Loader } from "semantic-ui-react";
import AppLayout from "../../../components/AppLayout";

const Note = ({ data }) => {
  const router = useRouter();
  console.log(data);
  //   const { query } = router;
  //   const { id } = query;
  const [confirm, setConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  //   console.log(data);
  return (
    <AppLayout>
      <div>
        {isDeleting ? (
          <Loader active />
        ) : (
          <div className="flex flex-col  justify-center items-center mt-20">
            <div className="w-[30%] gap-8 bg-white shadow-2xl rounded p-4 flex flex-col items-center">
              <h1 className="text-center text-blue-600 text-3xl">
                {data.title}
              </h1>
              <p className="text-2xl">{data.description}</p>
              <Button color="red">Delete</Button>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export const getServerSideProps = async ({ query: { id } }) => {
  const { data } = await axios.get(`http://localhost:3000/api/notes/${id}`);
  return { props: data };
};

export default Note;
