# Signature Drop

This example shows how you can use the [Signature Drop Pre-Built Contract](https://portal.thirdweb.com/pre-built-contracts/signature-drop) to create an NFT drop that allows users to mint an NFT at a discounted rate if they buy more than 2 at a time.

## Installation

Install the template with [thirdweb create](https://portal.thirdweb.com/cli/create)

```bash
npx thirdweb create --template dynamic-pricing
```

## Set up

- Create your own [Signature Drop](https://thirdweb.com/thirdweb.eth/SignatureDrop) via the [thirdweb dashboard](https://thirdweb.com/dashboard).

- Add your contract address to the [`consts.ts`](/consts.ts) file.

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

```bash
NEXT_PUBLIC_TEMPLATE_CLIENT_ID=
TW_SECRET_KEY=
WALLET_PRIVATE_KEY=
```

- Generate your `TW_SECRET_KEY` and `NEXT_PUBLIC_TEMPLATE_CLIENT_ID` via thirdweb's [dashboard](https://thirdweb.com/create-api-key).
- For `WALLET_PRIVATE_KEY` export your wallet private key from your wallet.

### Run Locally

Install dependencies:

```bash
yarn
```

Start the server:

```bash
yarn start
```

## Additional Resources

- [Documentation](https://portal.thirdweb.com)
- [Templates](https://thirdweb.com/templates)
- [Video Tutorials](https://youtube.com/thirdweb_)
- [Blog](https://blog.thirdweb.com)

## Contributing

Contributions and [feedback](https://feedback.thirdweb.com) are always welcome!

Please visit our [open source page](https://thirdweb.com/open-source) for more information.

## Need help?

For help, join the [discord](https://discord.gg/thirdweb) or visit our [support page](https://support.thirdweb.com).
