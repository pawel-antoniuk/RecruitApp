import {PromoFormData} from "./PromoFormData";

export interface PromoFormRouterState {
  action: 'fill' | 'clear',
  data: PromoFormData | undefined
}
