
export interface IUserModel {
    name : string,
    email : string,
    no_hp : string,
    city : string,
    image : string
    description : string
}

export interface IInitialValuesJasa {
    id: string | number,
    title: string;
    description: string;
    waktu_panen: string[];
    jenis_budidaya: string[];

}

export interface IInitialValuesPenawaran {
    id: string | number,
    name: string;
    description: string;
    min_budget: string;
    max_budget: string;
    weight: string;
    status: string;
    publish_date: string;
    publish_limit: string;


}

export interface IFeedModel {
    id : number,
    title : string,
    createdAt : string,
    harvest_time: string,
    type_cultivation: string
    description : string
}

export interface IServiceModel {
    id : number,
    name : string,
    min_budget : string,
    max_budget: string,
    publish_date: string
    publish_limit: string
    weight: string
    status: string
    description : string
}

export const MODAL_FORM_JASA = 'modal-form-jasa'
export const MODAL_FORM_PENAWARAN = 'modal-form-penawaran'

