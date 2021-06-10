export interface MovieDbResponse {
  dates?:         Dates;
  page:          number;
  results:       Movie[];
  total_pages:   number;
  total_results: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface Movie {
  adult:             boolean;
  backdrop_path:     string;
  genre_ids:         number[];
  id:                number;
  original_language: OriginalLanguage;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      string;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

export enum OriginalLanguage {
  En = "en",
  Ja = "ja",
  Ko = "ko",
}

export interface FullMovie {
  adult:                 boolean;
  backdrop_path:         null;
  belongs_to_collection: null;
  budget:                number;
  genres:                Genre[];
  homepage:              null;
  id:                    number;
  imdb_id:               string;
  original_language:     string;
  original_title:        string;
  overview:              string;
  popularity:            number;
  poster_path:           null;
  production_companies:  any[];
  production_countries:  ProductionCountry[];
  release_date:          string;
  revenue:               number;
  runtime:               null;
  spoken_languages:      any[];
  status:                string;
  tagline:               string;
  title:                 string;
  video:                 boolean;
  vote_average:          number;
  vote_count:            number;
}

export interface Genre {
  id:   number;
  name: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name:       string;
}
