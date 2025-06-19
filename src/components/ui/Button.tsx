import * as React from "react";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  borderColor?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, borderColor = '#ffd600', style, ...props }, ref) => (
    <div
      className="animated-border"
      style={{ '--border-color': borderColor, ...style } as React.CSSProperties}
    >
      <button
        ref={ref}
        className={
          "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none " +
          (className || "")
        }
        {...props}
      />
    </div>
  )
);
Button.displayName = "Button"; 