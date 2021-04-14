export enum ACTION_TYPE {
  LIST_FAILED = 'LIST_FAILED',
  LIST_REQUEST = 'LIST_REQUEST',
  LIST_SUCCESS = 'LIST_SUCCESS',
}

export type RootType = {
  error: string;
  loading: boolean;
  onPress: void;
};

export type NewsListPayloadType = {
  data: {
    results: List[];
  };
};

export type NewsListActionType = {
  type: string;
  payload: NewsListPayloadType;
};

export type List = {
  uri: string;
  url: string;
  id: string;
  asset_id: number;
  source: string;
  published_date: string;
  update: string;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string;
  column: null;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet: [];
  org_facet: [];
  per_facet: [];
  geo_facet: [];
  media: MediaType[];
  eta_id: number;
};

export type MediaType = {
  'media-metadata': ImageSrcType[];
};

export type ImageSrcType = {
  url: string;
};
