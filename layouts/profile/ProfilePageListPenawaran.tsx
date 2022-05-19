import React, { useEffect, useState } from "react";
import { Table } from "~/components";
import { PencilIcon, TrashIcon } from "~/components/icons";
import { defaultDateDisplay } from "~/lib/helpers";
import { IServiceModel } from "./utils/types";

function ProfilePageListPenawaran({
  handleClickUpdate,
  handleClickDelete,
  setListPenawaran,
  rows,
}: {
  handleClickUpdate: Function;
  setListPenawaran: Function;
  handleClickDelete: Function;
  rows: IServiceModel[];
}) {
  useEffect(() => {
    setListPenawaran();
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
            label: "Name",
            width: "30%",
          },
          {
            label: "Budget",
            width: "20%",
          },
          {
            label: "Publish Date",
          },
          {
            label: "Deadline",
          },
          {
            label: "Status",
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
              <td className='px-6 py-4'>{item.name}</td>
              <td className='px-6 py-4'>
                {item.min_budget} - {item.max_budget} / {item.weight}
              </td>
              <td className='px-6 py-4'>
                {defaultDateDisplay(item.publish_date, false)}
              </td>
              <td className='px-6 py-4'>
                {defaultDateDisplay(item.publish_limit, false)}
              </td>
              <td className='px-6 py-4'>{item.status}</td>
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

export default ProfilePageListPenawaran;
