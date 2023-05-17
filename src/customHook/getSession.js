

export default async function getSession(key){
    const res = await( await( fetch(`/api/getSession`) ) ).json()
    return res[key]
}