/**
 * This code is closed source and Confidential and Proprietary to
 * Appcelerator, Inc. All Rights Reserved.  This code MUST not be
 * modified, copy or otherwise redistributed without expression
 * written permission of Appcelerator. This file is licensed as
 * part of the Appcelerator Platform and governed under the terms
 * of the Appcelerator license agreement.
 */

var request = require('request-ssl'),
	path = require('path');

// load up the fingerprints from our local directory
request.addFingerprintDirectory(path.join(__dirname,'fingerprints'));

// fall back to support a fingerprint list from ENV
// these should overwrite any built in ones.  this is useful
// if we need to field augment any fingerprints or add customer specific
// fingerprints such as for VPC or Private Cloud
if (process.env.APPC_FINGERPRINT_DIRECTORY) {
	request.addFingerprintDirectory(process.env.APPC_FINGERPRINT_DIRECTORY);
}

module.exports = request;

// expose our domains, helpful in testing
request.APPC_DOMAINS = require('./generate').DOMAINS;