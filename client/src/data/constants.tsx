
import {LngLatBoundsLike} from 'maplibre-gl';
import {isMobile as isMobileReactDeviceDetect} from 'react-device-detect';

export const isMobile = isMobileReactDeviceDetect;

// Pages URL
export const PAGES_ENDPOINTS = {
  EXPLORE: '/',
  METHODOLOGY: '/methodology',
  DOWNLOADS: '/downloads',
  TSD: '/technical-support-document',
  ABOUT: '/about',
  FAQS: '/frequently-asked-questions',
  PUBLIC_ENG: '/public-engagement',
  CONTACT: '/contact',
};

// Performance markers
export const PERFORMANCE_MARKER_MAP_IDLE = 'MAP_IDLE';

// ******* PROPERTIES FROM TILE SERVER **************
export type J40Properties = { [key: string]: any };


// ****** SIDE PANEL BACKEND SIGNALS ***********

// Set the threshold percentile used by most indicators in the side panel
export const DEFAULT_THRESHOLD_PERCENTILE = 90;

// General Census Track Info
export const GEOID_PROPERTY = 'GEOID10';
export const COUNTY_NAME = 'CF';
export const STATE_NAME = 'SF';
export const TOTAL_POPULATION = 'TPF';

/**
 * The SCORE_BOUNDAY_THRESHOLD will determine if the tract is disadvantaged
 * or not. Currently all values are railed to 0 or 1. If the
 * SCORE_PROPERTY_HIGH is greater than SCORE_BOUNDARY_THRESHOLD,
 * the tract will be considered disadvantaged.
 */
export const SCORE_BOUNDARY_THRESHOLD = 0.6;

// Determines the X of Y threshold exceeded
export const TOTAL_NUMBER_OF_DISADVANTAGE_INDICATORS = 'TC';
export const TOTAL_NUMBER_OF_INDICATORS = 'THRHLD';
export const COUNT_OF_CATEGORIES_DISADV = 'CC';

export const SIDE_PANEL_STATE = 'UI_EXP';
export const SIDE_PANEL_STATE_VALUES = {
  NATION: 'Nation',
  PUERTO_RICO: 'Puerto Rico',
  ISLAND_AREAS: 'Island Areas',
};

// Climate category
export const IS_CLIMATE_FACTOR_DISADVANTAGED_M = 'M_CLT';
export const IS_CLIMATE_EXCEED_ONE_OR_MORE_INDICATORS_M = 'M_CLT_EOMI';

export const EXP_AGRICULTURE_LOSS_PERCENTILE = 'EALR_PFS';
export const IS_EXCEEDS_THRESH_FOR_EXP_AGR_LOSS = 'EAL_ET';

export const EXP_BUILDING_LOSS_PERCENTILE = 'EBLR_PFS';
export const IS_EXCEEDS_THRESH_FOR_EXP_BLD_LOSS = 'EBL_ET';

export const EXP_POPULATION_LOSS_PERCENTILE = 'EPLR_PFS';
export const IS_EXCEEDS_THRESH_FOR_EXP_POP_LOSS = 'EPL_ET';

export const IS_EXCEED_BOTH_SOCIO_INDICATORS_M = 'M_EBSI';

export const POVERTY_BELOW_200_PERCENTILE = 'P200_PFS';
export const IS_FEDERAL_POVERTY_LEVEL_200 = 'FPL200S';

export const HIGHER_ED_PERCENTILE = 'CA';
export const IS_HIGHER_ED_PERCENTILE = 'CA_LT20';

export const NON_HIGHER_ED_PERCENTILE = 'NCA';


// Energy category
export const IS_ENERGY_FACTOR_DISADVANTAGED_M = 'M_ENY';
export const IS_ENERGY_EXCEED_ONE_OR_MORE_INDICATORS_M = 'M_ENY_EOMI';

export const ENERGY_PERCENTILE = 'EBF_PFS';
export const IS_EXCEEDS_THRESH_FOR_ENERGY_BURDEN = 'EB_ET';

export const PM25_PERCENTILE = 'PM25F_PFS';
export const IS_EXCEEDS_THRESH_FOR_PM25 = 'PM25_ET';


// Transport category
export const IS_TRANSPORT_FACTOR_DISADVANTAGED_M = 'M_TRN';
export const IS_TRANSPORT_EXCEED_ONE_OR_MORE_INDICATORS_M = 'M_TRN_EOMI';

export const DIESEL_MATTER_PERCENTILE = 'DSF_PFS';
export const IS_EXCEEDS_THRESH_FOR_DIESEL_PM = 'DS_ET';

export const TRAFFIC_PERCENTILE = 'TF_PFS';
export const IS_EXCEEDS_THRESH_FOR_TRAFFIC_PROX = 'TP_ET';


