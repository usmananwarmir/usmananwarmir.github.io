type FrameLabelProps = {
  label: string;
  symbol?: string;
};

export function FrameLabel({ label, symbol = "◈" }: FrameLabelProps) {
  return (
    <p className="mono-label text-cyan-accent/80 mb-4">
      {symbol} {label}
    </p>
  );
}
