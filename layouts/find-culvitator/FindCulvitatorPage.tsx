import Head from "next/head";
import React from "react";
import { Layout, Navbar } from "~/components";
import Filter from "~/components/filters/Filter";
import CardItemOffer from "./CardItemOffer";
import styles from "./FindCulvitator.module.scss";

export interface IOfferItemsList {
  title: string;
  desc: string;
  posted: string;
  budget: string;
  deadline: string;
  publish_date: string;
  total_tawaran: number;
}

const offerItemLists: IOfferItemsList[] = [
  {
    title: "Saya membutuhkan ikan bandeng sebanyak 3 ton, pada bulan Januari",
    desc: "Dibutuhkan ikan bandeng sebanyak 3 ton di bulan januari, segera ajukan tawaran anda",
    posted: "4 days ago",
    budget: "Rp. 16.000 - 20.000 /Kg",
    deadline: "18/10/2021 12:15:22",
    publish_date: "18/09/2021 12:15:22",
    total_tawaran: 3,
  },
  {
    title: "Saya membutuhkan ikan bandeng sebanyak 3 ton, pada bulan Januari",
    desc: "Dibutuhkan ikan bandeng sebanyak 3 ton di bulan januari, segera ajukan tawaran anda",
    posted: "4 days ago",
    budget: "Rp. 16.000 - 20.000 /Kg",
    deadline: "18/10/2021 12:15:22",
    publish_date: "18/09/2021 12:15:22",
    total_tawaran: 3,
  },
  {
    title: "Saya membutuhkan ikan bandeng sebanyak 3 ton, pada bulan Januari",
    desc: "Dibutuhkan ikan bandeng sebanyak 3 ton di bulan januari, segera ajukan tawaran anda",
    posted: "4 days ago",
    budget: "Rp. 16.000 - 20.000 /Kg",
    deadline: "18/10/2021 12:15:22",
    publish_date: "18/09/2021 12:15:22",
    total_tawaran: 3,
  },
  {
    title: "Saya membutuhkan ikan bandeng sebanyak 3 ton, pada bulan Januari",
    desc: "Dibutuhkan ikan bandeng sebanyak 3 ton di bulan januari, segera ajukan tawaran anda",
    posted: "4 days ago",
    budget: "Rp. 16.000 - 20.000 /Kg",
    deadline: "18/10/2021 12:15:22",
    publish_date: "18/09/2021 12:15:22",
    total_tawaran: 3,
  },
  {
    title: "Saya membutuhkan ikan bandeng sebanyak 3 ton, pada bulan Januari",
    desc: "Dibutuhkan ikan bandeng sebanyak 3 ton di bulan januari, segera ajukan tawaran anda",
    posted: "4 days ago",
    budget: "Rp. 16.000 - 20.000 /Kg",
    deadline: "18/10/2021 12:15:22",
    publish_date: "18/09/2021 12:15:22",
    total_tawaran: 3,
  },
  {
    title: "Saya membutuhkan ikan bandeng sebanyak 3 ton, pada bulan Januari",
    desc: "Dibutuhkan ikan bandeng sebanyak 3 ton di bulan januari, segera ajukan tawaran anda",
    posted: "4 days ago",
    budget: "Rp. 16.000 - 20.000 /Kg",
    deadline: "18/10/2021 12:15:22",
    publish_date: "18/09/2021 12:15:22",
    total_tawaran: 3,
  },
];

function FindCulvitatorPage() {
  return (
    <>
      <Head>
        <title>Temukan Supplier | Lofiators</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout classNames={styles.FindCulvitatorPage}>
        <Navbar />

        <section className={styles.FindCulvitatorPageContent}>
          <div>
            <Filter />
          </div>

          <div>
            {offerItemLists.map((item, index) => {
              return (
                <CardItemOffer
                  key={index}
                  budget={item.budget}
                  deadline={item.deadline}
                  desc={item.desc}
                  posted={item.posted}
                  publish_date={item.publish_date}
                  title={item.title}
                  total_tawaran={item.total_tawaran}
                />
              );
            })}
          </div>
        </section>
      </Layout>
    </>
  );
}

export default FindCulvitatorPage;
