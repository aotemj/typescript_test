{
    let str = ''

    function id(target: Function, key: string, index: number): any {
        console.log(`target: ${target}`);
        console.log(`key: ${key}`);
        console.log(`index: ${index}`);
        str += 'Decorated! ';
    }

    class Klass {
        constructor(@id private param: any) {
        }
    }

    str += 'Ready! '

    const k = new Klass('123');

    str+= 'Initialized!'
    console.log(str);
}

// {
//
//     export function createDecorator<T> (serviceId:string): ServiceIdentifier<T>{
//         // 装饰器会被缓存
//         if (_util.serviceIds.has(serviceId)){
//             return _util.serviceIds.get(serviceId)!;
//         }
//
//         const Id = <any> function(target:Function ,key:string,index:number):any{
//             if(arguments.length!==3){
//                 throw new Error('@IserviceName-decorator can only be used to decorate a parameter');
//                 storeServiceDependency(id,target,index,false);
//             }
//         }
//         id.toString = ()=>serviceId;
//         return id
//     }
//
//     function storeServiceDependency (id:Function, target:Function,index:number,optional:boolean){
//         if((target as any)[_util.DI_TARGET] === target){
//             (target as any) [_util.DI_DEPENDENCIES].push({id,index,optional})
//         }else {
//             (target as any) [_util.DI_DEPENDENCIES] = [{id,index,optional}]
//             (target as any)[_util.DI_TARGET]= target
//         }
//
//     }
// }
