import { IFeedModel, IUserModel } from "~/layouts/profile/utils/types";

export interface IFeedDetailModel {
  feed: IFeedModel;
  user: IUserModel;
  images: {
    id: string;
    image: string;
  }[];
}
