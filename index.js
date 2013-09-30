'use strict';

var Reader = require('./lib/Reader.js'),
    GeoIP2;

GeoIP2 = module.exports = function (database) {
    if (database === undefined) {
        throw new Error('GeoIP2: No Database given');
    }

    this.reader = new Reader(database);
};

GeoIP2.prototype.getGeoData = function getGeoData(ipAddress) {
    this.reader.get(ipAddress);
};

GeoIP2.prototype.getDatabaseMetadata = function getDatabaseMetadata() {
    return this.reader.getMetadata();
};