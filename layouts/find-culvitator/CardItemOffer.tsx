import React from "react";
import { IOfferItemsList } from "./FindCulvitatorPage";
import styles from "./FindCulvitator.module.scss";
import DefaultButton from "~/components/button/DefaultButton";

function CardItemOffer({
  title,
  posted,
  publish_date,
  budget,
  deadline,
  desc,
  total_tawaran,
}: IOfferItemsList) {
  return (
    <div className={styles.CardItemOffer}>
      <div className='w-4/6'>
        <div className={styles.CardItemOfferHeader}>
          <div>
            <h5 className='text-lg'>{title}</h5>
            <span className='text-xs text-gray-300'>{posted}</span>
          </div>
        </div>

        <p className='text-gray-500 mt-5 text-sm'>{desc}</p>

        <table
          className={`${styles.CardItemOfferTable} mt-5`}
          style={{
            width: "100%",
          }}>
          <tbody>
            <tr>
              <td className='text-gray-700 font-semibold'>Published Date</td>
              <td width={"5%"}></td>
              <td className='text-gray-500'>{publish_date}</td>

              <td className='text-gray-700 font-semibold'>Total Tawaran</td>
              <td width={"5%"}></td>
              <td className='text-gray-500'>{total_tawaran}</td>
            </tr>
            <tr>
              <td className='text-gray-700 font-semibold'>Published Budget</td>
              <td width={"5%"}></td>
              <td className='text-gray-500'>{budget}</td>

              <td className='text-gray-700 font-semibold'>Status</td>
              <td width={"5%"}></td>
              <td className='text-gray-500'>
                <div
                  className='text-white rounded-sm py-1 text-center'
                  style={{
                    backgroundColor: "#40B8DE",
                  }}>
                  Published
                </div>
              </td>
            </tr>
            <tr>
              <td className='text-gray-700 font-semibold'>Deadline</td>
              <td width={"5%"}></td>
              <td className='text-gray-500'>{deadline}</td>
            </tr>
          </tbody>
        </table>

        <div className='mt-7 flex gap-4'>
          <DefaultButton label='Lihat Selengkapnya' />
          <DefaultButton label='Ajukan Tawaran' outline={true} />
        </div>
      </div>

      <div className={styles.CardItemOfferProfile}></div>
    </div>
  );
}

export default CardItemOffer;
