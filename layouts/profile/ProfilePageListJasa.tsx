import React, { useEffect } from "react";
import { Table } from "~/components";
import { fetchListJasa } from "./utils/api";

function ProfilePageListJasa() {
  useEffect(() => {
    setListJasa();
  }, []);

  const setListJasa = async () => {
    const response = await fetchListJasa();
    console.log("response", response);
  };
  return (
    <>
      <Table
        headers={[
          {
            label: "No.",
            width: "5%",
          },
          {
            label: "Dibuat Pada",
          },
          {
            label: "Jenis Budidaya",
          },
          {
            label: "Waktu Panen",
          },
          {
            label: "Act",
            width: "10%",
          },
        ]}>
        <tr></tr>
      </Table>
    </>
  );
}

export default ProfilePageListJasa;
