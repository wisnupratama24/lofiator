import { IFeedModel } from "~/layouts/profile/utils/types";
import { setupApi } from "~/lib/setupApi";

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
