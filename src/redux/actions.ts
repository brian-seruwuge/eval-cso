import { Action } from "redux";

export type QualityView = "data-view" | "summary-view" | "report-view";

export const CHANGE_QUALITY = "CHANGE_QUALITY";
export const CHANGE_QUALITY_VIEW = "CHANGE_QUALITY_VIEW";
export const LOADING_STATUS = "LOADING_STATUS";

export type ChangeQuality = Action & {
  quality: string;
};

export type ChangeQualityView = Action & {
  qualityView: string;
};

export type ChangeLoadingStatus = Action & {
  loading: boolean;
};

export const changeQuality = (quality: string): ChangeQuality => ({
  type: CHANGE_QUALITY,
  quality
});

export const changeQualityView = (
  qualityView: QualityView
): ChangeQualityView => ({ type: CHANGE_QUALITY_VIEW, qualityView });

export const changeLoadingStatus = (loading: boolean): ChangeLoadingStatus => ({
  type: LOADING_STATUS,
  loading
});