// Housing category
export const IS_HOUSING_FACTOR_DISADVANTAGED_M = 'M_HSG';
export const IS_HOUSING_EXCEED_ONE_OR_MORE_INDICATORS_M = 'M_HSG_EOMI';

export const HOUSING_BURDEN_PROPERTY_PERCENTILE = 'HBF_PFS';
export const IS_EXCEEDS_THRESH_FOR_HOUSE_BURDEN = 'HB_ET';

export const LEAD_PAINT_PERCENTILE = 'LPF_PFS';
export const IS_EXCEEDS_THRESH_FOR_LEAD_PAINT_AND_MEDIAN_HOME_VAL = 'LPP_ET';

// export const MEDIAN_HOME_VALUE_PERCENTILE = 'MHVF_PFS'; // No longer showing in UI


// Pollution category
export const IS_POLLUTION_FACTOR_DISADVANTAGED_M = 'M_PLN';
export const IS_POLLUTION_EXCEED_ONE_OR_MORE_INDICATORS_M = 'M_PLN_EOMI';

export const PROXIMITY_TSDF_SITES_PERCENTILE = 'TSDF_PFS';
export const IS_EXCEEDS_THRESH_FOR_HAZARD_WASTE = 'TSDF_ET';

export const PROXIMITY_NPL_SITES_PERCENTILE = 'NPL_PFS';
export const IS_EXCEEDS_THRESH_FOR_SUPERFUND = 'NPL_ET';

export const PROXIMITY_RMP_SITES_PERCENTILE = 'RMP_PFS';
export const IS_EXCEEDS_THRESH_FOR_RMP = 'RMP_ET';


// Water category
export const IS_WATER_FACTOR_DISADVANTAGED_M = 'M_WTR';
export const IS_WATER_EXCEED_ONE_OR_MORE_INDICATORS_M = 'M_WTR_EOMI';

export const WASTEWATER_PERCENTILE = 'WF_PFS';
export const IS_EXCEEDS_THRESH_FOR_WASTEWATER = 'WD_ET';


// Health category
export const IS_HEALTH_FACTOR_DISADVANTAGED_M = 'M_HLTH';
export const IS_HEALTH_EXCEED_ONE_OR_MORE_INDICATORS_M = 'M_HLTH_EOMI';

export const ASTHMA_PERCENTILE = 'AF_PFS';
export const IS_EXCEEDS_THRESH_FOR_ASTHMA = 'A_ET';

export const DIABETES_PERCENTILE = 'DF_PFS';
export const IS_EXCEEDS_THRESH_FOR_DIABETES = 'DB_ET';

export const HEART_PERCENTILE = 'HDF_PFS';
export const IS_EXCEEDS_THRESH_FOR_HEART_DISEASE = 'HD_ET';

export const LIFE_PERCENTILE = 'LLEF_PFS';
export const IS_EXCEEDS_THRESH_FOR_LOW_LIFE_EXP = 'LLE_ET';


// Workforce category
export const IS_WORKFORCE_FACTOR_DISADVANTAGED_M = 'M_WKFC';
export const IS_WORKFORCE_EXCEED_ONE_OR_MORE_INDICATORS_M = 'M_WKFC_EOMI';

export const LINGUISTIC_ISOLATION_PROPERTY_PERCENTILE = 'LIF_PFS';
export const IS_EXCEEDS_THRESH_FOR_LINGUISITIC_ISO = 'LISO_ET';

export const LOW_MEDIAN_INCOME_PERCENTILE = 'LMI_PFS';
export const IS_EXCEEDS_THRESH_FOR_LOW_MEDIAN_INCOME = 'LMI_ET';
export const ISLAND_AREAS_LOW_MEDIAN_INCOME_LOW_HS_EDU_PERCENTILE_FIELD= 'IALMILHSE_PFS';
export const IS_EXCEEDS_THRESH_FOR_ISLAND_AREA_LOW_MEDIAN_INCOME = 'IA_LMI_ET';

export const UNEMPLOYMENT_PROPERTY_PERCENTILE = 'UF_PFS';
export const IS_EXCEEDS_THRESH_FOR_UNEMPLOYMENT = 'UN_ET';
export const ISLAND_AREAS_UNEMPLOYMENT_LOW_HS_EDU_PERCENTILE_FIELD= 'IAULHSE_PFS';
export const IS_EXCEEDS_THRESH_FOR_ISLAND_AREA_UNEMPLOYMENT = 'IA_UN_ET';

export const POVERTY_BELOW_100_PERCENTILE = 'P100_PFS';
export const IS_EXCEEDS_THRESH_FOR_BELOW_100_POVERTY = 'POV_ET';
export const ISLAND_AREAS_POVERTY_LOW_HS_EDU_PERCENTILE_FIELD= 'IAPLHSE_PFS';
export const IS_EXCEEDS_THRESH_FOR_ISLAND_AREA_BELOW_100_POVERTY = 'IA_POV_ET';

