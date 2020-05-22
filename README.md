# Met Office Fetch

A simple package to fetch data from the [metoffice](https://metoffice.apiconnect.ibmcloud.com/metoffice/production/) API library.

# installation

Just do

```
npm install metoffice-fetch
```

or

```
yarn add metoffice-fetch
```

# Example

```js
import { FetchDailyData } from "metoffice-fetch";

const fetchData = async (latitude: number, longitude: number) => {
  try {
    const result = await FetchDailyData(
      {
        excludeParameterMetadata: true,
        includeLocationName: false,
        latitude,
        longitude,
      },
      {
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
      },
    );
    console.log(result.features[0].properties.timeSeries);
  } catch (error) {
    console.err(error);
  }
};
```

# References

| Function                              | Return Type                        | Description                   |
| ------------------------------------- | ---------------------------------- | ----------------------------- |
| FetchHourlyData(params, headers)      | Promise&#60;MetOfficeResponse&#60; | Fetches the hourly data       |
| FetchThreeHourlyData(params, headers) | Promise&#60;MetOfficeResponse&#60; | Fetches the Three Hourly data |
| FecthDailyData(params, headers)       | Promise&#60;MetOfficeResponse&#60; | Fetches the Daily Data        |

The inputs param for all these functions are the same:

```js
params: {
    excludeParameterMetadata?: boolean;
    includeLocationName?: boolean;
    latitude: number;
    longitude: number;
  },
headers: {
  clientId: string;
  clientSecret: string;
}
```

# Authors

Ali Rezaee nlndipi@hotmail.com
