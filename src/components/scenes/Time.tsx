export default function Time({ day }: { day: number }) {
  return (
    <div>
      <div className="font-semibold">Time</div>
      <div className="opacity-80">
        {day} {day === 1 ? "day" : "days"}
      </div>
    </div>
  );
}
