export interface ListInt{
    userId:number,
    id:number,
    title:string,
    introduce:string
}
interface selectDataInt{
    title:string,
    introduce:string,
    page:number,
    count:number,
    pagesize:number,//默认一页显示几条
}
export class InitData{
    selectData:selectDataInt={
        title:"",
        introduce:"",
        page:1,
        count:0,
        pagesize:5

    }
    list:ListInt[]=[]
}