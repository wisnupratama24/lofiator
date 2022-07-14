import Link from "next/link";
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

                <Link href={`/list-offer/${item.id}`}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path d='M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z' />
                    <path
                      fillRule='evenodd'
                      d='M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </Link>
              </td>
            </tr>
          );
        })}
      </Table>
    </>
  );
}

export default ProfilePageListPenawaran;
