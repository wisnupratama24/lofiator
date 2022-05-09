import React from "react";
import { Layout, Navbar } from "~/components";
import NewOffer from "./NewOffer";
import styles from "./LoginPage.module.scss";
import Head from "next/head";
import DefaultInputText from "~/components/input/DefaultInputText";
import DefaultButton from "~/components/button/DefaultButton";
import Link from "next/link";

function LoginPage() {
  return (
    <>
      <Head>
        <title>Login | Lofiators</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <Layout>
        <section className={styles.loginPage}>
          <NewOffer />

          <div className={styles.form}>
            <h4 className='title-auth'>Log in</h4>

            <div className='mt-4'>
              <DefaultInputText
                label='Email'
                id='email'
                type='email'
                placeholder='user@mail.com'
              />

              <DefaultInputText
                label='Password'
                id='password'
                type='password'
                placeholder='*******'
              />
            </div>

            <div className='mt-6'>
              <DefaultButton
                label='Log me in'
                className='block w-full py-2 bg-green-700 text-base'
              />
              <p className='text-xs text-gray-400 mt-3 font-light'>
                Dengan melanjutkan, Anda memahami dan menyetujui penggunaan Kami
                atas informasi yang Anda sampaikan sesuai dengan ketentuan
                Kebijakan Privasi.
              </p>
            </div>

            <ClickHere label='Lupa kata sandi?' href='/register' />
          </div>
        </section>
      </Layout>
    </>
  );
}

interface IPropsClickHere {
  href: string;
  label: string;
}
export const ClickHere = ({ href, label }: IPropsClickHere) => {
  return (
    <p className='mt-5 text-center text-xs text-gray-600'>
      {label}{" "}
      <Link href={href}>
        <span className='text-green-500 cursor-pointer'>Klik Disini</span>
      </Link>
    </p>
  );
};

export default LoginPage;