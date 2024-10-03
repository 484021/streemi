export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="animate-[spin_2s_linear_infinite] rounded-full border-8 border-primary border-t-transparent h-32 w-32 md:h-48 md:w-48" />
      <div className="animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] mt-4 text-3xl md:text-5xl font-bold text-primary-foreground ml-5">
        Loading...
      </div>
    </div>
  );
}
