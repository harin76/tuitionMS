import {
  SET_REFERENCE_DATA
} from '@/store/mutation-types'

import { EndUses, MarketSectors } from '@/services'

// TODO need better implementation
export const setReferenceData = ({commit}) => {
  EndUses.list()
    .then((endUses) => {
      MarketSectors.list()
        .then((marketSectors) => {
          commit(SET_REFERENCE_DATA, {endUses, marketSectors})
        })
    })
}
