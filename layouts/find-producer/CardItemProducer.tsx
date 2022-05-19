import React from "react";
import styles from "./FindProducer.module.scss";
import DefaultButton from "~/components/button/DefaultButton";
import { IFeedModel } from "../profile/utils/types";
import { BASE_URL } from "~/lib/setupApi";

function CardItemProducer({
  title,
  description,
  harvest_time,
  type_cultivation,
  user_name,
  image,
}: IFeedModel) {
  return (
    <div className={styles.CardItemProducer}>
      <div className='w-4/6'>
        <div className={styles.CardItemProducerHeader}>
          <div>
            <h5 className='text-lg'>{title}</h5>
            <span className='text-xs text-gray-300'>{user_name}</span>
          </div>
        </div>

        <p className='text-gray-500 mt-5 text-sm'>{description}</p>

        <table
          className={`${styles.CardItemProducerTable} mt-5`}
          style={{
            width: "100%",
          }}>
          <tbody>
            <tr>
              <td className='text-gray-700 font-semibold'>Waktu Panen</td>
              <td width={"5%"}></td>
              <td className='text-gray-500'>{harvest_time}</td>
            </tr>
            <tr>
              <td className='text-gray-700 font-semibold'>Jenis Budidaya</td>
              <td width={"5%"}></td>
              <td className='text-gray-500'>{type_cultivation}</td>
            </tr>
          </tbody>
        </table>

        <div className='mt-7 flex gap-4'>
          <DefaultButton label='Lihat Selengkapnya' />
          <DefaultButton label='Hubungi Saya' outline={true} />
        </div>
      </div>

      <div className={styles.CardItemProducerProfile}>
        <img
          src={`${BASE_URL}/${image}`}
          alt={`Profile User ${user_name}`}
          className='max-w-52'
        />
      </div>
    </div>
  );
}

export default CardItemProducer;
