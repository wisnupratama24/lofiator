import type { NextPage } from "next";
import Head from "next/head";
import { Layout, Navbar } from "~/components";
import DefaultButton from "~/components/button/DefaultButton";

import styles from "./HomePage.module.scss";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Lofiators</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Navbar />

        <section className={styles.homepage}>
          <div>
            <h5>Segera perluas jangkauan pemasaran anda.</h5>
            <p className='w-3/4 mt-5 text-gray-500'>
              Bergabung bersama para pembudidaya dan supplier produk perikanan,
              dan temukan partner bisnis anda.
            </p>

            <div className='flex gap-2 mt-8'>
              <DefaultButton label='Cari Produsen' />
              <DefaultButton label='Cari Supplier' outline={true} />
            </div>
          </div>
          <div className={styles.image}></div>
        </section>

        <section className='lg:-mx-28 md:-mx-20 -mx-8 max-w-screen-2xl w-screen md:mt-3 lg:mt-0 mt-8'>
          <div className={styles.homepageadvantage}>
            <div className={styles.imageadvantage}></div>
            <div>
              <h5 className='lg:w-5/6'>
                Dapatkan kesempatan mengembangkan bisnis anda bersama kami
              </h5>

              <div className='md:mt-5 mt-8 md:ml-0 ml-8'>
                <AdvantageItem
                  title='Terbaik dalam segala budget'
                  subtitle='Anda dapat menentukan harga sesuai dengan keinginan, dan mendapatkan
        keuntungan yang lebih maksimal'
                />

                <AdvantageItem
                  title='Privasi Transaksi'
                  subtitle='Harga yang tersepakati dalam transaksi bersifat privat, menjaga persaingan tetap sehat.'
                />

                <AdvantageItem
                  title='Fleksibilitas'
                  subtitle='Kemudahan dalam bertransaksi, anda dapat menawar kapapun dan dimanapun.'
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

