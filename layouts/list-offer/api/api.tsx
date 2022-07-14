import { setupApi } from "~/lib/setupApi";

export const fetchListOffer = async (id: string) => {
  try {
    console.log("id", id);
    const response = await setupApi.get(`/service/list-offer?service_id=${id}`);
    return {
      state: true,
      data: response.data.data,
    };
  } catch (error) {
    return {
      state: false,
      data: [],
    };
  }
};
