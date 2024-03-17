# synapsic

Introducing Synapsic, a cross-chain neural data marketplace & hub.

Our mission is to make healthcare more open and decentralized, allowing people to take control of their own medical data. Starting with brain activity, Synapsic is aiming to make a contribution to researchers, developers, domain enthusiasts and regular people into having access to a wide range of health data.

## How it works

We use our open-source EEG Scanner in order to obtain brainwave data from our testers in a .csv form, which we later convert and encrypt and put it on the blockchain, under a "Synapsic Brainscan" NFT.

The testers then have full control over their data, which they can later use on our data marketplace.

Through the data marketplace, researchers, AI developers or anyone interested in large sets of neural data can buy, sell and share useful batches, secured by ZK proofs through Noir and verified by our AI models through Galadriel (WIP).

We also use WorldID verification in our Next.js frontend app in order to ensure only real people are submitting their data to the marketplace, increasing security & confidence.

The platform could be extended to accept any type of neural data, like MRI, fMRI, CT, which would further improve their usefulness, but also any kind of medical data.

## Folder structure

- [`brain`](/brain): EEG data gathering and processing, including the Python script for data encryption and details about the OpenBCI EEG headband interface.

- [`client`](/client): Next.js application code for Synapsic, managing user interactions, data submission, and WorldID verification to ensure data authenticity.

- [`contracts`](/contracts): Smart contracts for Synapsic's blockchain functionality. It includes the brainscan NFT contract, which handles brainwave scan data operations, and the marketplace contract for medical data NFT transactions.

- [`galadriel`](/galadriel): Dedicated to our AI models (work in progress), Galadriel is set to verify and validate neural data batches before they are made available on the data marketplace.

- [`storage`](/storage): Storage module for Synapsic, intended to use Filecoin to store neural data in a decentralized way.

## Smart Contracts

For the hackathon, we have developed and deployed two contracts, as a proof of concept: the brainscan NFT contract, which mints and handles all operations for the brainwave scans, and the marketplace, which is handles all medical data NFT transactions.

Deployed addresses:

- Arbitrum: `0x2DC3A8a31902e707b10443216142872E2Dddf407`
- Base: `0x38dbc6D9E2B068f721D91BD920F7e03D995F3A78`
- Galadriel: `0xe5bC889C0C3677f871f35361F68cd735fd86427f`

For more details, check out the destined `contracts` directory.

## Hardware

For the EEG data gathering, we are using an OpenBCI EEG Headband with 8 electrodes, gathering frontal cortex, temporal, and parietal measurements through a OpenBCI Cyton Board neural interface.

For more details, please check out the `brain` section.

## Future plans

We aim to make Synapsic a fully-fledged medical data hub, making use of blockchains for their true power.

Reward mechanisms could be implemented, in which people are rewarded for uploading useful data through tokens or currency, thus incentivizing research & data gathering of rather under-funded yet important medical subfields.
