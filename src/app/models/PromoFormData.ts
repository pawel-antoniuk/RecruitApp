export interface PromoFormData {
  id: number,
  definition: {
    description: {
      marketingName: string
      technicalName: string,
      description: string,
    },
    conditions: {
      portal: 'portalA' | 'portalB',
      type: 'type1' | 'type2' | 'type3',
      benefitAmount: number,
      priceConditions: 'businessConditions' | 'basePrice100',
      connectWithOtherPromotions: string,
      backPromotion: boolean,
      date: {
        start: string,
        end: string
      }
    }
  }
}

