export const encodeRepoName=(name:string)=>{
    return name.replaceAll(".","-dot-")
}

export const decodeRepoName=(name:string)=>{
    return name.replaceAll("-dot-",".")
}