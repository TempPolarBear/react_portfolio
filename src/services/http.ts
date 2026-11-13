import ky from "ky";

export const http = ky.create({
  hooks: {
    beforeRequest: [
      ({request}) => {
        request.headers.set("Authorization", "Bearer my-token");
      },
    ],
  }
});

