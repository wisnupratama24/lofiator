import { number } from "yup";

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

export interface IFeedModel {
    id : number,
    title : string,
    createdAt : string,
    harvest_time: string,
    type_cultivation: string
    description : string
}

export const MODAL_FORM_JASA = 'modal-form-jasa'
