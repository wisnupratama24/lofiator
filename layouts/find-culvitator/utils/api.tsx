import { IServiceModel } from "~/layouts/profile/utils/types";
import { setupApi } from "~/lib/setupApi";

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
