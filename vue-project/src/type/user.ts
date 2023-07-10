export interface ListInt{
    id:number
    nickName:string
    role: RoleInt[]
    userName:string
}
interface RoleInt{
    role:number,
    roleName:string
}
interface selectDataInt{
    role:number,
    nickName:string
}
interface roleListInt{
    authority:number[]
    roleId:number
    roleName:string
}
interface ActiveInt{
    id:number
    nickName:string
    role: number[]
    userName:string
}
export class InitData{
    selectData:selectDataInt={
        nickName:"",
        role: 0
    }
    list:ListInt[]=[]//用来接收用户信息的列表
    roleList:roleListInt[]=[]//用来接收角色信息的列表
    isShow=false;
    active:ActiveInt={
        id:0,
        nickName:"",
        role:[],
        userName:""
    }
}