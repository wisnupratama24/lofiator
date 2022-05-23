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


export const fetchListJasa =  async () => {
    try {
        const response = await setupApi.get('/feed');
        return {
            state : true,
            data : response.data.data.data
        }
    } catch (error) {
        return {
            state: false,
            data : []
        }
    }
}


export const updateUser = (formData: any ) => {
    return  setupApi.post('/user/update', formData)    
}

export const createJasa = (formData : any) => {
    return setupApi.post('/feed/save', formData)
}

export const updateJasa = (formData : any, id: string) => {
    return setupApi.post(`/feed/update/${id}`, formData)
}

export const deleteJasa = async (id: string) => {
    try {
        await setupApi.delete(`/feed/delete/${id}`);
        return {
            state : true,
            message : 'Berhasil'
        }
    } catch (error) {
        return {
            state: false,
            message : "Gagal"
        }
    }
}

export const deleteImageJasa = async (id: string) => {
    try {
        await setupApi.delete(`/feed/delete-image/${id}`);
        return {
            state : true,
            message : 'Berhasil'
        }
    } catch (error) {
        return {
            state: false,
            message : "Gagal"
        }
    }
}


export const fetchListPenawaran =  async () => {
    try {
        const response = await setupApi.get('/service');
        return {
            state : true,
            data : response.data.data.data
        }
    } catch (error) {
        return {
            state: false,
            data : []
        }
    }
}

export const createPenawaran = (formData : any) => {
    return setupApi.post('/service/save', formData)
}

export const updatePenawaran = (formData : any, id : string) => {
    return setupApi.post(`/service/update/${id}`, formData)
}

export const deletePenawaran = async (id: string) => {
    try {
        await setupApi.delete(`/service/delete/${id}`);
        return {
            state : true,
            message : 'Berhasil'
        }
    } catch (error) {
        return {
            state: false,
            message : "Gagal"
        }
    }
}
