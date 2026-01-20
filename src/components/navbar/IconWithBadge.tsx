
// components/IconWithBadge.tsx
'use client';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface IconWithBadgeProps {
  icon: React.ElementType;
  badgeVariant: 'default' | 'secondary';
  badgeContent?: string;
  badgeColor?: string; // Added badgeColor prop
}

export function IconWithBadge({ 
  icon: Icon, 
  badgeVariant, 
  badgeContent,
  badgeColor
}: IconWithBadgeProps) {
  // Determine badge style based on variant or custom color
  const getBadgeStyle = () => {
    if (badgeColor) {
      return { backgroundColor: badgeColor };
    }
    return badgeVariant === 'secondary' 
      ? { backgroundColor: '#D1D5DC' } 
      : { backgroundColor: '#155DFC' };
  };

  return (
    <Button variant="ghost" size="icon" className="relative" style={{ color: '#364153' }}>
      <Icon className="h-5 w-5" />
      {badgeContent && (
        <Badge 
          variant={badgeVariant} 
          className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
          style={getBadgeStyle()}
        >
          {badgeContent}
        </Badge>
      )}
    </Button>
  );
}