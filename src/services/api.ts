import ky from "ky";

export const api = ky.create({
  hooks: {
    beforeRequest: [
      ({request}) => {
        request.headers.set("Authorization", "Bearer my-token");
      },
    ],
  }
});

