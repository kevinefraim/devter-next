import axios from "axios";
import React from "react";
import AppLayout from "../components/AppLayout";
import ButtonLink from "../components/ButtonLink";
import TableApi from "../components/Users-table";

const Users = ({ data }) => {
  return (
    <AppLayout>
      <div className="flex justify-center my-4">
        <h1 className="text-center bg-blue-800 text-white rounded p-2 mt-8 text-[40px]">
          NextJs-Express API
        </h1>
      </div>
      <TableApi users={data} />
      <div className="w-[100%] flex justify-center">
        <ButtonLink path="/">Salir</ButtonLink>
      </div>
    </AppLayout>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get("http://localhost:3000/api/users");

  return { props: { data } };
};

export default Users;
