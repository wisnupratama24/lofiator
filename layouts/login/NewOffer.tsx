import React from "react";
import styles from "./LoginPage.module.scss";

const offerItems = [
  {
    title: "Saya membutuhkan ikan bandeng sebanyak 3 ton, pada bulan Januari.",
    posted: "Posted 4 days ago",
  },
  {
    title: "Saya membutuhkan ikan bandeng sebanyak 3 ton, pada bulan Januari.",
    posted: "Posted 4 days ago",
  },
  {
    title: "Saya membutuhkan ikan bandeng sebanyak 3 ton, pada bulan Januari.",
    posted: "Posted 4 days ago",
  },
  {
    title: "Saya membutuhkan ikan bandeng sebanyak 3 ton, pada bulan Januari.",
    posted: "Posted 4 days ago",
  },
];

function NewOffer() {
  return (
    <div className={styles.newOffer}>
      <h3>Penawaran Terbaru</h3>
      <div className='mt-5'>
        {offerItems.map((item, index) => {
          return (
            <OfferItem key={index} posted={item.posted} title={item.title} />
          );
        })}
      </div>
    </div>
  );
}

interface IPropsOfferItem {
  posted: string;
  title: string;
}

const OfferItem = ({ posted, title }: IPropsOfferItem) => {
  return (
    <div className='flex md:w-3/4 w-full items-center mb-3'>
      <div>
        <h4>{title}</h4>
        <p>{posted}</p>
      </div>
      <div className={styles.imageOffer}></div>
    </div>
  );
};

export default NewOffer;
