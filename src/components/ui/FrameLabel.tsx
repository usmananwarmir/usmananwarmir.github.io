type FrameLabelProps = {
  label: string;
  symbol?: string;
};

export function FrameLabel({ label, symbol = "◈" }: FrameLabelProps) {
  return (
    <p className="mono-label text-aqua-accent/90 mb-4">
      {symbol} {label}
    </p>
  );
}
