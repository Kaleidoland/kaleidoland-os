'use client'
import { useChat } from 'ai/react'
import { useState } from 'react'
export default function OrbitalChat(){
 const [open,setOpen]=useState(false)
 const {messages,input,handleInputChange,handleSubmit}=useChat({api:'/api/chat'})
 if(!open) return <button onClick={()=>setOpen(true)} className="fixed bottom-6 right-6 px-4 py-2 bg-violet-600 rounded-full">ORBITAL CHAT</button>
 return <div className="fixed bottom-6 right-6 w-80 h-96 bg-black/80 backdrop-blur border border-white/10 rounded-2xl flex flex-col">
  <div className="p-3 border-b border-white/10 flex justify-between"><span>ORBITAL</span><button onClick={()=>setOpen(false)}>×</button></div>
  <div className="flex-1 overflow-auto p-3 space-y-2 text-sm">{messages.map(m=><div key={m.id} className={m.role==='user'?'text-right':''}>{m.content}</div>)}</div>
  <form onSubmit={handleSubmit} className="p-2 border-t border-white/10"><input value={input} onChange={handleInputChange} placeholder="Ask ORBITAL..." className="w-full bg-transparent outline-none text-sm"/></form>
 </div>
}
