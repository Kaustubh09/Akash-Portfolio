// Reusable, lightweight SVG decorations themed around the stock market.
// Every variant is purely decorative (pointer-events: none, aria-hidden) and
// designed to sit BEHIND content via `absolute inset-0 -z-10`.
//
// Variants:
//   "candles" : a row of mini bullish candlesticks at the bottom
//   "chart"   : a flowing upward line chart with a soft glow + dotted points
//   "grid"    : a faint trading-chart grid (vertical + horizontal lines)
//   "ticker"  : a row of stylised stock-ticker symbols & arrows
//
// IDs inside each SVG are namespaced via `useId()` so multiple instances on
// the same page never collide on `<defs>` ids.

import { memo, useId } from 'react';

function CandlesBackdrop({ className = '' }) {
  // 60 candles with a gentle bullish drift — enough to span wide screens
  // even with `preserveAspectRatio` set to "none" stretching them out.
  const candleHeights = [
    25, 35, 30, 45, 28, 50, 38, 55, 32, 60, 45, 70, 52, 65, 48, 78, 60, 85,
    70, 95, 80, 88, 72, 100, 85, 110, 92, 105, 78, 120, 100, 115, 90, 130,
    108, 125, 95, 140, 118, 132, 112, 150, 128, 142, 120, 158, 138, 152,
    130, 165, 145, 160, 140, 175, 155, 168, 148, 180, 162, 172,
  ];
  const candleBody = (h) => Math.max(14, Math.round(h * 0.6));
  const candleColors = candleHeights.map((_, i) =>
    [3, 7, 11, 15, 19, 23, 28, 33, 39, 46, 53].includes(i) ? 'down' : 'up'
  );
  const baseY = 200;
  const spacing = 16;
  const totalW = candleHeights.length * spacing;

  return (
    <svg
      className={`pointer-events-none select-none ${className}`}
      viewBox={`0 0 ${totalW} 220`}
      preserveAspectRatio="none"
      aria-hidden
    >
      {candleHeights.map((h, i) => {
        const cx = i * spacing + 8;
        const body = candleBody(h);
        const wickTop = baseY - h;
        const bodyTop = baseY - body;
        const color = candleColors[i];
        const upFill = '#f5c518';
        const downFill = '#6b7280';
        const fill = color === 'up' ? upFill : downFill;
        return (
          <g key={i} opacity={color === 'up' ? 0.85 : 0.55}>
            <line
              x1={cx}
              x2={cx}
              y1={wickTop}
              y2={baseY}
              stroke={fill}
              strokeWidth="1.5"
            />
            <rect x={cx - 5} y={bodyTop} width="10" height={body} fill={fill} rx="1" />
          </g>
        );
      })}
    </svg>
  );
}

function ChartBackdrop({ className = '' }) {
  const uid = useId().replace(/:/g, '');
  const fillId = `cf-${uid}`;
  const strokeId = `cs-${uid}`;
  const glowId = `cg-${uid}`;

  return (
    <svg
      className={`pointer-events-none select-none ${className}`}
      viewBox="0 0 800 300"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id={fillId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#f5c518" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#f5c518" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={strokeId} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#f5c518" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.95" />
        </linearGradient>
        <filter id={glowId}>
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      {/* Area under curve */}
      <path
        d="M0,250 C100,230 180,200 260,180 S420,140 520,110 S700,80 800,40 L800,300 L0,300 Z"
        fill={`url(#${fillId})`}
      />
      {/* Glow line */}
      <path
        d="M0,250 C100,230 180,200 260,180 S420,140 520,110 S700,80 800,40"
        stroke={`url(#${strokeId})`}
        strokeWidth="4"
        fill="none"
        filter={`url(#${glowId})`}
      />
      {/* Sharp line on top */}
      <path
        d="M0,250 C100,230 180,200 260,180 S420,140 520,110 S700,80 800,40"
        stroke={`url(#${strokeId})`}
        strokeWidth="2"
        fill="none"
      />
      {/* Data points */}
      {[
        [0, 250],
        [200, 195],
        [400, 155],
        [600, 100],
        [800, 40],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#f5c518" opacity="0.85" />
      ))}
    </svg>
  );
}

function GridBackdrop({ className = '' }) {
  const uid = useId().replace(/:/g, '');
  const minorId = `gm-${uid}`;
  const majorId = `gM-${uid}`;
  return (
    <svg
      className={`pointer-events-none select-none ${className}`}
      width="100%"
      height="100%"
      aria-hidden
    >
      <defs>
        <pattern id={minorId} x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          <path
            d="M 48 0 L 0 0 0 48"
            fill="none"
            stroke="#f5c518"
            strokeOpacity="0.08"
            strokeWidth="1"
          />
        </pattern>
        <pattern id={majorId} x="0" y="0" width="240" height="240" patternUnits="userSpaceOnUse">
          <rect width="240" height="240" fill={`url(#${minorId})`} />
          <path
            d="M 240 0 L 0 0 0 240"
            fill="none"
            stroke="#f5c518"
            strokeOpacity="0.14"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${majorId})`} />
    </svg>
  );
}

function TickerBackdrop({ className = '' }) {
  // Stylised ticker symbols — pure decoration, no real data
  const tickers = [
    { sym: 'NIFTY', val: '+1.24%', up: true },
    { sym: 'SENSEX', val: '+0.86%', up: true },
    { sym: 'RELIANCE', val: '-0.42%', up: false },
    { sym: 'HDFC', val: '+2.10%', up: true },
    { sym: 'TCS', val: '+0.55%', up: true },
    { sym: 'INFY', val: '+1.88%', up: true },
    { sym: 'BANKNIFTY', val: '+0.93%', up: true },
    { sym: 'ICICI', val: '-0.18%', up: false },
  ];
  return (
    <div
      className={`pointer-events-none select-none flex items-center gap-8 whitespace-nowrap ${className}`}
      aria-hidden
    >
      {tickers.concat(tickers).map((t, i) => (
        <span key={i} className="inline-flex items-baseline gap-2 font-mono text-xs tracking-widest">
          <span className="text-ink-dim font-bold">{t.sym}</span>
          <span className={t.up ? 'text-gold-400' : 'text-red-400/70'}>
            {t.up ? '▲' : '▼'} {t.val}
          </span>
        </span>
      ))}
    </div>
  );
}

function StockBackdrop({ variant = 'chart', className = '' }) {
  switch (variant) {
    case 'candles':
      return <CandlesBackdrop className={className} />;
    case 'grid':
      return <GridBackdrop className={className} />;
    case 'ticker':
      return <TickerBackdrop className={className} />;
    case 'chart':
    default:
      return <ChartBackdrop className={className} />;
  }
}

export default memo(StockBackdrop);
