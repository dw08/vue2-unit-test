import request from "@/utils/request";
export function getGoodsList (payload) {
  return request.post("getGoodsList", payload);
}