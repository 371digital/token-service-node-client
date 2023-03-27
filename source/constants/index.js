export const serviceUrl = "https://token-service.371digital.com";

export const endPoints = {
    "validateToken": (token, slug) => `${serviceUrl}/validateToken?token=${token}&slug=${slug}`
};