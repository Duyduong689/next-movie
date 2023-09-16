import moment from "moment";
export function getRandomElements(arr: any[], numElements: number) {
    const shuffled = arr.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, numElements);
}
export function blockBodyScroll() {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
}
export function enableBodyScroll() {
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
}
export const convertDateFormat = (date: string) => {
    if (date) {
        const result = new Date(date);
        return moment(result).format("D MMMM");
    }
    return '';
};