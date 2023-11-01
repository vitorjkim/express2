"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
class Media {
    constructor(_n1, _n2) {
        this.n1 = _n1;
        this.n2 = _n2;
    }
    setN1(_n1) {
        this.n1 = _n1;
    }
    getnN1() {
        return this.n1;
    }
    setN2(_n2) {
        this.n2 = _n2;
    }
    getN2() {
        return this.n2;
    }
    media(_n1, _n2) {
        let Total = ((_n1 + _n2) / 2);
        return Total;
    }
}
exports.Media = Media;
//# sourceMappingURL=Media.js.map