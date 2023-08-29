import {NextResponse} from 'next/server'
export async function POST(req,res){
    console.log(req);
    const data= await req.json()
    console.log(data);
    return NextResponse.json(("Hello"),{status:200})
}