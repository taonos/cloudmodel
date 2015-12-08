"use strict";

var City = function(av) {
  return av.Object.extend("City", {

    initialize: function() {

      Object.defineProperty(this, "name", {
        get: function() {
          return this.get("name");
        },
        set: function(value) {
          this.set("name", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "shortName", {
        get: function() {
          return this.get("shortName");
        },
        set: function(value) {
          this.set("shortName", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "provinceId", {
        get: function() {
          return this.get("provinceId");
        },
        set: function(value) {
          this.set("provinceId", value);
        },
        enumerable: true
      });

      Object.defineProperty(this, "isActive", {
        get: function() {
          return this.get("isActive");
        },
        set: function(value) {
          this.set("isActive", value);
        },
        enumerable: true
      });
    }

  }, {

  });
};

module.exports = City;
