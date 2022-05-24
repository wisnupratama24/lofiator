import { IServiceModel } from "~/layouts/profile/utils/types";

export interface IServiceDetailModel {
  service: IServiceModel;
  service_offers: IServiceOfferModel[];
}

export interface IServiceOfferModel {
  name: string;
  city: string;
  image: string;
}

export const MODAL_FORM_OFFER = "modal-form-offer";
