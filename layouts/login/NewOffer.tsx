import React from "react";
import { differentDayWithNow } from "~/lib/helpers";
import { BASE_URL } from "~/lib/setupApi";
import styles from "./LoginPage.module.scss";

function NewOffer({ cultivatorList }: any) {
  return (
    <div className={styles.newOffer}>
      <h3>Penawaran Terbaru</h3>
      <div className='mt-5'>
        {cultivatorList?.map((item: any, index: number) => {
          return (
            <OfferItem
              key={index}
              posted={differentDayWithNow(item.publish_date)}
              title={item.name}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}

interface IPropsOfferItem {
  posted: string;
  title: string;
  image: string;
}

const OfferItem = ({ posted, title, image }: IPropsOfferItem) => {
  return (
    <div className='grid grid-cols-4 md:w-3/4  mb-3'>
      <div className='col-span-3'>
        <h4>{title}</h4>
        <p>{posted}</p>
      </div>
      <div className={`${styles.imageOffer}`}>
        <img
          src={`${BASE_URL}/${image}`}
          alt={`Profile User ${title}`}
          className='h-12 w-12'
        />
      </div>
    </div>
  );
};

export default NewOffer;
