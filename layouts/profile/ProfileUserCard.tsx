import React from "react";
import { IUserModel } from "./utils/types";
import styles from "./ProfilePage.module.scss";
import DefaultButton from "~/components/button/DefaultButton";
import { openModal } from "~/components/modal/DefaultModal";
import { BASE_URL } from "~/lib/setupApi";

function ProfileUserCard({
  name,
  email,
  city,
  image,
  no_hp,
  description,
}: IUserModel) {
  return (
    <div className={styles.ProfileUserCard}>
      <h5 className='font-medium'>Profile User</h5>

      <div className='mt-5 bg-white p-5'>
        <div className=' flex gap-5'>
          <div className='w-52 bg-gray-400'>
            <img src={`${BASE_URL}/${image}`} alt={name} className='max-w-52' />
          </div>
          <div className='w-8/12'>
            <table width={"100%"}>
              <tbody>
                <tr>
                  <td width={"20%"} className='text-gray-500'>
                    Nama
                  </td>
                  <td width={"70%"}>{name}</td>
                </tr>
                <tr>
                  <td width={"20%"} className='text-gray-500'>
                    No Handphone
                  </td>
                  <td width={"70%"}>{no_hp}</td>
                </tr>
                <tr>
                  <td width={"20%"} className='text-gray-500'>
                    Email
                  </td>
                  <td width={"70%"}>{email}</td>
                </tr>
                <tr>
                  <td width={"20%"} className='text-gray-500'>
                    Asal
                  </td>
                  <td width={"70%"}>{city}</td>
                </tr>
              </tbody>
            </table>

            <p className='font-light text-sm mt-2 text-gray-400'>
              {description}
            </p>
          </div>
        </div>

        <DefaultButton
          label='Update'
          className='mt-6 w-full py-2'
          onClick={() => openModal("modal-update-profile")}
        />
      </div>
    </div>
  );
}

export default ProfileUserCard;
