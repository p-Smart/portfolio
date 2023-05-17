

export default function setSession(key, value){
    fetch(`/api/setSession?key=${key}&value=${value}`)
}