interface IPropsAdvantageItem {
  title: string;
  subtitle: string;
}
const AdvantageItem = ({ title, subtitle }: IPropsAdvantageItem) => {
  return (
    <div className='mb-4'>
      <div className='flex gap-2 items-center'>
        <CheckedIcon />
        <p className={styles.subtitle}>{title}</p>
      </div>
      <p className={`${styles.remark} w-7/12 mt-2`}>{subtitle}</p>
    </div>
  );
};
const CheckedIcon = () => {
  return (
    <svg
      width='19'
      height='19'
      viewBox='0 0 19 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_411_370)'>
        <path
          d='M1.02063 5.47757C0.771318 5.93335 0.560959 6.40861 0.401241 6.90335C0.303853 7.14487 0.264897 7.40198 0.198673 7.65129C0.128553 7.89671 0.10518 8.1694 0.0662243 8.4343L0.0389555 8.63297L0.0272688 8.73036L0.0233733 8.81996L0.0116866 9.18224L0.00389555 9.36144L0 9.45104V9.49778V9.50947V9.54063V9.54453V9.55232V9.57569L0.0233733 9.96135L0.0506421 10.347C0.0662243 10.4756 0.0895976 10.6002 0.112971 10.7288L0.1753 11.1105C0.194777 11.2391 0.237628 11.3599 0.268793 11.4845C0.436301 12.3922 0.759632 13.2882 1.25826 14.0906C1.753 14.8931 2.39576 15.6138 3.1476 16.202C3.89944 16.7903 4.76036 17.2499 5.67971 17.546L6.38091 17.733C6.61854 17.7875 6.87564 17.8187 7.12496 17.8576L7.31194 17.8849L7.47556 17.8966L7.80278 17.9161L7.96639 17.9239L8.0482 17.9278L8.09105 17.9317H8.14169H8.15338H8.17675L8.53904 17.9161C10.4712 17.8343 12.3645 17.0357 13.7824 15.7268C14.4953 15.0762 15.0914 14.301 15.5432 13.4479C15.7731 13.0194 15.9562 12.5831 16.112 12.1117L16.2211 11.7494L16.2756 11.5663C16.2912 11.5079 16.299 11.4572 16.3107 11.4027L16.3808 11.0833L16.4158 10.9236L16.4236 10.8846L16.4392 10.8067L16.4548 10.7171C16.5132 10.3743 16.4042 9.8289 16.3068 9.66529C16.2133 9.50557 16.1237 9.53284 16.0458 9.66919C15.964 9.80943 15.886 10.0587 15.7964 10.3509C15.477 11.3092 15.0563 12.2948 14.4174 13.1791C13.7824 14.0634 12.9761 14.8697 12.0178 15.458C10.8803 16.1903 9.5324 16.5409 8.19623 16.5293H8.16507H8.15338L8.09495 16.5254L7.9586 16.5176L7.68592 16.4981L7.41323 16.4786C7.32753 16.4669 7.25351 16.4513 7.1756 16.4358C7.01978 16.4046 6.86395 16.3812 6.70813 16.3501L6.22898 16.2176C5.6018 16.0111 4.9863 15.754 4.44092 15.3762C3.89555 15.0061 3.38134 14.5854 2.96062 14.0751C2.5399 13.5725 2.15813 13.0272 1.89713 12.4194C1.63223 11.8117 1.42187 11.1807 1.33617 10.5262L1.29332 10.2808C1.28164 10.199 1.28164 10.1172 1.27384 10.0354L1.25826 9.78605L1.25047 9.6614L1.24658 9.59907L1.24268 9.5679V9.55232V9.54453V9.54063L1.25826 9.02253C1.26216 8.93293 1.25826 8.83164 1.26995 8.75373L1.30111 8.52C1.33228 8.36418 1.34396 8.21615 1.39071 8.05643L1.52316 7.58507C1.56211 7.42535 1.64003 7.27732 1.69067 7.12539L1.78027 6.89556C1.81143 6.81764 1.85428 6.74752 1.88545 6.67351C2.33343 5.74247 2.98788 4.91272 3.78258 4.25827C4.58895 3.6155 5.52778 3.15193 6.52504 2.90651C8.52346 2.40398 10.7244 2.8325 12.4112 4.06349C13.0189 4.4959 13.5137 4.96336 13.8604 5.17762C13.1163 5.96062 12.3762 6.75531 11.6321 7.53832C10.4595 8.41482 9.38048 9.40818 8.32868 10.4405C7.47166 9.58738 6.60685 8.73815 5.78099 7.85386C5.6836 7.74868 5.43039 7.68635 5.31353 7.70583C5.07979 7.74089 5.09538 7.98241 5.19666 8.259C5.53947 9.17445 6.17444 10.0665 6.91849 10.8768L7.90017 11.9559C8.11443 12.1935 8.48061 12.2091 8.71434 11.9948L8.75329 11.9559C10.3583 10.5028 11.9593 9.0459 13.428 7.43704L14.1603 6.7709C15.6874 5.34513 17.1833 3.88429 18.5467 2.3027C18.9324 1.85471 19.1544 1.37946 18.8739 1.1613C18.6168 0.962631 18.1533 1.08729 17.6975 1.48853C16.8755 2.20921 16.0458 2.93378 15.2744 3.70899C14.9511 4.03622 14.6317 4.36734 14.3122 4.69846C14.285 4.61276 14.246 4.52316 14.1954 4.42578C14.0045 4.03622 13.6383 3.54538 13.0851 3.0935C12.0957 2.28712 10.8997 1.70668 9.6259 1.44568L9.15064 1.37556L8.64812 1.32102L8.19623 1.29765H8.16896H8.15338H8.11832L8.05599 1.30154L7.93523 1.30544L7.68981 1.31323C7.5262 1.32492 7.36258 1.31713 7.20287 1.3444L6.71982 1.41451L6.4783 1.44957L6.24067 1.50801L5.76931 1.62877C3.7592 2.23648 2.02179 3.65446 1.02063 5.47757Z'
          fill='#787676'
        />
      </g>
      <defs>
        <clipPath id='clip0_411_370'>
          <rect width='19' height='19' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HomePage;
