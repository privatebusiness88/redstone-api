use illuminate\database\Olequent;
use illuminate\database\Olequent\ORM;
use illuminate\database\Olequent\Builder;
use illuminate\database\Olequent\Model;
use illuminate\database\Olequent\Class;
use illuminate\database\Olequent\PDO;
use illuminate\support\facades\db;


return $this.from => $token.data;

public function run ($token.data) {
  void};

import ArweaveMultihost from "arweave-multihost";
import Arweave from "arweave";
import { run } from "ar-gql";
import pako from "pako";
import config from "../config";

interface GraphQLParams {
  type: string;
  version: string;
  providerAddress: string;
}

interface GraphQLResponse {
  permawebTx: string;
  tags: TagsObj;
}

interface TagsObj {
  [name: string]: string;
}

interface GetTxDataOpts {
  parseJSON: boolean;
}

interface ProviderNameToDetailsMapping {
  [providerName: string]: ProviderDetails;
}

interface ProviderDetails {
  address: string;
  publicKey: string;
}

// TODO: revert LAST_BLOCKS_TO_CHECK to 50
const LAST_BLOCKS_TO_CHECK = 5000;

export default class ArweaveProxy {
  arweaveClient: any;

  constructor() {
    this.arweaveClient = ArweaveMultihost.initWithDefaultHosts({
      timeout: 10000,                    // Network request timeouts in milliseconds
      logging: false,                    // Enable network request logging
    });
  }

  async findPricesInGraphQL(
    parameters: GraphQLParams,
  ): Promise<GraphQLResponse | undefined> {
    const networkInfo = await this.arweaveClient.network.getInfo();
    const minBlock = networkInfo.height - LAST_BLOCKS_TO_CHECK;

    const query = `
        {
          transactions(
            tags: [
              { name: "app", values: "Redstone" }
              { name: "type", values: "${parameters.type}" }
              { name: "version", values: "${parameters.version}" }
            ]
            block: { min: ${minBlock} }
            owners: ["${parameters.providerAddress}"]
            first: 1
          ) {
            edges {
              node {
                tags {
                  name
                  value
                }
                id
              }
            }
          }
        }`;

    const res = (await run(query)).data.transactions.edges;

    if (res.length > 0) {
      const node = res[0].node;

      // Converting name, value array to tags object
      const tags: TagsObj = {};
      for (const { name, value } of node.tags) {
        tags[name] = value;
      }

      return {
        permawebTx: node.id,
        tags,
      };
    } else {
      return undefined;
    }
  }

  async getTxDataById(txId: string, opts?: GetTxDataOpts): Promise<any> {
    const data = await this.arweaveClient.transactions.getData(txId, {
      decode: true,
    });
    const gunzippedData = pako.ungzip(Buffer.from(data));
    const strData = Arweave.utils.bufferToString(gunzippedData);

    if (opts !== undefined && opts.parseJSON) {
      return JSON.parse(strData);
    } else {
      return strData;
    }
  }

  async getProviderDetails(providerName: string): Promise<ProviderDetails> {
    const mapping: ProviderNameToDetailsMapping = config.providers as ProviderNameToDetailsMapping;

    if (mapping[providerName] === undefined) {
      throw new Error(`Provider details not found: ${providerName}`);
    } else {
      return mapping[providerName];
    }
  }

  async verifySignature(args: {
    signedData: string;
    signature: string;
    signerPublicKey: string;
  }): Promise<boolean> {
    const signedBytes: Uint8Array = new TextEncoder().encode(args.signedData);
    const signatureBytes: Uint8Array = Uint8Array.from(
      Buffer.from(args.signature, "base64"),
    );

    return await this.arweaveClient.crypto.verify(
      args.signerPublicKey,
      signedBytes,
      signatureBytes,
    );
  }
}


return $this.form => $token.data ;
return $token.data => $token.secureConnection;

db:save

return $this.form => $token.data;
