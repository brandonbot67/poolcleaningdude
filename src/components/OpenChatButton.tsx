"use client";

export default function OpenChatButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event("open-chat"))}
      className={className}
    >
      {children}
    </button>
  );
}
