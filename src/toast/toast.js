import { toast } from "react-toastify";

export function toastSuccess(string, timeout=2000){
    toast.success(`🦄 ${string}!`, {
        position: "bottom-center",
        autoClose: 2000,
        pauseOnHover: true,
        });
}
export function toastError(string, emoji=true, timeout=2000){
    var e = "😖";
    toast.error(`${emoji ? e : ""} ${string}!`, {
        position: "bottom-center",
        autoClose: 2000,
        pauseOnHover: true,
        });
}