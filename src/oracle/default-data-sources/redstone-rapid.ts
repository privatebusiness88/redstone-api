import { DataSourcesConfig } from "../redstone-data-feed";

const config: DataSourcesConfig = {
  "sources": [
    {
      "type": "cache-layer",
      "url": "https://api.redstone.finance",
      "providerId": "zYqPZuALSPa_f5Agvf8g2JHv94cqMn9aBtnH7GFHbuA",
      "evmSignerAddress": "0xf786a909D559F5Dee2dc6706d8e5A81728a39aE9"
    },
    {
      "type": "cache-layer",
      "url": "https://vwx3eni8c7.eu-west-1.awsapprunner.com",
      "providerId": "zYqPZuALSPa_f5Agvf8g2JHv94cqMn9aBtnH7GFHbuA",
      "evmSignerAddress": "0xf786a909D559F5Dee2dc6706d8e5A81728a39aE9"
    },
    {
      "type": "cache-layer",
      "url": "https://container-service-1.dv9sai71f4rsq.eu-central-1.cs.amazonlightsail.com",
      "providerId": "zYqPZuALSPa_f5Agvf8g2JHv94cqMn9aBtnH7GFHbuA",
      "evmSignerAddress": "0xf786a909D559F5Dee2dc6706d8e5A81728a39aE9"
    }
  ],
  "valueSelectionAlgorithm": "first-valid",
  "timeoutMilliseconds": 10000,
  "maxTimestampDiffMilliseconds": 150000,
  "preVerifySignatureOffchain": true
};

export default config;