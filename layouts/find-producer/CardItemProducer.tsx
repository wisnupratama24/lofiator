import React from "react";
import { IProducerItemsList } from "./FindProducerPage";
import styles from "./FindProducer.module.scss";
import DefaultButton from "~/components/button/DefaultButton";

function CardItemProducer({
  title,
  user,
  waktu_panen,
  jenis_budidaya,
  desc,
}: IProducerItemsList) {
  return (
    <div className={styles.CardItemProducer}>
      <div className='w-4/6'>
        <div className={styles.CardItemProducerHeader}>
          <div>
            <h5 className='text-lg'>{title}</h5>
            <span className='text-xs text-gray-300'>{user}</span>
          </div>
        </div>

        <p className='text-gray-500 mt-5 text-sm'>{desc}</p>

        <table
          className={`${styles.CardItemProducerTable} mt-5`}
          style={{
            width: "100%",
          }}>
          <tbody>
            <tr>
              <td className='text-gray-700 font-semibold'>Waktu Panen</td>
              <td width={"5%"}></td>
              <td className='text-gray-500'>{waktu_panen}</td>
            </tr>
            <tr>
              <td className='text-gray-700 font-semibold'>Jenis Budidaya</td>
              <td width={"5%"}></td>
              <td className='text-gray-500'>{jenis_budidaya}</td>
            </tr>
          </tbody>
        </table>

        <div className='mt-7 flex gap-4'>
          <DefaultButton label='Lihat Selengkapnya' />
          <DefaultButton label='Hubungi Saya' outline={true} />
        </div>
      </div>

      <div className={styles.CardItemProducerProfile}></div>
    </div>
  );
}

export default CardItemProducer;
