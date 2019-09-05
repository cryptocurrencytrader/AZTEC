pragma solidity >=0.5.0 <= 0.6.0;

/**
 * @title MetaDataUtils
 * @author AZTEC
 * @dev Library of MetaData manipulation operations
 * Copyright Spilsbury Holdings Ltd 2019. All rights reserved.
 **/


contract MetaDataUtils {
    /**
    * @dev Extract a single approved address from the metaData
    * @param metaData - metaData containing addresses according to the schema defined in x
    * @param addressPos - indexer for the desired address, the one to be extracted
    * @return desiredAddress - extracted address specified by the inputs to this function
    */
    function extractAddress(bytes memory metaData, uint256 addressPos) public returns (address desiredAddress) {
        /**
        * Memory map of metaData
        * 0x00 - 0x20 : length of metaData
        * 0x20 - 0x81 : ephemeral key
        * 0x81 - 0xa1 : approved addresses offset
        * 0xa1 - 0xc1 : encrypted view keys offset
        * 0xc1 - 0xe1 : app data offset
        * 0xe1 - L_addresses : approvedAddresses
        * (0xe1 + L_addresses) - (0xe1 + L_addresses + L_encryptedViewKeys) : encrypted view keys
        * (0xe1 + L_addresses + L_encryptedViewKeys) - (0xe1 + L_addresses + L_encryptedViewKeys + L_appData) : appData
        */
        assembly {
            desiredAddress := mload(
                add(
                    add(
                        metaData,
                        add(0xe1, 0x20)  // go to the start of addresses, jump over first word
                    ),
                    mul(addressPos, 0x20) // jump to the desired address
                )
            )
        }
    }
}
