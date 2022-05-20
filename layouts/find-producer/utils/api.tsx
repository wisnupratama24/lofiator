import { IFeedModel } from "~/layouts/profile/utils/types";
import { setupApi } from "~/lib/setupApi";
import { IFeedDetailModel } from "./types";

export const fetchFeedProducer = async (customQuery?: string) => {
  try {
    const response = await setupApi.get(`/page/find-producer?${customQuery}`);
    return {
      state: true,
      data: response.data.data.data as IFeedModel[],
    };
  } catch (error) {
    return {
      state: false,
      data: [],
    };
  }
};

export const fetchFeedDetailProducer = async (id: string) => {
  try {
    const response = await setupApi.get(`/page/find-producer/detail/${id}`);
    return {
      state: true,
      data: response.data.data as IFeedDetailModel,
    };
  } catch (error) {
    return {
      state: false,
      data: [],
    };
  }
};
