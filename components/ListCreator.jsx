import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function ListCreator({ onAdd }) {
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("🗂️");

  return (
    <div className="flex gap-2">
      <Input value={emoji} onChange={(e)=> setEmoji(e.target.value)} className="w-16 text-center bg-white/5 border-white/10"/>
      <Input value={name} onChange={(e)=> setName(e.target.value)} placeholder="New list name" className="bg-white/5 border-white/10"/>
      <Button onClick={()=> { if(!name.trim()) return; onAdd(name.trim(), emoji || "🗂️"); setName(""); }}>
        <Plus className="w-4 h-4 mr-1"/> Add
      </Button>
    </div>
  );
}
