import { IServiceModel } from "~/layouts/profile/utils/types";
import { setupApi } from "~/lib/setupApi";
import { IServiceDetailModel } from "./types";

export const fetchFeedService = async (customQuery?: string) => {
  try {
    const response = await setupApi.get(`/page/find-cultivator?${customQuery}`);
    return {
      state: true,
      data: response.data.data.data as IServiceModel[],
    };
  } catch (error) {
    return {
      state: false,
      data: [],
    };
  }
};

export const postOfferService = (serviceId: string, letter: string) => {
  return setupApi.post(`/service/offer`, {
    service_id: serviceId,
    letter,
  });
};

export const deleteServiceOffer = async (id: string) => {
  try {
    await setupApi.delete(`/service/delete-offer/${id}`);
    return {
      state: true,
      message: "Berhasil",
    };
  } catch (error) {
    return {
      state: false,
      message: "Gagal",
    };
  }
};

export const fetchFeedDetailService = async (id: string) => {
  try {
    const response = await setupApi.get(`/page/find-cultivator/detail/${id}`);
    return {
      state: true,
      data: response.data.data as IServiceDetailModel,
    };
  } catch (error) {
    return {
      state: false,
      data: [],
    };
  }
};
