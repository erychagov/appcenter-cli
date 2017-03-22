/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the SampleDevices class.
 * @constructor
 * List of sample devices.
 *
 * @member {array} values List of sample devices.
 * 
 */
function SampleDevices() {
}

/**
 * Defines the metadata of SampleDevices
 *
 * @returns {object} metadata of SampleDevices
 *
 */
SampleDevices.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'SampleDevices',
    type: {
      name: 'Composite',
      className: 'SampleDevices',
      modelProperties: {
        values: {
          required: true,
          serializedName: 'values',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'DeviceElementType',
                type: {
                  name: 'Composite',
                  className: 'Device'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = SampleDevices;