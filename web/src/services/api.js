import service from "./http"

export const Auth = payload => service.post("authenticate", {code: payload })
export const Profile = () => service.get("profile")
export const Messages = () => service.get("messages/last3")
