import { setupApi } from "~/lib/setupApi";

export const fetchUserDetail =  async () => {
    try {
        const response = await setupApi.get('/user');
        return {
            state : true,
            data : response.data.data
        }
    } catch (error) {
        return {
            state: false,
            data : []
        }
    }

}