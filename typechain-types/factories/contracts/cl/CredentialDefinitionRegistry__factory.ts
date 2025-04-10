/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  CredentialDefinitionRegistry,
  CredentialDefinitionRegistryInterface,
} from "../../../contracts/cl/CredentialDefinitionRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
    ],
    name: "CredentialDefinitionAlreadyExist",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
    ],
    name: "CredentialDefinitionNotFound",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "ERC1967InvalidImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1967NonPayable",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "FieldRequired",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
    ],
    name: "InvalidIssuerId",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
    ],
    name: "IssuerHasBeenDeactivated",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
    ],
    name: "IssuerNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [],
    name: "PackedPtrLen__LenOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "PackedPtrLen__PtrOverflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "SenderIsNotIssuerDidOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "UUPSUnauthorizedCallContext",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
    ],
    name: "UUPSUnsupportedProxiableUUID",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "credDefType",
        type: "string",
      },
    ],
    name: "UnsupportedCredentialDefinitionType",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "credentialDefinitionId",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "CredentialDefinitionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "UPGRADE_INTERFACE_VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "id",
            type: "string",
          },
          {
            internalType: "string",
            name: "issuerId",
            type: "string",
          },
          {
            internalType: "string",
            name: "schemaId",
            type: "string",
          },
          {
            internalType: "string",
            name: "credDefType",
            type: "string",
          },
          {
            internalType: "string",
            name: "tag",
            type: "string",
          },
          {
            internalType: "string",
            name: "value",
            type: "string",
          },
        ],
        internalType: "struct CredentialDefinition",
        name: "credDef",
        type: "tuple",
      },
    ],
    name: "createCredentialDefinition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "upgradeControlAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "didResolverAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "schemaRegistryAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
    ],
    name: "resolveCredentialDefinition",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "string",
                name: "id",
                type: "string",
              },
              {
                internalType: "string",
                name: "issuerId",
                type: "string",
              },
              {
                internalType: "string",
                name: "schemaId",
                type: "string",
              },
              {
                internalType: "string",
                name: "credDefType",
                type: "string",
              },
              {
                internalType: "string",
                name: "tag",
                type: "string",
              },
              {
                internalType: "string",
                name: "value",
                type: "string",
              },
            ],
            internalType: "struct CredentialDefinition",
            name: "credDef",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "created",
                type: "uint256",
              },
            ],
            internalType: "struct CredentialDefinitionMetadata",
            name: "metadata",
            type: "tuple",
          },
        ],
        internalType: "struct CredentialDefinitionWithMetadata",
        name: "credDefWithMetadata",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1681525034801561004357600080fd5b50608051612d3861006d60003960008181610d8901528181610dde015261101c0152612d386000f3fe6080604052600436106100555760003560e01c80634f1ef2861461005a57806352d1902d146100765780636170c48a146100a15780639c35941a146100de578063ad3cb1cc14610107578063c0c53b8b14610132575b600080fd5b610074600480360381019061006f9190611a94565b61015b565b005b34801561008257600080fd5b5061008b61017a565b6040516100989190611b09565b60405180910390f35b3480156100ad57600080fd5b506100c860048036038101906100c39190611b84565b6101ad565b6040516100d59190611d6e565b60405180910390f35b3480156100ea57600080fd5b5061010560048036038101906101009190611db4565b610635565b005b34801561011357600080fd5b5061011c610b92565b6040516101299190611e47565b60405180910390f35b34801561013e57600080fd5b5061015960048036038101906101549190611e69565b610bcb565b005b610163610d87565b61016c82610e6d565b6101768282610efb565b5050565b600061018461101a565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b6101b561186d565b82828080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050600060038260405161020c9190611ef8565b9081526020016040518091039020600601600001540361026357806040517f05c96b5300000000000000000000000000000000000000000000000000000000815260040161025a9190611e47565b60405180910390fd5b60038484604051610275929190611f34565b9081526020016040518091039020604051806040016040529081600082016040518060c00160405290816000820180546102ae90611f7c565b80601f01602080910402602001604051908101604052809291908181526020018280546102da90611f7c565b80156103275780601f106102fc57610100808354040283529160200191610327565b820191906000526020600020905b81548152906001019060200180831161030a57829003601f168201915b5050505050815260200160018201805461034090611f7c565b80601f016020809104026020016040519081016040528092919081815260200182805461036c90611f7c565b80156103b95780601f1061038e576101008083540402835291602001916103b9565b820191906000526020600020905b81548152906001019060200180831161039c57829003601f168201915b505050505081526020016002820180546103d290611f7c565b80601f01602080910402602001604051908101604052809291908181526020018280546103fe90611f7c565b801561044b5780601f106104205761010080835404028352916020019161044b565b820191906000526020600020905b81548152906001019060200180831161042e57829003601f168201915b5050505050815260200160038201805461046490611f7c565b80601f016020809104026020016040519081016040528092919081815260200182805461049090611f7c565b80156104dd5780601f106104b2576101008083540402835291602001916104dd565b820191906000526020600020905b8154815290600101906020018083116104c057829003601f168201915b505050505081526020016004820180546104f690611f7c565b80601f016020809104026020016040519081016040528092919081815260200182805461052290611f7c565b801561056f5780601f106105445761010080835404028352916020019161056f565b820191906000526020600020905b81548152906001019060200180831161055257829003601f168201915b5050505050815260200160058201805461058890611f7c565b80601f01602080910402602001604051908101604052809291908181526020018280546105b490611f7c565b80156106015780601f106105d657610100808354040283529160200191610601565b820191906000526020600020905b8154815290600101906020018083116105e457829003601f168201915b5050505050815250508152602001600682016040518060200160405290816000820154815250508152505091505092915050565b8080600001906106459190611fbc565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050600060038260405161069a9190611ef8565b908152602001604051809103902060060160000154146106f157806040517f41d617b90000000000000000000000000000000000000000000000000000000081526004016106e89190611e47565b60405180910390fd5b8180604001906107019190611fbc565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bd7fc5eb826040518263ffffffff1660e01b815260040161079f9190611e47565b6000604051808303816000875af11580156107be573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906107e79190612397565b508280602001906107f89190611fbc565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166366874f25826040518263ffffffff1660e01b81526004016108969190611e47565b608060405180830381865afa9250505080156108d057506040513d601f19601f820116820180604052508101906108cd91906124a5565b60015b6109bb573d8060008114610900576040519150601f19603f3d011682016040523d82523d6000602084013e610905565b606091505b50610917816330d510ea60e01b6110a1565b1561095957816040517f4c92543b0000000000000000000000000000000000000000000000000000000081526004016109509190611e47565b60405180910390fd5b61096a816330b3c77660e01b6110a1565b156109ac57816040517f11b2da540000000000000000000000000000000000000000000000000000000081526004016109a39190611e47565b60405180910390fd5b6109b581611104565b50610a7e565b806000015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a35573381600001516040517fe69c46a3000000000000000000000000000000000000000000000000000000008152600401610a2c9291906124e1565b60405180910390fd5b806060015115610a7c57816040517fa12876ae000000000000000000000000000000000000000000000000000000008152600401610a739190611e47565b60405180910390fd5b505b610a9084610a8b906126c2565b611110565b610aa284610a9d906126c2565b6111a4565b610ab484610aaf906126c2565b6111f4565b836003858060000190610ac79190611fbc565b604051610ad5929190611f34565b90815260200160405180910390206000018181610af29190612a36565b905050426003858060000190610b089190611fbc565b604051610b16929190611f34565b9081526020016040518091039020600601600001819055503373ffffffffffffffffffffffffffffffffffffffff167f67a8d5704b8f46127dbda538dafb9c9529e5b4b7a7e92f22c08b212eb7035129858060000190610b769190611fbc565b604051610b84929190612a71565b60405180910390a250505050565b6040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b60016000610bd7611244565b90508060000160089054906101000a900460ff1680610c2257508167ffffffffffffffff168160000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1610155b15610c59576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b818160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060018160000160086101000a81548160ff021916908315150217905550610caa8561126c565b83600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008160000160086101000a81548160ff0219169083151502179055507fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d282604051610d789190612ab8565b60405180910390a15050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161480610e3457507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610e1b6112b7565b73ffffffffffffffffffffffffffffffffffffffff1614155b15610e6b576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663574a81d730836040518363ffffffff1660e01b8152600401610ec89291906124e1565b60006040518083038186803b158015610ee057600080fd5b505afa158015610ef4573d6000803e3d6000fd5b5050505050565b8173ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610f6357506040513d601f19601f82011682018060405250810190610f609190612aff565b60015b610fa457816040517f4c9c8ce3000000000000000000000000000000000000000000000000000000008152600401610f9b9190612b2c565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b811461100b57806040517faa1d49a40000000000000000000000000000000000000000000000000000000081526004016110029190611b09565b60405180910390fd5b611015838361130e565b505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161461109f576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b600080838060200190518101906110b89190612b9f565b9050827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505092915050565b60208101815182018082fd5b61115c6040518060400160405280600281526020017f434c000000000000000000000000000000000000000000000000000000000000815250826060015161138190919063ffffffff16565b6111a15780606001516040517f9c08f5620000000000000000000000000000000000000000000000000000000081526004016111989190611e47565b60405180910390fd5b50565b6111b181608001516113ae565b156111f1576040517f4efdf9770000000000000000000000000000000000000000000000000000000081526004016111e890612c18565b60405180910390fd5b50565b6112018160a001516113ae565b15611241576040517f4efdf97700000000000000000000000000000000000000000000000000000000815260040161123890612c84565b60405180910390fd5b50565b60007ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00905090565b6112746113c2565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60006112e57f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611402565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6113178261140c565b8173ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a26000815111156113745761136e82826114d9565b5061137d565b61137c61155d565b5b5050565b60006113a661138f8361159a565b6113988561159a565b6115ac90919063ffffffff16565b905092915050565b6000806113ba836115d9565b149050919050565b6113ca6115e4565b611400576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6000819050919050565b60008173ffffffffffffffffffffffffffffffffffffffff163b0361146857806040517f4c9c8ce300000000000000000000000000000000000000000000000000000000815260040161145f9190612b2c565b60405180910390fd5b806114957f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611402565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606000808473ffffffffffffffffffffffffffffffffffffffff16846040516115039190612ceb565b600060405180830381855af49150503d806000811461153e576040519150601f19603f3d011682016040523d82523d6000602084013e611543565b606091505b5091509150611553858383611604565b9250505092915050565b6000341115611598576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60006115a582611693565b9050919050565b60006115d16115ba836116af565b6115c3856116af565b6116b990919063ffffffff16565b905092915050565b600081519050919050565b60006115ee611244565b60000160089054906101000a900460ff16905090565b6060826116195761161482611705565b61168b565b60008251148015611641575060008473ffffffffffffffffffffffffffffffffffffffff163b145b1561168357836040517f9996b31500000000000000000000000000000000000000000000000000000000815260040161167a9190612b2c565b60405180910390fd5b81905061168c565b5b9392505050565b6000806020830190506116a781845161174a565b915050919050565b6000819050919050565b6000806116c58461175e565b90506116d08361175e565b81146116e05760009150506116ff565b6116fb6116ec8561177c565b6116f58561177c565b8361178a565b9150505b92915050565b6000815111156117185780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611756838361179c565b905092915050565b60006fffffffffffffffffffffffffffffffff801682169050919050565b6000608082901c9050919050565b60008183208285201490509392505050565b60006117a883836117b0565b905092915050565b60006fffffffffffffffffffffffffffffffff80168311156117fe576040517ffee7506f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6fffffffffffffffffffffffffffffffff801682111561184a576040517f3b6b098d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6fffffffffffffffffffffffffffffffff80168216608084901b17905092915050565b6040518060400160405280611880611893565b815260200161188d6118c9565b81525090565b6040518060c001604052806060815260200160608152602001606081526020016060815260200160608152602001606081525090565b6040518060200160405280600081525090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061191b826118f0565b9050919050565b61192b81611910565b811461193657600080fd5b50565b60008135905061194881611922565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6119a182611958565b810181811067ffffffffffffffff821117156119c0576119bf611969565b5b80604052505050565b60006119d36118dc565b90506119df8282611998565b919050565b600067ffffffffffffffff8211156119ff576119fe611969565b5b611a0882611958565b9050602081019050919050565b82818337600083830152505050565b6000611a37611a32846119e4565b6119c9565b905082815260208101848484011115611a5357611a52611953565b5b611a5e848285611a15565b509392505050565b600082601f830112611a7b57611a7a61194e565b5b8135611a8b848260208601611a24565b91505092915050565b60008060408385031215611aab57611aaa6118e6565b5b6000611ab985828601611939565b925050602083013567ffffffffffffffff811115611ada57611ad96118eb565b5b611ae685828601611a66565b9150509250929050565b6000819050919050565b611b0381611af0565b82525050565b6000602082019050611b1e6000830184611afa565b92915050565b600080fd5b600080fd5b60008083601f840112611b4457611b4361194e565b5b8235905067ffffffffffffffff811115611b6157611b60611b24565b5b602083019150836001820283011115611b7d57611b7c611b29565b5b9250929050565b60008060208385031215611b9b57611b9a6118e6565b5b600083013567ffffffffffffffff811115611bb957611bb86118eb565b5b611bc585828601611b2e565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611c0b578082015181840152602081019050611bf0565b60008484015250505050565b6000611c2282611bd1565b611c2c8185611bdc565b9350611c3c818560208601611bed565b611c4581611958565b840191505092915050565b600060c0830160008301518482036000860152611c6d8282611c17565b91505060208301518482036020860152611c878282611c17565b91505060408301518482036040860152611ca18282611c17565b91505060608301518482036060860152611cbb8282611c17565b91505060808301518482036080860152611cd58282611c17565b91505060a083015184820360a0860152611cef8282611c17565b9150508091505092915050565b6000819050919050565b611d0f81611cfc565b82525050565b602082016000820151611d2b6000850182611d06565b50505050565b60006040830160008301518482036000860152611d4e8282611c50565b9150506020830151611d636020860182611d15565b508091505092915050565b60006020820190508181036000830152611d888184611d31565b905092915050565b600080fd5b600060c08284031215611dab57611daa611d90565b5b81905092915050565b600060208284031215611dca57611dc96118e6565b5b600082013567ffffffffffffffff811115611de857611de76118eb565b5b611df484828501611d95565b91505092915050565b600082825260208201905092915050565b6000611e1982611bd1565b611e238185611dfd565b9350611e33818560208601611bed565b611e3c81611958565b840191505092915050565b60006020820190508181036000830152611e618184611e0e565b905092915050565b600080600060608486031215611e8257611e816118e6565b5b6000611e9086828701611939565b9350506020611ea186828701611939565b9250506040611eb286828701611939565b9150509250925092565b600081905092915050565b6000611ed282611bd1565b611edc8185611ebc565b9350611eec818560208601611bed565b80840191505092915050565b6000611f048284611ec7565b915081905092915050565b6000611f1b8385611ebc565b9350611f28838584611a15565b82840190509392505050565b6000611f41828486611f0f565b91508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611f9457607f821691505b602082108103611fa757611fa6611f4d565b5b50919050565b600080fd5b600080fd5b600080fd5b60008083356001602003843603038112611fd957611fd8611fad565b5b80840192508235915067ffffffffffffffff821115611ffb57611ffa611fb2565b5b60208301925060018202360383131561201757612016611fb7565b5b509250929050565b600080fd5b600080fd5b600067ffffffffffffffff82111561204457612043611969565b5b61204d82611958565b9050602081019050919050565b600061206d61206884612029565b6119c9565b90508281526020810184848401111561208957612088611953565b5b612094848285611bed565b509392505050565b600082601f8301126120b1576120b061194e565b5b81516120c184826020860161205a565b91505092915050565b600067ffffffffffffffff8211156120e5576120e4611969565b5b602082029050602081019050919050565b6000612109612104846120ca565b6119c9565b9050808382526020820190506020840283018581111561212c5761212b611b29565b5b835b8181101561217357805167ffffffffffffffff8111156121515761215061194e565b5b80860161215e898261209c565b8552602085019450505060208101905061212e565b5050509392505050565b600082601f8301126121925761219161194e565b5b81516121a28482602086016120f6565b91505092915050565b600060a082840312156121c1576121c061201f565b5b6121cb60a06119c9565b9050600082015167ffffffffffffffff8111156121eb576121ea612024565b5b6121f78482850161209c565b600083015250602082015167ffffffffffffffff81111561221b5761221a612024565b5b6122278482850161209c565b602083015250604082015167ffffffffffffffff81111561224b5761224a612024565b5b6122578482850161209c565b604083015250606082015167ffffffffffffffff81111561227b5761227a612024565b5b6122878482850161209c565b606083015250608082015167ffffffffffffffff8111156122ab576122aa612024565b5b6122b78482850161217d565b60808301525092915050565b6122cc81611cfc565b81146122d757600080fd5b50565b6000815190506122e9816122c3565b92915050565b6000602082840312156123055761230461201f565b5b61230f60206119c9565b9050600061231f848285016122da565b60008301525092915050565b6000604082840312156123415761234061201f565b5b61234b60406119c9565b9050600082015167ffffffffffffffff81111561236b5761236a612024565b5b612377848285016121ab565b600083015250602061238b848285016122ef565b60208301525092915050565b6000602082840312156123ad576123ac6118e6565b5b600082015167ffffffffffffffff8111156123cb576123ca6118eb565b5b6123d78482850161232b565b91505092915050565b6000815190506123ef81611922565b92915050565b60008115159050919050565b61240a816123f5565b811461241557600080fd5b50565b60008151905061242781612401565b92915050565b6000608082840312156124435761244261201f565b5b61244d60806119c9565b9050600061245d848285016123e0565b6000830152506020612471848285016122da565b6020830152506040612485848285016122da565b604083015250606061249984828501612418565b60608301525092915050565b6000608082840312156124bb576124ba6118e6565b5b60006124c98482850161242d565b91505092915050565b6124db81611910565b82525050565b60006040820190506124f660008301856124d2565b61250360208301846124d2565b9392505050565b600061251d61251884612029565b6119c9565b90508281526020810184848401111561253957612538611953565b5b612544848285611a15565b509392505050565b600082601f8301126125615761256061194e565b5b813561257184826020860161250a565b91505092915050565b600060c082840312156125905761258f61201f565b5b61259a60c06119c9565b9050600082013567ffffffffffffffff8111156125ba576125b9612024565b5b6125c68482850161254c565b600083015250602082013567ffffffffffffffff8111156125ea576125e9612024565b5b6125f68482850161254c565b602083015250604082013567ffffffffffffffff81111561261a57612619612024565b5b6126268482850161254c565b604083015250606082013567ffffffffffffffff81111561264a57612649612024565b5b6126568482850161254c565b606083015250608082013567ffffffffffffffff81111561267a57612679612024565b5b6126868482850161254c565b60808301525060a082013567ffffffffffffffff8111156126aa576126a9612024565b5b6126b68482850161254c565b60a08301525092915050565b60006126ce368361257a565b9050919050565b600082905092915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026127427fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612705565b61274c8683612705565b95508019841693508086168417925050509392505050565b6000819050919050565b600061278961278461277f84611cfc565b612764565b611cfc565b9050919050565b6000819050919050565b6127a38361276e565b6127b76127af82612790565b848454612712565b825550505050565b600090565b6127cc6127bf565b6127d781848461279a565b505050565b5b818110156127fb576127f06000826127c4565b6001810190506127dd565b5050565b601f82111561284057612811816126e0565b61281a846126f5565b81016020851015612829578190505b61283d612835856126f5565b8301826127dc565b50505b505050565b600082821c905092915050565b600061286360001984600802612845565b1980831691505092915050565b600061287c8383612852565b9150826002028217905092915050565b61289683836126d5565b67ffffffffffffffff8111156128af576128ae611969565b5b6128b98254611f7c565b6128c48282856127ff565b6000601f8311600181146128f357600084156128e1578287013590505b6128eb8582612870565b865550612953565b601f198416612901866126e0565b60005b8281101561292957848901358255600182019150602085019450602081019050612904565b868310156129465784890135612942601f891682612852565b8355505b6001600288020188555050505b50505050505050565b61296783838361288c565b505050565b600081016000830161297e8185611fbc565b61298981838661295c565b50505050600181016020830161299f8185611fbc565b6129aa81838661295c565b5050505060028101604083016129c08185611fbc565b6129cb81838661295c565b5050505060038101606083016129e18185611fbc565b6129ec81838661295c565b505050506004810160808301612a028185611fbc565b612a0d81838661295c565b505050506005810160a08301612a238185611fbc565b612a2e81838661295c565b505050505050565b612a40828261296c565b5050565b6000612a508385611dfd565b9350612a5d838584611a15565b612a6683611958565b840190509392505050565b60006020820190508181036000830152612a8c818486612a44565b90509392505050565b600067ffffffffffffffff82169050919050565b612ab281612a95565b82525050565b6000602082019050612acd6000830184612aa9565b92915050565b612adc81611af0565b8114612ae757600080fd5b50565b600081519050612af981612ad3565b92915050565b600060208284031215612b1557612b146118e6565b5b6000612b2384828501612aea565b91505092915050565b6000602082019050612b4160008301846124d2565b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612b7c81612b47565b8114612b8757600080fd5b50565b600081519050612b9981612b73565b92915050565b600060208284031215612bb557612bb46118e6565b5b6000612bc384828501612b8a565b91505092915050565b7f7461670000000000000000000000000000000000000000000000000000000000600082015250565b6000612c02600383611dfd565b9150612c0d82612bcc565b602082019050919050565b60006020820190508181036000830152612c3181612bf5565b9050919050565b7f76616c7565000000000000000000000000000000000000000000000000000000600082015250565b6000612c6e600583611dfd565b9150612c7982612c38565b602082019050919050565b60006020820190508181036000830152612c9d81612c61565b9050919050565b600081519050919050565b600081905092915050565b6000612cc582612ca4565b612ccf8185612caf565b9350612cdf818560208601611bed565b80840191505092915050565b6000612cf78284612cba565b91508190509291505056fea2646970667358221220f1f93791b51a1f292d3f96a4979d75c986cb0b297684620ace0866bbbe32049d64736f6c63430008180033";

type CredentialDefinitionRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CredentialDefinitionRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CredentialDefinitionRegistry__factory extends ContractFactory {
  constructor(...args: CredentialDefinitionRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      CredentialDefinitionRegistry & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): CredentialDefinitionRegistry__factory {
    return super.connect(runner) as CredentialDefinitionRegistry__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CredentialDefinitionRegistryInterface {
    return new Interface(_abi) as CredentialDefinitionRegistryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): CredentialDefinitionRegistry {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as CredentialDefinitionRegistry;
  }
}
