# Met Office Fetch

A simple package to fetch data from the (https://metoffice.apiconnect.ibmcloud.com/metoffice/production/)[metoffice] API library.

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

# Authors

Ali Rezaee nlndipi@hotmail.com
