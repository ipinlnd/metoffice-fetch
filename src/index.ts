import fetch from "node-fetch";

export interface DailyData {
  time: string;
  midday10MWindSpeed: number;
  midnight10MWindSpeed: number;
  midday10MWindDirection: number;
  midnight10MWindDirection: number;
  midday10MWindGust: number;
  midnight10MWindGust: number;
  middayVisibility: number;
  midnightVisibility: number;
  middayRelativeHumidity: number;
  midnightRelativeHumidity: number;
  middayMslp: number;
  midnightMslp: number;
  maxUvIndex: number;
  daySignificantWeatherCode: number;
  nightSignificantWeatherCode: number;
  dayMaxScreenTemperature: number;
  nightMinScreenTemperature: number;
  dayUpperBoundMaxTemp: number;
  nightUpperBoundMinTemp: number;
  dayLowerBoundMaxTemp: number;
  nightLowerBoundMinTemp: number;
  dayMaxFeelsLikeTemp: number;
  nightMinFeelsLikeTemp: number;
  dayUpperBoundMaxFeelsLikeTemp: number;
  nightUpperBoundMinFeelsLikeTemp: number;
  dayLowerBoundMaxFeelsLikeTemp: number;
  nightLowerBoundMinFeelsLikeTemp: number;
  dayProbabilityOfPrecipitation: number;
  nightProbabilityOfPrecipitation: number;
  dayProbabilityOfSnow: number;
  nightProbabilityOfSnow: number;
  dayProbabilityOfHeavySnow: number;
  nightProbabilityOfHeavySnow: number;
  dayProbabilityOfRain: number;
  nightProbabilityOfRain: number;
  dayProbabilityOfHeavyRain: number;
  nightProbabilityOfHeavyRain: number;
  dayProbabilityOfHail: number;
  nightProbabilityOfHail: number;
  dayProbabilityOfSferics: number;
  nightProbabilityOfSferics: number;
}

export interface ThreeHourlyData {
  time: string;
  maxScreenAirTemp: number;
  minScreenAirTemp: number;
  max10mWindGust: number;
  significantWeatherCode: number;
  totalPrecipAmount: number;
  totalSnowAmount: number;
  windSpeed10m: number;
  windDirectionFrom10m: number;
  windGustSpeed10m: number;
  visibility: number;
  mslp: number;
  screenRelativeHumidity: number;
  feelsLikeTemp: number;
  uvIndex: number;
  probOfPrecipitation: number;
  probOfSnow: number;
  probOfHeavySnow: number;
  probOfRain: number;
  probOfHeavyRain: number;
  probOfHail: number;
  probOfSferics: number;
}

export interface HourlyData {
  time: string;
  screenTemperature: number;
  maxScreenAirTemp: number;
  minScreenAirTemp: number;
  screenDewPointTemperature: number;
  feelsLikeTemperature: number;
  windSpeed10m: number;
  windDirectionFrom10m: number;
  windGustSpeed10m: number;
  max10mWindGust: number;
  visibility: number;
  screenRelativeHumidity: number;
  mslp: number;
  uvIndex: number;
  significantWeatherCode: number;
  precipitationRate: number;
  totalPrecipAmount: number;
  totalSnowAmount: number;
  probOfPrecipitation: number;
}

export interface ParameterMetaData {
  type: string;
  description: string;
  unit: {
    label: string;
    symbol: {
      value: string;
      type: string;
    };
  };
}

export interface MetOfficeResponse {
  type: string;
  features: {
    type: string;
    geometry: {
      type: string;
      coordinates: number[];
    };
    properties: {
      location?: {
        name: string;
        licence: string;
      };
      requestPointDistance: number;
      modelrunDate: string;
      timeSeries: DailyData[] | ThreeHourlyData[] | HourlyData[];
    };
  }[];
  parameters?: {
    [key: string]: ParameterMetaData;
  }[];
}

export interface InputParameters {
  excludeParameterMetadata?: boolean;
  includeLocationName?: boolean;
  latitude: number;
  longitude: number;
}

export interface InputHeaders {
  clientId: string;
  clientSecret: string;
}

export const FetchHourlyData = async (
  params: InputParameters,
  headers: InputHeaders,
): Promise<MetOfficeResponse> => {
  const response = await fetch(
    `https://api-metoffice.apiconnect.ibmcloud.com/metoffice/production/v0/forecasts/point/hourly?excludeParameterMetadata=${
      params.excludeParameterMetadata ? params.excludeParameterMetadata : true
    }&includeLocationName=${
      params.includeLocationName ? params.includeLocationName : true
    }&latitude=${params.latitude}&longitude=${params.longitude}`,
    {
      headers: {
        "x-ibm-client-id": headers.clientId,
        "x-ibm-client-secret": headers.clientSecret,
      },
    },
  );

  if (response.status === 200) {
    const result: MetOfficeResponse = await response.json();
    return result;
  } else {
    const result: any = await response.json();
    throw new Error(response.status + " " + result.message);
  }
};

export const FetchThreeHourlyData = async (
  params: InputParameters,
  headers: InputHeaders,
): Promise<MetOfficeResponse> => {
  const response = await fetch(
    `https://api-metoffice.apiconnect.ibmcloud.com/metoffice/production/v0/forecasts/point/three-hourly?excludeParameterMetadata=${
      params.excludeParameterMetadata ? params.excludeParameterMetadata : true
    }&includeLocationName=${
      params.includeLocationName ? params.includeLocationName : true
    }&latitude=${params.latitude}&longitude=${params.longitude}`,
    {
      headers: {
        "x-ibm-client-id": headers.clientId,
        "x-ibm-client-secret": headers.clientSecret,
      },
    },
  );

  if (response.status === 200) {
    const result: MetOfficeResponse = await response.json();
    return result;
  } else {
    const result: any = await response.json();
    throw new Error(response.status + " " + result.message);
  }
};

export const FetchDailyData = async (
  params: InputParameters,
  headers: InputHeaders,
): Promise<MetOfficeResponse> => {
  const response = await fetch(
    `https://api-metoffice.apiconnect.ibmcloud.com/metoffice/production/v0/forecasts/point/daily?excludeParameterMetadata=${
      params.excludeParameterMetadata ? params.excludeParameterMetadata : true
    }&includeLocationName=${
      params.includeLocationName ? params.includeLocationName : true
    }&latitude=${params.latitude}&longitude=${params.longitude}`,
    {
      headers: {
        "x-ibm-client-id": headers.clientId,
        "x-ibm-client-secret": headers.clientSecret,
      },
    },
  );

  if (response.status === 200) {
    const result: MetOfficeResponse = await response.json();
    return result;
  } else {
    const result: any = await response.json();
    throw new Error(response.status + " " + result.message);
  }
};
