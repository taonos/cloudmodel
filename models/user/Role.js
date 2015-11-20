/*
|--------------------------------------------------------------------------
| Environment Initialization
|--------------------------------------------------------------------------
*/
"use strict"

/*
|--------------------------------------------------------------------------
| Model Definition
|--------------------------------------------------------------------------
*/

var Role = function(av) {
  return av.Object.extend("_Role", {

    initialize: function() {
      Object.defineProperty(this, "name", {
        get: function() {
          return this.get("name")
        },
        set: function(value) {
          this.set("name", value)
        },
        enumerable: true
      })

      Object.defineProperty(this, "isActive", {
        get: function() {
          return this.get("isActive")
        },
        set: function(value) {
          this.set("isActive", value)
        },
        enumerable: true
      })
    }

  }, {

  })
}

module.exports = Role
