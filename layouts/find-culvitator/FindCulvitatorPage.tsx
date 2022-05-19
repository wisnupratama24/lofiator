import Head from "next/head";
import React from "react";
import { Layout, Navbar } from "~/components";
import Filter from "~/components/filters/Filter";
import { IServiceModel } from "../profile/utils/types";
import CardItemOffer from "./CardItemOffer";
import styles from "./FindCulvitator.module.scss";

function FindCulvitatorPage({
  cultivatorsList,
  formik,
}: {
  cultivatorsList: IServiceModel[];
  formik: any;
}) {
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
            <Filter formik={formik} withCategory={false} />
          </div>

          <div>
            {cultivatorsList.map((item, index) => {
              return (
                <CardItemOffer
                  key={index}
                  description={item.description}
                  name={item.name}
                  max_budget={item.max_budget}
                  min_budget={item.min_budget}
                  status={item.status}
                  publish_date={item.publish_date}
                  publish_limit={item.publish_limit}
                  weight={item.weight}
                  id={item.id}
                  image={item.image}
                  total_penawaran={item.total_penawaran}
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