export const IS_WORKFORCE_EXCEED_BOTH_SOCIO_INDICATORS_M = 'M_WKFC_EBSI';

export const HIGH_SCHOOL_PROPERTY_PERCENTILE = `HSEF`;
export const IS_LOW_HS_EDUCATION_LOW_HIGHER_ED_PRIORITIZED = 'LHE';
export const ISLAND_AREAS_HS_EDU_PERCENTAGE_FIELD= 'IAHSEF';
export const ISLAND_AREA_LOW_HS_EDU = 'IALHE';


// ********** MAP CONSTANTS ***************
// Source name constants
export const BASE_MAP_SOURCE_NAME = 'base-map-source-name';
export const HIGH_ZOOM_SOURCE_NAME = 'high-zoom-source-name';
export const LOW_ZOOM_SOURCE_NAME = 'low-zoom-source-name';

// Layer ID constants
export const SCORE_SOURCE_LAYER = 'blocks'; // The name of the layer within the tiles that contains the score
export const BASE_MAP_LAYER_ID = 'base-map-layer-id';
export const HIGH_ZOOM_LAYER_ID = 'high-zoom-layer-id';
export const PRIORITIZED_HIGH_ZOOM_LAYER_ID = 'prioritized-high-zoom-layer-id';
export const LOW_ZOOM_LAYER_ID = 'low-zoom-layer-id';
export const FEATURE_BORDER_LAYER_ID = 'feature-border-layer-id';
export const SELECTED_FEATURE_BORDER_LAYER_ID = 'selected-feature-border-layer-id';

// Used in layer filters:
export const SCORE_PROPERTY_LOW = 'M_SCORE';
export const SCORE_PROPERTY_HIGH = 'SM_PFS';

// Zoom
export const GLOBAL_MIN_ZOOM = 3;
export const GLOBAL_MAX_ZOOM = 22;

export const GLOBAL_MIN_ZOOM_LOW = 3;
export const GLOBAL_MAX_ZOOM_LOW = 5;

export const GLOBAL_MIN_ZOOM_HIGH = 5;
export const GLOBAL_MAX_ZOOM_HIGH = 11;

export const GLOBAL_MIN_ZOOM_FEATURE_BORDER = 5;
export const GLOBAL_MAX_ZOOM_FEATURE_BORDER = 22;

// Opacity
export const FEATURE_BORDER_OPACITY = 0.5;
export const HIGH_ZOOM_PRIORITIZED_FEATURE_FILL_OPACITY = 0.3;
export const LOW_ZOOM_PRIORITIZED_FEATURE_FILL_OPACITY = 0.6;
export const NON_PRIORITIZED_FEATURE_FILL_OPACITY = 0;

// Colors
export const FEATURE_BORDER_COLOR = '#4EA5CF';
export const SELECTED_FEATURE_BORDER_COLOR = '#1A4480';
export const PRIORITIZED_FEATURE_FILL_COLOR = '#768FB3';

// Widths
export const FEATURE_BORDER_WIDTH = 0.8;
export const SELECTED_FEATURE_BORDER_WIDTH = 5.0;

// Bounds - these bounds can be obtained by using the getCurrentMapBoundingBox() function in the map
export const GLOBAL_MAX_BOUNDS: LngLatBoundsLike = [
  [-180.118306, 5.499550],
  [-65.0, 83.162102],
];

export const LOWER_48_BOUNDS: LngLatBoundsLike = [
  [-134.943542, 1.301806],
  [-60.060729, 57.050462],
];

export const ALASKA_BOUNDS: LngLatBoundsLike = [
  [-183.856888, 50.875311],
  [-140.932617, 71.958797],
];

export const HAWAII_BOUNDS: LngLatBoundsLike = [
  [-161.174534, 17.652170],
  [-154.218940, 23.603623],
];

export const PUERTO_RICO_BOUNDS: LngLatBoundsLike = [
  [-67.945404, 17.88328],
  [-65.220703, 18.515683],
];

export const GUAM_BOUNDS: LngLatBoundsLike = [
  [-215.389709, 13.225909],
  [-215.040894, 13.663335],
];

export const MARIANA_ISLAND_BOUNDS: LngLatBoundsLike = [
  [-215.313449, 14.007801],
  [-213.742404, 19.750326],
];

export const AMERICAN_SAMOA_BOUNDS: LngLatBoundsLike = [
  [-172.589874, -15.548699],
  [-169.6433, -12.046934],
];

export const US_VIRGIN_ISLANDS_BOUNDS: LngLatBoundsLike = [
  [-65.5782239, 17.6739145],
  [-64.2704123, 18.7495796],
];

export const DEFAULT_CENTER = [33.4687126, -97.502136];


// USWDS Breakpoints
export const USWDS_BREAKPOINTS = {
  MOBILE_LG: 480,
  DESKTOP: 1024,
};
