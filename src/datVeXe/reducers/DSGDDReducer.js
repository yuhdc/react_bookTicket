let dsGheDangDat = [];

export const DSGDDReducer = (state = dsGheDangDat, { type, payload }) => {
    switch (type) {
        default:
            return state;
        case 'DISPATCH_CHOSENSEAT':
            let dsGheDangDatUpdate = [...state];
            let index = dsGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.SoGhe === payload.SoGhe);
            if (index !== -1) {
                dsGheDangDatUpdate.splice(index, 1);
            } else {
                dsGheDangDatUpdate.push(payload);
            }
            state = dsGheDangDatUpdate;
            return state;
    }
}