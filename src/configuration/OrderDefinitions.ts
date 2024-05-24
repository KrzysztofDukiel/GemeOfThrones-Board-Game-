import { EnumHouse } from "../enums/EnumHouse"
import {Order} from "../models/Order"


export const OrderDefiniton = [
    new Order({id:1,order: "attack+1",type: "special", houseName: EnumHouse.LANNISTER}),
    new Order({id:2,order: "attack0",type: "common", houseName: EnumHouse.LANNISTER}),
    new Order({id:3,order: "attack-1",type: "common", houseName: EnumHouse.LANNISTER}),
    new Order({id:4,order: "defend+2",type: "special", houseName: EnumHouse.LANNISTER}),
    new Order({id:5,order: "defend+1",type: "common", houseName: EnumHouse.LANNISTER }),
    new Order({id:6,order: "defend+1",type: "common", houseName: EnumHouse.LANNISTER}),
    new Order({id:7,order: "pillage+",type: "special", houseName: EnumHouse.LANNISTER}),
    new Order({id:8,order: "pillage",type: "common", houseName: EnumHouse.LANNISTER}),
    new Order({id:9,order: "pillage",type: "common", houseName: EnumHouse.LANNISTER}),
    new Order({id:10,order: "support+1",type: "special", houseName: EnumHouse.LANNISTER}),
    new Order({id:11,order: "support",type: "common", houseName: EnumHouse.LANNISTER}),
    new Order({id:12,order: "support",type: "common", houseName: EnumHouse.LANNISTER}),
    new Order({id:13,order: "power+",type: "special", houseName: EnumHouse.LANNISTER}),
    new Order({id:14,order: "power",type: "common", houseName: EnumHouse.LANNISTER}),
    new Order({id:15,order: "power",type: "common", houseName: EnumHouse.LANNISTER }),

]
