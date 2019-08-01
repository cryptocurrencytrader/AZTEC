import aztec from 'aztec.js';
import {
    createNote,
    createNotes,
} from '~utils/note';
import {
    randomSumArray,
} from '~utils/random';
import Web3Service from '~client/services/Web3Service';
import ContractError from '~client/utils/ContractError';
import validateAccount from '../utils/validateAccount';

const {
    MintProof,
} = aztec;

export default async function proveMint({
    assetAddress,
    amount,
    numberOfOutputNotes,
    sender,
}) {
    const notesOwner = await validateAccount(sender, true);

    let confidentialTotalMinted;
    try {
        ({
            confidentialTotalMinted,
        } = await Web3Service
            .useContract('ACE')
            .method('getRegistry')
            .call(assetAddress));
    } catch (error) {
        throw new ContractError('ace.getRegistry', {
            messageOptions: {
                asset: assetAddress,
            },
            error,
        });
    }

    let balance;
    let oldMintCounterNote;

    const zeroNote = await aztec.note.createZeroValueNote();
    if (confidentialTotalMinted === zeroNote.noteHash) {
        balance = 0;
        oldMintCounterNote = zeroNote;
    } else {
        // TODO
    }

    const {
        address: ownerAddress,
        spendingPublicKey,
    } = notesOwner;

    const newMintCounterNote = await createNote(
        balance + amount,
        spendingPublicKey,
        ownerAddress,
    );

    const noteValues = Array.isArray(amount)
        ? amount
        : randomSumArray(amount, numberOfOutputNotes);

    const mintedNotes = await createNotes(
        noteValues,
        spendingPublicKey,
        ownerAddress,
    );

    const proof = new MintProof(
        oldMintCounterNote,
        newMintCounterNote,
        mintedNotes,
        assetAddress,
    );

    return {
        proof,
        notesOwner,
        outputNotes: mintedNotes,
    };
}