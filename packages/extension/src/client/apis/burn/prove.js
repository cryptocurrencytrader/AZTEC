import aztec from 'aztec.js';
import {
    createNote,
    valueOf,
} from '~utils/note';
import asyncMap from '~utils/asyncMap';
import Web3Service from '~client/services/Web3Service';
import ContractError from '~client/utils/ContractError';
import validateExtensionAccount from '../utils/validateExtensionAccount';
import toAztecNote from '../utils/toAztecNote';

const {
    BurnProof,
} = aztec;

export default async function proveBurn({
    assetAddress,
    notes,
    sender,
}) {
    const notesOwner = await validateExtensionAccount(sender);

    let confidentialTotalBurned;
    try {
        ({
            confidentialTotalBurned,
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
    let oldBurnedCounterNote;

    const zeroNote = await aztec.note.createZeroValueNote();
    if (confidentialTotalBurned === zeroNote.noteHash) {
        balance = 0;
        oldBurnedCounterNote = zeroNote;
    } else {
        // TODO
    }

    const {
        address: ownerAddress,
        spendingPublicKey,
        linkedPublicKey,
    } = notesOwner;

    const aztecNotes = await asyncMap(notes, async note => toAztecNote(note));
    const amount = aztecNotes.reduce((accum, n) => accum + valueOf(n), 0);
    const newBurnedCounterNote = await createNote(
        balance + amount,
        spendingPublicKey,
        ownerAddress,
        linkedPublicKey,
    );

    const proof = new BurnProof(
        oldBurnedCounterNote,
        newBurnedCounterNote,
        aztecNotes,
        assetAddress,
    );

    return {
        proof,
        notesOwner,
        inputNotes: aztecNotes,
    };
}