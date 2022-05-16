import React from "react";
import { isEmpty } from "~/lib/helpers";
import { ITableHead } from "~/lib/types";

interface IPropsTable {
  headers: ITableHead[];
  children: React.ReactNode;
}

function Table({ headers, children }: IPropsTable) {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-50 uppercase bg-gray-400 dark:bg-gray-700'>
          <tr>
            {headers.map((header, index) => {
              return (
                <th
                  scope='col'
                  className='px-6 py-3'
                  style={{
                    width: isEmpty(header.width) ? "auto" : `${header.width}`,
                  }}>
                  {header.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export default Table;
