import { DataSourcesConfig } from "../redstone-data-feed";

const config: DataSourcesConfig = {
  "sources": [
    {
      "type": "streamr",
      "streamrEndpointPrefix": "0x926e370fd53c23f8b71ad2b3217b227e41a92b12/redstone-oracle",
      "disabledForSinglePrices": true,
      "evmSignerAddress": "0x926e370fd53c23f8b71ad2b3217b227e41a92b12"
    },
    {
      "type": "streamr-storage",
      "streamrEndpointPrefix": "0x926e370fd53c23f8b71ad2b3217b227e41a92b12/redstone-oracle",
      "disabledForSinglePrices": true,
      "evmSignerAddress": "0x926e370fd53c23f8b71ad2b3217b227e41a92b12"
    },
    {
      "type": "cache-layer",
      "url": "https://api.redstone.finance",
      "providerId": "Yba8IVc_01bFxutKNJAZ7CmTD5AVi2GcWXf1NajPAsc",
      "evmSignerAddress": "0x926E370fD53c23f8B71ad2B3217b227E41A92b12"
    },
    {
      "type": "cache-layer",
      "url": "https://vwx3eni8c7.eu-west-1.awsapprunner.com",
      "providerId": "Yba8IVc_01bFxutKNJAZ7CmTD5AVi2GcWXf1NajPAsc",
      "evmSignerAddress": "0x926E370fD53c23f8B71ad2B3217b227E41A92b12"
    }
  ],
  "valueSelectionAlgorithm": "first-valid",
  "timeoutMilliseconds": 10000,
  "maxTimestampDiffMilliseconds": 150000,
  "preVerifySignatureOffchain": true
};

export default config;