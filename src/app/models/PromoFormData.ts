export type PromoFormData = {
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
      startDate: string,
      endDate: string,
      priceConditions: 'businessConditions' | 'basePrice100',
      connectWithOtherPromotions: string,
      backPromotion: boolean
    }
  }
};

export  const PromoFormDataAvailableValues = {
  definition: {
    conditions: {
      portal: {
        portalA: 'Portal A',
        portalB: 'Portal B'
      },
      type: {
        type1: 'Type 1',
        type2: 'Type 2',
        type3: 'Type 3'
      },
      priceConditions: {
        businessConditions: 'Business conditions',
        basePrice100: 'Base price 100%'
      }
    }
  }
}
