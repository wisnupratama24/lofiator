import React from "react";
import styles from "./FindCulvitator.module.scss";
import DefaultButton from "~/components/button/DefaultButton";
import { IServiceModel } from "../profile/utils/types";
import {
  defaultDateDisplay,
  differentDayWithNow,
  formatNumber,
} from "~/lib/helpers";
import { BASE_URL } from "~/lib/setupApi";

function CardItemOffer({
  name,
  publish_date,
  min_budget,
  max_budget,
  weight,
  publish_limit,
  description,
  status,
  image,
  total_penawaran,
}: IServiceModel) {
  return (
    <div className={styles.CardItemOffer}>
      <div className='w-4/6'>
        <div className={styles.CardItemOfferHeader}>
          <div>
            <h5 className='text-lg'>{name}</h5>
            <span className='text-xs text-gray-300'>
              {differentDayWithNow(publish_date)}
            </span>
          </div>
        </div>

        <p className='text-gray-500 mt-5 text-sm'>{description}</p>

        <table
          className={`${styles.CardItemOfferTable} mt-5`}
          style={{
            width: "100%",
          }}>
          <tbody>
            <tr>
              <td className='text-gray-700 font-semibold'>Published Date</td>
              <td width={"5%"}></td>
              <td className='text-gray-500'>
                {defaultDateDisplay(publish_date, false)}
              </td>

              <td className='text-gray-700 font-semibold'>Total Tawaran</td>
              <td width={"5%"}></td>
              <td className='text-gray-500'>{total_penawaran}</td>
            </tr>
            <tr>
              <td className='text-gray-700 font-semibold'>Published Budget</td>
              <td width={"5%"}></td>
              <td className='text-gray-500'>
                {formatNumber(min_budget)} - {formatNumber(max_budget)}/{weight}
              </td>

              <td className='text-gray-700 font-semibold'>Status</td>
              <td width={"5%"}></td>
              <td className='text-gray-500'>
                <div
                  className='text-white rounded-sm py-1 text-center'
                  style={{
                    backgroundColor: "#40B8DE",
                  }}>
                  {status?.toUpperCase()}
                </div>
              </td>
            </tr>
            <tr>
              <td className='text-gray-700 font-semibold'>Deadline</td>
              <td width={"5%"}></td>
              <td className='text-gray-500'>
                {defaultDateDisplay(publish_limit, false)}
              </td>
            </tr>
          </tbody>
        </table>

        <div className='mt-7 flex gap-4'>
          <DefaultButton label='Lihat Selengkapnya' />
          <DefaultButton label='Ajukan Tawaran' outline={true} />
        </div>
      </div>

      <div className={styles.CardItemOfferProfile}>
        <img
          src={`${BASE_URL}/${image}`}
          alt={`Profile User ${min_budget}`}
          className='max-w-52'
        />
      </div>
    </div>
  );
}

export default CardItemOffer;
