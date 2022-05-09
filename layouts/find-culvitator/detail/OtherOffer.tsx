import React from "react";
import DefaultButton from "~/components/button/DefaultButton";
import styles from "./DetailFindCulvitator.module.scss";

const otherOfferLists: IOtherOfferList[] = [
  {
    title: "Saya menyediakan ikan bandeng segar, skala kecil dan besar",
    owner: "Wisnu Pratama",
    lokasi: "Surabaya",
  },
  {
    title: "Saya menyediakan ikan bandeng segar, skala kecil dan besar",
    owner: "Wisnu Pratama",
    lokasi: "Surabaya",
  },
  {
    title: "Saya menyediakan ikan bandeng segar, skala kecil dan besar",
    owner: "Wisnu Pratama",
    lokasi: "Surabaya",
  },
];

interface IOtherOfferList {
  title: string;
  owner: string;
  lokasi: string;
}

function OtherOffer() {
  return (
    <div className={`${styles.OtherOffer} bg-white px-4 py-1`}>
      <p className='font-medium mt-4 text-gray-700 text-sm'>Tawaran Lain</p>

      <div>
        {otherOfferLists.map((item, index) => {
          return (
            <CardDetailCulvitator
              key={index}
              title={item.title}
              owner={item.owner}
              lokasi={item.lokasi}
            />
          );
        })}
      </div>

      <DefaultButton label='Lihat Lebih Banyak' className='block w-full my-5' />
    </div>
  );
}

const CardDetailCulvitator = ({ title, owner, lokasi }: IOtherOfferList) => {
  return (
    <div className='flex gap-3 mt-5 mb-3'>
      <div className='h-18 w-32 bg-gray-200'></div>
      <div>
        <h6
          className=''
          style={{
            fontSize: "12px",
          }}>
          {title}
        </h6>
        <table width={"100%"} className='mt-2'>
          <tbody>
            <tr>
              <td className='text-gray-800' width={"20%"}>
                Owner
              </td>
              <td width={"5%"}>:</td>
              <td className='text-gray-400'>{owner}</td>
            </tr>
            <tr>
              <td className='text-gray-800' width={"20%"}>
                Lokasi
              </td>
              <td width={"5%"}>:</td>
              <td className='text-gray-400'>{lokasi}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OtherOffer;
