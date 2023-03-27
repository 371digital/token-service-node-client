"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serviceUrl = exports.endPoints = void 0;
var serviceUrl = "https://token-service.371digital.com";
exports.serviceUrl = serviceUrl;
var endPoints = {
  "validateToken": function validateToken(token, slug) {
    return "".concat(serviceUrl, "/validateToken?token=").concat(token, "&slug=").concat(slug);
  }
};
exports.endPoints = endPoints;
//# sourceMappingURL=index.js.map