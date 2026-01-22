"use client";

class HttpRequest {
  #api_host: string;

  constructor() {
    this.#api_host = "https://backend-five-wheat-50.vercel.app/";
  }

  async get({ onError, onSuccess, query }: GetQuery & { query: string }) {
    try {
      const res = await fetch(this.#api_host.concat(query), {
        method: "GET",
        cache: "no-cache",
      });
      if (res.ok) {
        const data = await res.json();
        if (onSuccess) onSuccess(data);
        return data;
      } else throw new Error(String(res.status));
    } catch (e) {
      console.log(e);
      if (onError) onError(e);
      return;
    }
  }

  async post({
    onError,
    onSuccess,
    body,
    query,
  }: PostQuery & { query: string }) {
    try {
      const res = await fetch(this.#api_host.concat(query), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        const data = await res.json();
        if (onSuccess) onSuccess(data);
        return data;
      } else throw new Error(String(res.status));
    } catch (e) {
      console.log(e);
      if (onError) onError(e);
      return;
    }
  }

  async put({
    onError,
    onSuccess,
    body,
    query,
  }: PostQuery & { query: string }) {
    try {
      const res = await fetch(this.#api_host.concat(query), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        const data = await res.json();
        if (onSuccess) onSuccess(data);
        return data;
      } else throw new Error(String(res.status));
    } catch (e) {
      console.log(e);
      if (onError) onError(e);
      return;
    }
  }

  async patch({
    onError,
    onSuccess,
    body,
    query,
  }: PostQuery & { query: string }) {
    try {
      const res = await fetch(this.#api_host.concat(query), {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        const data = await res.json();
        if (onSuccess) onSuccess(data);
        return data;
      } else throw new Error(String(res.status));
    } catch (e) {
      console.log(e);
      if (onError) onError(e);
      return;
    }
  }

  async delete({ onError, onSuccess, query }: GetQuery & { query: string }) {
    try {
      const res = await fetch(this.#api_host.concat(query), {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        if (onSuccess) onSuccess(data);
        return data;
      } else throw new Error(String(res.status));
    } catch (e) {
      console.log(e);
      if (onError) onError(e);
      return;
    }
  }
}

interface PostQuery {
  body: object;
  onSuccess: (data: object) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError: (error: any) => void;
}

interface GetQuery {
  onSuccess: (data: object) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError: (error: any) => void;
}

export default class Api {
  #httpRequest: HttpRequest;

  constructor() {
    this.#httpRequest = new HttpRequest();
  }

  async sendContacts({ body, onSuccess, onError }: PostQuery) {
    return this.#httpRequest.post({
      body,
      query: "/send-contacts",
      onSuccess,
      onError,
    });
  }
}
