import Api from "./api";
import { useState } from "react";

export default function useSendContacts(handleSuccess: () => void) {
  const api = new Api();
  const [data, setData] = useState<{data: object | null, isPending: boolean, error: object | null}>({data: null, isPending: false, error: null});

  async function onSuccess(data: object) {
    setData({data, isPending: false, error: null});
    handleSuccess();
  }

  async function onError(error: object) {
    setData({data: null, isPending: false, error});
  }

  async function sendContacts(body: object) {
    setData({data: null, isPending: true, error: null});
    await api.sendContacts({body, onSuccess, onError});
  }

  return {sendContacts, data};
}