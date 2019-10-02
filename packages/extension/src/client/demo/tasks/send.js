import {
    log,
} from '~utils/log';

export default async function send(asset, transactions, options) {
    log('Generating send proof...');
    const sendProof = await asset.send(transactions, options);
    log(sendProof.export());

    log('Approving send proof...');
    await sendProof.approve();
    log('Approved!');

    log('Sending...');
    await sendProof.send();
    log(`Successfully sent ${sendAmount} to account '${receiver}'.`);
}
