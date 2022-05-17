import React, { useEffect, useState } from "react";
import { Table } from "~/components";
import { PencilIcon, TrashIcon } from "~/components/icons";
import { defaultDateDisplay } from "~/lib/helpers";
import { IFeedModel } from "./utils/types";

function ProfilePageListJasa({
  handleClickUpdate,
  handleClickDelete,
  setListJasa,
  rows,
}: {
  handleClickUpdate: Function;
  setListJasa: Function;
  handleClickDelete: Function;
  rows: IFeedModel[];
}) {
  useEffect(() => {
    setListJasa();
  }, []);

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
        {rows.map((item, index: number) => {
          return (
            <tr className='bg-white border-b'>
              <td className='px-6 py-4'>{index + 1}</td>
              <td className='px-6 py-4'>
                {defaultDateDisplay(item.createdAt)}
              </td>
              <td className='px-6 py-4'>{item.type_cultivation}</td>
              <td className='px-6 py-4'>{item.harvest_time}</td>
              <td className='py-4 px-4 flex gap-2 text-center'>
                <button type='button' onClick={() => handleClickUpdate(item)}>
                  <PencilIcon />
                </button>

                <button
                  type='button'
                  onClick={() => handleClickDelete(item.id)}>
                  <TrashIcon />
                </button>
              </td>
            </tr>
          );
        })}
      </Table>
    </>
  );
}

export default ProfilePageListJasa;
