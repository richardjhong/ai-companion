"use client";

import { Companion, Message } from "@prisma/client";
import { useRouter } from "next/navigation";
import { ChevronLeft, MessagesSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import BotAvatar from "@/components/BotAvatar";

interface ChatHeaderProps {
  companion: Companion & {
    messages: Message[];
    _count: {
      messages: number;
    };
  };
}

const ChatHeader = ({ companion }: ChatHeaderProps) => {
  const router = useRouter();

  return (
    <div className="flex w-full justify-between items-center border-b border-primary/10 pb-4">
      <div className="flex gap-x-2 items-center">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => router.back()}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <BotAvatar src={companion.src} />
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-2">
            <p className="font-bold">{companion.name}</p>
            <div className="flex items-center text-xs text-muted-foreground">
              <MessagesSquare className="w-3 h-3 mr-1" />
              {companion._count.messages}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;