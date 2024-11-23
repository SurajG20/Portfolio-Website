"use client";

import React from "react";
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

interface ActionButtonProps {
  actionText: string;
  href?: string;
  icon?: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

export default function ActionButton({ 
  actionText,
  href = "/#contact",
  icon = <CheckCircle className="mr-2 h-4 w-4" />,
  variant = "default",
  size = "default"
}: ActionButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <Button 
      onClick={handleClick}
      variant={variant}
      size={size}
    >
      {icon}
      {actionText}
    </Button>
  );
}
