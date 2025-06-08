import { Card, CardContent } from "../ui/card";

const LuckyNumberData = [
    {number: 1111},
    {number: 2222},
    {number: 3333},
    {number: 4444},
    {number: 5555},
    {number: 6666},
    {number: 7777},
    {number: 8888},
    {number: 9999},
    {number: "0000"}

]
export default function LuckyNumber(){
    return(
        <div className="px-20 py-10 bg-neutral-900 text-white">
            <h1 className="text-2xl font-bold text-center mb-4">Al hacer cualquier compra puedes obtener la oportunidad de obtener estos número de la suerte</h1>
            <div className="grid grid-cols-5 gap-4 justify-items-center">
                
                {LuckyNumberData.map((item, index) => (
                    <Card
                    className="h-[60px] w-[210px] bg-orange-500"
                    key ={index}>
                    
                    <CardContent className="text-center items-center text-xl font-bold text-neutral-800">
                        {item.number}
                    </CardContent>
                </Card>
                ))}
                
            </div>
        </div>
    );
}