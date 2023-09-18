export interface Movie {
    title: string
    original_title: string,
    backdrop_path: string
    media_type?: string
    release_date?: string
    first_air_date: string
    genre_ids: number[]
    id: number
    name: string
    origin_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
}
export interface SeatRow {
    name: string;
    array: Seat[];
}
export interface Seat {
    position: number, value: number;
}
export interface SelectedSeat {
    seatRowIndex: number;
    seatIndex: number;
}
export interface SelectedSeatView {
    rowName: string;
    position: number;
    seatRowIndex: number;
    seatIndex: number;
}